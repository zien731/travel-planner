function generatePlan() {
  const location = document.getElementById("location").value;
  const days = parseInt(document.getElementById("days").value);
  const preference = document.getElementById("preference").value;
  const resultDiv = document.getElementById("result");

  if (!location || !days || !preference) {
    resultDiv.innerHTML = "⚠️ 請完整填寫旅遊地點、天數與偏好";
    return;
  }

  // 不同旅遊活動模板（模擬 AI 思考）
  const morningPlans = [
    `參觀 ${location} 知名地標`,
    `探索 ${location} 歷史文化景點`,
    `安排自然風景行程`,
    `造訪當地特色市集`,
    `參觀博物館或展覽`
  ];

  const afternoonPlans = [
    `進行 ${preference} 相關深度體驗`,
    `安排自由活動與拍照行程`,
    `體驗當地特色文化活動`,
    `探索隱藏版景點`,
    `安排購物或休閒行程`
  ];

  const eveningPlans = [
    `享用 ${location} 在地美食`,
    `體驗夜景或夜市文化`,
    `安排輕鬆散步行程`,
    `自由活動或休息時間`,
    `體驗當地夜生活`
  ];

  let plan = `<h3>📍 ${location} ${days} 天旅遊行程（偏好：${preference}）</h3>`;

  for (let i = 1; i <= days; i++) {
    const morning = morningPlans[i % morningPlans.length];
    const afternoon = afternoonPlans[i % afternoonPlans.length];
    const evening = eveningPlans[i % eveningPlans.length];

    plan += `
      <p>
        <strong>Day ${i}：</strong><br>
        上午：${morning}<br>
        下午：${afternoon}<br>
        晚上：${evening}
      </p>
    `;
  }

  plan += `
    <p style="color: gray;">
      ✨ 本行程由系統根據使用者輸入條件，
      透過模擬 AI 推薦邏輯自動產生，僅供旅遊規劃參考。
    </p>
  `;

  resultDiv.innerHTML = plan;
}
