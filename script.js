// Example: Show favorite wrestler on form submit (can be expanded later)
function showFavorite() {
    const name = document.getElementById("wrestlerInput").value;
    if (name.trim() === "") {
      alert("Please enter a name.");
    } else {
      document.getElementById("favoriteDisplay").innerText = `You
  