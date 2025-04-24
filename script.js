const foods = [
    "カレーライス", 
    "ラーメン", 
    "お寿司", 
    "焼肉", 
    "うどん", 
    "オムライス", 
    "タコライス", 
    "チャーハン", 
    "ピザ", 
    "サンドイッチ"
  ];
  
  function decideDinner() {
    const randomIndex = Math.floor(Math.random() * foods.length);
    const selected = foods[randomIndex];
    document.getElementById("result").textContent = `今日のごはんは… ${selected}！`;
  }
  
