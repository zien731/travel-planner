function generatePlan() {
  const location = document.getElementById("location").value;
  const days = document.getElementById("days").value;
  const preference = document.getElementById("preference").value;
  const resultDiv = document.getElementById("result");

  if (!location || !days || !preference) {
    resultDiv.innerHTML = "⚠️ 請填寫所有欄位";
    return;
  }

  resultDiv.innerHTML = `
    <strong>📍 目的地：</strong>${location}<br>
    <strong>🕒 天數：</strong>${days} 天<br>
    <strong>❤️ 偏好：</strong>${preference}<br><br>

    <strong>✨ AI 旅遊行程建議：</strong><br>
    Day 1：探索當地熱門景點與 ${preference}<br>
    Day 2：安排特色活動與美食體驗<br>
    Day 3：自由行程與放鬆行程
  `;
}