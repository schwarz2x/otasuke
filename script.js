function decideDinner() {
  const checkboxes = document.querySelectorAll('input[name="food"]:checked');
  const selectedFoods = Array.from(checkboxes).map(cb => cb.value);

  if (selectedFoods.length === 0) {
    document.getElementById("result").textContent = "何か選んでください！";
    return;
  }

  const randomIndex = Math.floor(Math.random() * selectedFoods.length);
  const selected = selectedFoods[randomIndex];

  document.getElementById("result").textContent = `今日のごはんは… ${selected}！`;
}
