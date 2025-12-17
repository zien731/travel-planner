function generatePlan() {
  const location = document.getElementById("location").value;
  const days = parseInt(document.getElementById("days").value);
  const preference = document.getElementById("preference").value;
  const resultDiv = document.getElementById("result");

  if (!location || !days || !preference) {
    resultDiv.innerHTML = "⚠️ 請完整填寫所有欄位";
    return;
  }

  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // 🌍 城市資料庫（模擬 AI 知識）
  const travelDB = {
    台北: {
      美食: {
        morning: ["阜杭豆漿", "永和豆漿", "興安四海豆漿"],
        afternoon: ["金峰滷肉飯", "牛肉麵一條街", "鼎泰豐"],
        evening: ["士林夜市", "饒河夜市", "寧夏夜市"]
      },
      景點: {
        morning: ["中正紀念堂", "龍山寺", "象山步道"],
        afternoon: ["剝皮寮", "華山文創園區", "松菸文創園區"],
        evening: ["台北101 夜景", "大稻埕碼頭", "淡水老街"]
      },
      放鬆: {
        morning: ["北投溫泉", "陽明山步道"],
        afternoon: ["大安森林公園", "咖啡廳下午茶"],
        evening: ["淡水河畔散步", "夜景咖啡廳"]
      }
    },

    日本: {
      美食: {
        morning: ["築地市場早餐", "便利商店飯糰", "日式甜點（大福、糰子）", "抹茶甜點"],
        afternoon: ["拉麵名店", "壽司老店", "天婦羅", "炸豬排"],
        evening: ["居酒屋體驗", "章魚燒＋大阪燒", "烏龍麵", "一蘭拉麵"]
      },
      景點: {
        morning: ["淺草寺", "伏見稻荷大社", "雷門", "澀谷十字路口"],
        afternoon: ["清水寺", "金閣寺", "明治神宮", "伏見稻荷大社"],
        evening: ["東京晴空塔夜景", "大阪道頓堀", "上野公園", "新宿御苑"]
      },
      放鬆: {
        morning: ["日式溫泉", "郊區散步"],
        afternoon: ["咖啡廳", "書店巡禮"],
        evening: ["河岸夜景", "溫泉旅館休息"]
      }
    },

    高雄: {
      美食: {
        morning: ["興隆居早餐", "鹹豆漿"],
        afternoon: ["丹丹漢堡", "汕頭火鍋"],
        evening: ["六合夜市", "瑞豐夜市"]
      },
      景點: {
        morning: ["蓮池潭", "佛光山"],
        afternoon: ["駁二藝術特區", "棧貳庫"],
        evening: ["愛河夜景", "西子灣夕陽"]
      },
      放鬆: {
        morning: ["旗津海邊", "單車行程"],
        afternoon: ["海景咖啡廳", "駁二散步"],
        evening: ["港邊夜風", "夜景散步"]
      }
    }
  };

  let plan = `<h3>📍 ${location} ${days} 天旅遊行程（偏好：${preference}）</h3>`;

  for (let i = 1; i <= days; i++) {
    let morning, afternoon, evening;

    if (travelDB[location] && travelDB[location][preference]) {
      const data = travelDB[location][preference];
      morning = pick(data.morning);
      afternoon = pick(data.afternoon);
      evening = pick(data.evening);
    } else {
      morning = `探索 ${location} 當地特色`;
      afternoon = `安排 ${preference} 主題行程`;
      evening = `品嚐 ${location} 在地美食`;
    }

    plan += `
      <p>
        <strong>Day ${i}</strong><br>
        上午：${morning}<br>
        下午：${afternoon}<br>
        晚上：${evening}
      </p>
    `;
  }

  plan += `
    <p style="color: gray;">
      ✨ 本平台透過多城市旅遊資料庫與規則式推薦邏輯，
      模擬 AI 根據使用者偏好產生個人化旅遊行程。
    </p>
  `;

  resultDiv.innerHTML = plan;
}
