const gameData = [
  {
    title: "🎁 Give or Keep",
    category: ["primary", "teacher"],
    keywords: "classroom review teams mystery boxes rewards primary teacher",
    link: "games/give_or_keep_final.html",
    image: "images/give-or-keep-thumbnail.png",
    description: "Answer questions, open mystery boxes, and choose to keep or give rewards.",
    recent: true,
    popular: true
  },
  {
    title: "🎙️ Conversation Master",
    category: ["secondary", "teacher"],
    keywords: "conversation speaking secondary voice quiz dashboard",
    link: "conversation-master/conversation_master_final.html",
    image: "conversation-master/images/conversation-master-thumbnail.png",
    description: "Secondary 1–6 real-life conversations with voices, quizzes, and progress tools.",
    recent: true,
    popular: true
  },
  {
    title: "🎤 Conversation Quest",
    category: ["primary", "secondary", "teacher"],
    keywords: "conversation speaking voice quiz primary secondary",
    link: "conversation-quest/conversation_quest_final.html",
    image: "conversation-quest/images/conversation-quest-thumbnail.png",
    description: "Practice real-life English conversations with voice playback and quizzes.",
    recent: true,
    popular: true
  },
  {
    title: "📖 Reading Quest",
    category: ["primary", "teacher"],
    keywords: "reading listening comprehension stories primary teacher dashboard",
    link: "games/reading_quest_final.html?v=5",
    image: "images/reading-quest-thumbnail.png",
    description: "Read stories, listen aloud, answer questions, and track student progress.",
    recent: true,
    popular: true
  },
  {
    title: "🛍️ Shopping Superstar!",
    category: ["primary", "teacher"],
    keywords: "shopping spelling conversation clothes food money primary",
    link: "games/shopping_superstar_final.html",
    image: "images/shopping-superstar-thumbnail.png",
    description: "Spell words, earn money, shop, and practice real conversations.",
    recent: true,
    popular: true
  },
  {
    title: "🐸 Froggy Jumps",
    category: ["primary"],
    keywords: "frog quiz lily pads primary",
    link: "games/froggy_jumps_final.html",
    image: "images/froggy-thumbnail.png",
    description: "Jump across lily pads and answer questions to reach the finish line.",
    recent: false,
    popular: true
  },
  {
    title: "🧠 Phrasal Verbs Memory",
    category: ["secondary"],
    keywords: "memory phrasal verbs secondary matching",
    link: "games/phrasal_memory_final.html",
    image: "images/phrasal-thumbnail.png",
    description: "Match phrasal verbs with their meanings before time runs out.",
    recent: false,
    popular: true
  },
  {
    title: "🔍 Word Search Generator",
    category: ["teacher"],
    keywords: "teacher tool word search worksheet generator printable",
    link: "games/word_search_final.html",
    image: "images/wordsearch-thumbnail.png",
    description: "Create custom word search puzzles and printable activities for your class.",
    recent: false,
    popular: true,
    action: "Open Tool"
  },
  {
    title: "🚀 Spelling & Sentence Space Adventure",
    category: ["primary"],
    keywords: "spelling sentence space adventure primary",
    link: "games/spelling_sentence_builder_final.html",
    image: "images/spelling-thumbnail.png",
    description: "Connect stars to spell words and build sentences.",
    recent: false,
    popular: false
  },
  {
    title: "👕 Clothes & Weather",
    category: ["kindergarten", "primary"],
    keywords: "clothes weather kindergarten primary vocabulary",
    link: "games/clothes_weather_final.html",
    image: "images/clothes-weather-thumbnail.png",
    description: "Choose the correct clothes for different weather, places, and routines.",
    recent: false,
    popular: false
  },
  {
  title: "🌈 Tap and Play",
  description: "Tap, learn, and smile! Explore colorful worlds, complete levels, earn stars, and track student progress through Solo Play and Class Play.",
  image: "images/tap-and-play-thumbnail.png",
  link: "games/tap_and_play_final.html",
  category: "kindergarten",
  status: "play"
},
  {
    title: "🎧 Listen and Tap",
    category: ["kindergarten", "teacher"],
    keywords: "kindergarten listening teacher tool future",
    link: "#",
    image: "images/hero-banner.png",
    description: "Teacher-focused listening activity builder. Coming soon.",
    comingSoon: true
  },
  {
  title: "🏫 Kindergarten Assessment Hub",
  category: ["kindergarten", "teacher"],
  keywords: "kindergarten assessment teacher tool pretest posttest question bank reports k1 k2 k3",
  link: "tools/kindergarten_assessment_hub_final.html",
  image: "images/kindergarten-assessment-hub-thumbnail.png",
  description: "Create, organize, and deliver K1–K3 assessments with question banks and reports.",
  recent: true,
  popular: false,
  action: "Open Tool"
}
];

