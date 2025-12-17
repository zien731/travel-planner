alert("script.js 已成功執行");

function generatePlan() {
  const location = document.getElementById("location").value;
  const days = document.getElementById("days").value;
  const preference = document.getElementById("preference").value;
  const resultDiv = document.getElementById("result");

  if (!location || !days || !preference) {
    resultDiv.innerHTML = "⚠️ 請完整填寫旅遊地點、天數與偏好";
    return;
  }

  let plan = `<h3>📍 ${location} ${days} 天旅遊行程（偏好：${preference}）</h3>`;

  for (let i = 1; i <= days; i++) {
    plan += `
      <p>
        <strong>Day ${i}：</strong><br>
        上午：探索 ${location} 代表性景點<br>
        下午：安排 ${preference} 相關活動<br>
        晚上：體驗當地美食與夜生活
      </p>
    `;
  }

  plan += `
    <p>
      ✨ <em>此行程由 AI 根據使用者輸入條件自動產生，  
      可作為旅遊規劃參考。</em>
    </p>
  `;

  resultDiv.innerHTML = plan;
}
