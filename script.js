// =================== Typing Effect for Hero ===================
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".hero-title");
  const text = "Marlboro Girls Wrestling 2024-25";
  let index = 0;
  function type() {
    if (index < text.length) {
      title.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }
  type(); // Start the typing effect
});

// =================== Voting Game ===================
const wrestlers = [
  "Nola Allen", "Talia Shrayef", "Hannah Jang", "Larisa Avestiyan", "Lucianna Plantamura",
  "Rodaina Elshafey", "Ashlee Chen", "Antonella Gonzalez", "Anye Mendez",
  "Francesca Pignata", "Kira Fisher", "Sidney Kocur"
];

function loadVotes() {
  return JSON.parse(localStorage.getItem("wrestlerVotes")) || {};
}

function saveVotes(votes) {
  localStorage.setItem("wrestlerVotes", JSON.stringify(votes));
}

function voteForWrestler() {
  const select = document.getElementById("wrestlerSelect");
  const selected = select.value;
  if (!selected) return;

  const votes = loadVotes();
  votes[selected] = (votes[selected] || 0) + 1;
  saveVotes(votes);
  displayVoteResults();
}

function displayVoteResults() {
  const results = document.getElementById("voteResults");
  const votes = loadVotes();
  const total = Object.values(votes).reduce((a, b) => a + b, 0);

  let html = "<ul class='list-group'>";
  wrestlers.forEach(w => {
    const count = votes[w] || 0;
    const percentage = total ? ((count / total) * 100).toFixed(1) : 0;
    html += `<li class='list-group-item d-flex justify-content-between align-items-center'>
      ${w}
      <span class='badge bg-primary rounded-pill'>${percentage}%</span>
    </li>`;
  });
  html += "</ul>";
  results.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("wrestlerSelect");
  if (select) {
    wrestlers.forEach(name => {
      const option = document.createElement("option");
      option.value = name;
      option.textContent = name;
      select.appendChild(option);
    });
    displayVoteResults();
  }
});

// =================== Team Page Cards ===================
const wrestlerData = [
  {
    name: "Nola Allen",
    weight: "100 lbs",
    grade: "Junior",
    role: "Captain",
    description: "Displayed incredible maturity, guiding the team with confidence.",
    image: "https://via.placeholder.com/300x300"
  },
  {
    name: "Talia Shrayef",
    weight: "100 lbs",
    grade: "Senior",
    description: "Brought quiet confidence and solid technique under pressure.",
    image: "https://via.placeholder.com/300x300"
  },
  {
    name: "Hannah Jang",
    weight: "107 lbs",
    grade: "Junior",
    description: "Brought intensity and heart to every practice.",
    image: "https://via.placeholder.com/300x300"
  },
  {
    name: "Larisa Avestiyan",
    weight: "114 lbs",
    grade: "Senior",
    description: "Used technical skills to outmaneuver stronger opponents.",
    image: "https://via.placeholder.com/300x300"
  },
  {
    name: "Lucianna Plantamura",
    weight: "114 lbs",
    grade: "Sophomore",
    description: "Known for her incredible flexibility and mat skills.",
    image: "https://via.placeholder.com/300x300"
  },
  {
    name: "Rodaina Elshafey",
    weight: "120 lbs",
    grade: "Sophomore",
    description: "Anchored her weight class with composure and precision.",
    image: "https://via.placeholder.com/300x300"
  },
  {
    name: "Ashlee Chen",
    weight: "126 lbs",
    grade: "Sophomore",
    description: "Fearless competitor who never backed down.",
    image: "https://via.placeholder.com/300x300"
  },
  {
    name: "Antonella Gonzalez",
    weight: "132 lbs",
    grade: "Junior",
    description: "Motivated her teammates before and after every match.",
    image: "https://via.placeholder.com/300x300"
  },
  {
    name: "Anye Mendez",
    weight: "138 lbs",
    grade: "Senior",
    role: "Captain",
    description: "Led with passion and experience, motivating the team.",
    image: "https://via.placeholder.com/300x300"
  },
  {
    name: "Francesca Pignata",
    weight: "152 lbs",
    grade: "Freshman",
    description: "Steadily improved and became a strong competitor.",
    image: "https://via.placeholder.com/300x300"
  },
  {
    name: "Kira Fisher",
    weight: "165 lbs",
    grade: "Senior",
    description: "Impressed coaches with her adaptability and readiness.",
    image: "https://via.placeholder.com/300x300"
  },
  {
    name: "Sidney Kocur",
    weight: "185 lbs",
    grade: "Senior",
    role: "Captain",
    description: "Exemplified leadership and fostered team positivity.",
    image: "https://via.placeholder.com/300x300"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const teamContainer = document.getElementById("teamCards");
  if (teamContainer) {
    teamContainer.innerHTML = wrestlerData.map(w => `
      <div class="col-md-4 mb-4">
        <div class="card wrestler-card h-100">
          <img src="${w.image}" class="card-img-top" alt="${w.name}">
          <div class="card-body">
            <h5 class="card-title">${w.name}</h5>
            <p class="card-text">${w.role ? w.role + " | " : ""}${w.weight} | ${w.grade}<br>${w.description}</p>
          </div>
        </div>
      </div>
    `).join('');
  }
});

// =================== Accomplishments Page ===================
const accomplishments = [
  {
    text: "Nola Allen takes 2nd in regions",
    image: "https://via.placeholder.com/400x250?text=Regionals+2nd+Place"
  },
  {
    text: "Nola Allen takes 4th in the state",
    image: "https://via.placeholder.com/400x250?text=State+4th+Place"
  },
  {
    text: "Kira Fisher takes 5th in the region",
    image: "https://via.placeholder.com/400x250?text=Regionals+5th+Place"
  },
  {
    text: "Nola Allen and Sidney Kocur take 1st in the Lady Panther Tournament",
    image: "https://via.placeholder.com/400x250?text=Lady+Panther+1st+Place"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("accomplishmentsList");
  if (list) {
    list.innerHTML = accomplishments.map(a => `
      <li class="list-group-item accomplishment-item">
        ${a.text}
        <img src="${a.image}" class="accomplishment-image" alt="Accomplishment Image">
      </li>
    `).join('');
  }
});