let currentCategory = "all";

function openPopup(id) {
  document.getElementById(id).classList.add("show");
  if (id === "playPopup") renderGames();
  if (id === "recentPopup") renderSimpleList("recentList", gameData.filter(game => game.recent));
  if (id === "popularPopup") renderSimpleList("popularList", gameData.filter(game => game.popular));
}

function closePopup(id) {
  document.getElementById(id).classList.remove("show");
}

function setCategory(category) {
  currentCategory = category;
  document.querySelectorAll(".category-tab").forEach(button => {
    button.classList.toggle("active", button.dataset.category === category);
  });
  renderGames();
}

function getSearchText() {
  const input = document.getElementById("gameSearchInput");
  return input ? input.value.trim().toLowerCase() : "";
}

function gameMatchesSearch(game, searchText) {
  if (!searchText) return true;
  const haystack = [
    game.title,
    game.description,
    game.keywords,
    game.category.join(" ")
  ].join(" ").toLowerCase();
  return haystack.includes(searchText);
}

function gameMatchesCategory(game) {
  return currentCategory === "all" || game.category.includes(currentCategory);
}

function renderGames() {
  const grid = document.getElementById("gameGrid");
  if (!grid) return;

  const searchText = getSearchText();
  const games = gameData.filter(game => gameMatchesCategory(game) && gameMatchesSearch(game, searchText));

  if (!games.length) {
    grid.innerHTML = `<div class="empty-message">No games found. Try another search or category.</div>`;
    return;
  }

  grid.innerHTML = games.map(game => {
    const buttonText = game.comingSoon ? "Coming Soon" : (game.action || "Play Now");
    const href = game.comingSoon ? "javascript:void(0)" : game.link;
    const click = game.comingSoon ? "" : `onclick="trackGamePlay('${escapeQuotes(game.title)}')"`;

    return `
      <article class="game-card">
        <img src="${game.image}" alt="${game.title}">
        <h3>${game.title}</h3>
        <p>${game.description}</p>
        <a class="card-btn ${game.comingSoon ? "disabled" : ""}" href="${href}" ${click}>${buttonText}</a>
      </article>
    `;
  }).join("");
}

function renderSimpleList(elementId, games) {
  const list = document.getElementById(elementId);
  if (!list) return;

  list.innerHTML = games.map(game => {
    const buttonText = game.action || "Play Now";
    return `
      <div class="simple-item">
        <span>${game.title}</span>
        <a href="${game.link}" onclick="trackGamePlay('${escapeQuotes(game.title)}')">${buttonText}</a>
      </div>
    `;
  }).join("");
}

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

function escapeQuotes(text) {
  return text.replace(/'/g, "\\'");
}

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    document.querySelectorAll(".popup-overlay.show").forEach(popup => popup.classList.remove("show"));
  }
});

document.addEventListener("click", event => {
  if (event.target.classList.contains("popup-overlay")) {
    event.target.classList.remove("show");
  }
});
