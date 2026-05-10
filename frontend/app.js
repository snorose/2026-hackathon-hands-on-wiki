const state = {
  mode: "text",
  quizzes: [],
};

const $ = (selector) => document.querySelector(selector);

$("#textMode").addEventListener("click", () => setMode("text"));
$("#fileMode").addEventListener("click", () => setMode("file"));
$("#analyze").addEventListener("click", analyze);

function setMode(mode) {
  state.mode = mode;
  $("#textMode").classList.toggle("active", mode === "text");
  $("#fileMode").classList.toggle("active", mode === "file");
  $("#textBox").classList.toggle("hidden", mode !== "text");
  $("#fileBox").classList.toggle("hidden", mode !== "file");
  $("#status").textContent = "";
}

async function analyze() {
  const webhookUrl = $("#webhookUrl").value.trim();
  const referenceText = $("#reference").value.trim();
  const status = $("#status");

  status.className = "status";
  status.textContent = "분석 중입니다...";
  $("#analyze").disabled = true;

  try {
    const request = await buildRequest(referenceText);
    const response = await fetch(webhookUrl, request);

    const data = await response.json();
    if (!response.ok || data.error) {
      throw new Error(data.error || `n8n 요청 실패 (${response.status})`);
    }

    renderResult(data);
    status.textContent = "분석이 완료되었습니다.";
  } catch (error) {
    status.className = "status error";
    status.textContent = error.message;
  } finally {
    $("#analyze").disabled = false;
  }
}

async function buildRequest(referenceText) {
  if (state.mode === "file") {
    const file = $("#document").files[0];
    if (!file) throw new Error("이미지 또는 PDF 파일을 선택해주세요.");

    const fileBase64 = await readFileAsDataUrl(file);

    return {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        reference_text: referenceText,
        mode: "file",
        file_name: file.name,
        mime_type: file.type || "application/octet-stream",
        file_base64: fileBase64,
      }),
    };
  }

  const content = $("#content").value.trim();
  if (!content) throw new Error("노트 내용을 입력해주세요.");

  return {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      reference_text: referenceText,
      mode: "text",
      content,
    }),
  };
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", () => reject(new Error("파일을 읽지 못했습니다.")));
    reader.readAsDataURL(file);
  });
}

function renderResult(data) {
  $("#feedback").className = "feedback";
  $("#feedback").innerHTML = renderFeedback(data.feedback || "피드백이 없습니다.");
  state.quizzes = Array.isArray(data.quizzes) ? data.quizzes : [];
  renderQuiz();
}

function renderFeedback(feedback) {
  if (!feedback.trim().startsWith("<feedback-case")) {
    return `<pre>${escapeHtml(feedback)}</pre>`;
  }

  const xml = new DOMParser().parseFromString(feedback, "text/xml");
  const success = xml.querySelector('feedback-case[type="success"] correct');
  if (success) {
    return `<div class="feedback-item"><strong>좋아요</strong><p>${escapeHtml(success.textContent)}</p></div>`;
  }

  return [...xml.querySelectorAll('feedback-case[type="error"] item')]
    .map((item) => `
      <div class="feedback-item">
        <strong>${escapeHtml(item.querySelector("number")?.textContent || "")}. ${escapeHtml(item.querySelector("wrong")?.textContent || "")}</strong>
        <p>수정: ${escapeHtml(item.querySelector("correct")?.textContent || "")}</p>
        <p>${escapeHtml(item.querySelector("explanation")?.textContent || "")}</p>
        <p>출처: ${escapeHtml(item.querySelector("reference")?.textContent || "")}</p>
      </div>
    `)
    .join("");
}

function renderQuiz() {
  const quiz = $("#quiz");
  if (!state.quizzes.length) {
    quiz.className = "quiz empty";
    quiz.textContent = "생성된 OX 퀴즈가 없습니다.";
    return;
  }

  quiz.className = "quiz";
  quiz.innerHTML = state.quizzes.map((item, index) => `
    <div class="quiz-card" data-index="${index}">
      <strong>${index + 1}. ${escapeHtml(item.question || "")}</strong>
      <div class="quiz-actions">
        <button type="button" data-answer="O">O</button>
        <button type="button" data-answer="X">X</button>
      </div>
      <div class="answer"></div>
    </div>
  `).join("");

  quiz.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".quiz-card");
      const item = state.quizzes[Number(card.dataset.index)];
      const answer = button.dataset.answer;
      const correct = answer === item.answer;
      card.querySelector(".answer").textContent =
        `${correct ? "정답" : "오답"} · 정답: ${item.answer} · ${item.explanation || ""}`;
    });
  });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
