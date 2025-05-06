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

const highlights = [
  {
    img: 'https://via.placeholder.com/600x400',
    caption: 'Opening Match Victory',
    desc: 'The season kicked off with an exciting team win, setting the tone for an amazing year!'
  },
  {
    img: 'https://via.placeholder.com/600x400',
    caption: 'Senior Night Celebration',
    desc: 'An emotional farewell and celebration of our graduating athletes who shaped the team.'
  },
  {
    img: 'https://via.placeholder.com/600x400',
    caption: 'Tournament Champions',
    desc: 'Our team took 1st place at the Lady Panther Tournament, with multiple individual champions.'
  }
];

window.onload = function () {
  const container = document.getElementById('highlightContainer');
  if (container) {
    highlights.forEach(h => {
      container.innerHTML += `
        <div class="col-md-4">
          <div class="card">
            <img src="${h.img}" class="card-img-top" alt="${h.caption} - AI Generated">
            <div class="card-body">
              <h5 class="card-title">${h.caption}</h5>
              <p class="card-text">${h.desc}</p>
            </div>
          </div>
        </div>`;
    });
  }
};
