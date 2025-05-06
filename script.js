function submitFavorite() {
  const select = document.getElementById('favoriteWrestler');
  const result = document.getElementById('voteResult');
  const name = select.value;

  if (name) {
    result.textContent = `Thanks for voting for ${name}!`;
    result.classList.add('show');
  }
}

function resetVote() {
  document.getElementById('favoriteWrestler').selectedIndex = 0;
  const result = document.getElementById('voteResult');
  result.textContent = '';
  result.classList.remove('show');
}

