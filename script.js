function submitFavorite() {
  const name = document.getElementById("favoriteWrestler").value;
  const result = document.getElementById("voteResult");

  result.innerText = `💙 Thanks for supporting ${name}!`;
  result.classList.remove("show");
  void result.offsetWidth; // Reflow to restart animation
  result.classList.add("show");
}

function resetVote() {
  document.getElementById("favoriteWrestler").selectedIndex = 0;
  const result = document.getElementById("voteResult");
  result.innerText = "";
  result.classList.remove("show");
}