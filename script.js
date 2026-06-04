function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}

function searchGames() {
  const searchInput = document.getElementById("gameSearch").value.toLowerCase();
  const gameCards = document.querySelectorAll(".game-card");

  gameCards.forEach(function(card) {
    const gameText = card.innerText.toLowerCase();

    if (gameText.includes(searchInput)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function filterGames(category) {
  const gameCards = document.querySelectorAll(".game-card");
  const buttons = document.querySelectorAll(".category-buttons button");
  const searchBox = document.getElementById("gameSearch");

  searchBox.value = "";

  buttons.forEach(function(btn) {
    btn.classList.remove("active");
  });

  event.target.classList.add("active");

  gameCards.forEach(function(card) {
    const cardCategory = card.getAttribute("data-category");

    if (category === "all" || cardCategory.includes(category)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}const gameData = [
  {
    title: "Shopping Superstar!",
    link: "games/shopping_superstar_final.html",
    action: "Play"
  },
  {
    title: "Clothes & Weather",
    link: "games/clothes_weather_final.html",
    action: "Play"
  },
  {
    title: "Froggy Jumps",
    link: "games/froggy_jumps_final.html",
    action: "Play"
  },
  {
    title: "Word Search Generator",
    link: "games/word_search_final.html",
    action: "Open"
  },
  {
    title: "Phrasal Verbs Memory",
    link: "games/phrasal_memory_final.html",
    action: "Play"
  },
  {
    title: "🚀 Spelling & Sentence Space Adventure",
    link: "games/spelling_sentence_builder_final.html",
    action: "Play"
  }
];

function getGamePlays() {
  return JSON.parse(localStorage.getItem("gamePlays") || "{}");
}

function saveGamePlays(plays) {
  localStorage.setItem("gamePlays", JSON.stringify(plays));
}

function trackGamePlay(title) {
  const plays = getGamePlays();
  plays[title] = (plays[title] || 0) + 1;
  saveGamePlays(plays);
}

function renderTopGames() {
  const topGamesList = document.getElementById("topGamesList");
  if (!topGamesList) return;

  const plays = getGamePlays();

  const rankedGames = gameData
    .map(game => ({
      ...game,
      plays: plays[game.title] || 0
    }))
    .sort((a, b) => b.plays - a.plays)
    .slice(0, 3);

  topGamesList.innerHTML = rankedGames.map((game, index) => `
    <div class="top-game-card">
      <span>#${index + 1}</span>
      <strong>${game.title}</strong>
      <a href="${game.link}" onclick="trackGamePlay('${game.title}')">
        ${game.action}
      </a>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderTopGames);