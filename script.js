const gameData = [
  {
    title: "📖 Reading Quest",
    link: "games/reading_quest_final.html",
    action: "Play"
  },
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