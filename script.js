const gameData = [
  {
    title: "📝 Classroom Whiteboard Hub",
    type: "tool",
    flagship: true,
    category: ["teacher"],
    keywords: "teacher tool whiteboard live board classroom qr room code laser ink pdf export a4 pages student viewer",
    link: "tools/classroom_whiteboard_hub_final.html",
    image: "images/classroom-whiteboard-thumbnail.png",
    description: "Live shared whiteboard with student viewer, QR room join, laser ink, A4 pages, and PDF export.",
    recent: true,
    popular: true,
    action: "Open Tool"
  },
  {
    title: "❓ WH-Questions",
    type: "game",
    category: ["primary", "secondary", "teacher"],
    keywords: "wh questions who what where when why how classroom quiz teams english speaking primary secondary teacher",
    link: "games/wh_questions_final.html",
    image: "images/wh-questions-thumbnail.png",
    description: "A fun team quiz game for practicing Who, What, Where, When, Why, and How questions.",
    recent: true,
    popular: true
  },
  {
    title: "🎲 Bingo Card Generator",
    type: "tool",
    category: ["teacher"],
    keywords: "teacher tool bingo card generator printable classroom worksheet custom words",
    link: "tools/bingo_generator_final.html",
    image: "images/bingo-generator-thumbnail.png",
    description: "Create printable classroom bingo cards with your own words and settings.",
    recent: true,
    popular: true,
    action: "Open Tool"
  },
  {
    title: "🧩 Crossword Generator",
    type: "tool",
    category: ["teacher"],
    keywords: "teacher tool crossword generator printable worksheet vocabulary clues puzzle",
    link: "tools/crossword_generator_final.html",
    image: "images/crossword-generator-thumbnail.png",
    description: "Make custom crossword puzzles with clues, vocabulary words, and printable worksheets.",
    recent: true,
    popular: true,
    action: "Open Tool"
  },
  {
    title: "🌀 Maze Generator",
    type: "tool",
    category: ["teacher"],
    keywords: "teacher tool maze generator printable worksheet puzzle classroom activity",
    link: "tools/maze_worksheet_final.html",
    image: "images/maze-worksheet-thumbnail.png",
    description: "Create printable maze worksheets for classroom warm-ups, centers, and fun activities.",
    recent: true,
    popular: true,
    action: "Open Tool"
  },
  {
    title: "🔐 Cryptogram Puzzle",
    type: "tool",
    category: ["teacher"],
    keywords: "teacher tool cryptogram puzzle generator printable worksheet code secret message vocabulary",
    link: "tools/cryptogram_puzzle_final.html",
    image: "images/cryptogram-puzzle-thumbnail.png",
    description: "Make secret-code cryptogram puzzles using your own words, sentences, and messages.",
    recent: true,
    popular: true,
    action: "Open Tool"
  },
  {
    title: "➕ Math Squares Puzzle Maker",
    type: "tool",
    category: ["teacher"],
    keywords: "teacher tool math squares puzzle maker printable worksheet numbers addition logic problem solving",
    link: "tools/math_squares_puzzle_final.html",
    image: "images/math-squares-puzzle-thumbnail.png",
    description: "Create printable math square puzzles for number practice, logic, and problem solving.",
    recent: true,
    popular: true,
    action: "Open Tool"
  },
  {
    title: "🎁 Give or Keep",
    type: "game",
    flagship: true,
    category: ["primary", "teacher"],
    keywords: "classroom review teams mystery boxes rewards primary teacher",
    link: "games/give_or_keep_final.html",
    image: "images/give-or-keep-thumbnail.png",
    description: "Answer questions, open mystery boxes, and choose to keep or give rewards.",
    recent: true,
    popular: true
  },
  {
    title: "🏆 Classroom Jeopardy",
    type: "game",
    flagship: true,
    category: ["kindergarten", "primary", "secondary", "teacher"],
    keywords: "jeopardy classroom review quiz teams all levels kindergarten primary secondary built in questions",
    link: "games/classroom_jeopardy_final.html",
    image: "images/classroom-jeopardy-thumbnail.png",
    description: "750 built-in questions for all levels. Think. Discuss. Win!",
    recent: true,
    popular: true
  },
  {
    title: "🐉 Monster Battle Quiz RPG",
    type: "game",
    flagship: true,
    category: ["primary", "secondary", "teacher"],
    keywords: "monster battle quiz rpg forest adventure classroom game hero dragon quiz primary secondary",
    link: "monster-battle-rpg-v1/monster_battle_quiz_rpg_final.html",
    image: "images/monster-battle-quiz-rpg-thumbnail.png",
    description: "Battle monsters, answer questions, level up your hero, and defeat the final dragon boss.",
    recent: true,
    popular: true
  },
  {
    title: "🌊 Monster Battle Quiz RPG – Ocean Adventure",
    type: "game",
    flagship: true,
    category: ["primary", "secondary", "teacher"],
    keywords: "monster battle quiz rpg ocean adventure kraken shark sea serpent diver mermaid mage turtle guardian captain ocean monsters classroom game primary secondary",
    link: "monster-battle-water-adventure-rpg/monster_battle_water_adventure_rpg_v1.html",
    image: "images/monster-battle-ocean-adventure-thumbnail.png",
    description: "Explore the ocean, battle sea monsters, level up your hero, and defeat the mighty Kraken.",
    recent: true,
    popular: true
  },
  {
    title: "🎙️ Conversation Master",
    type: "game",
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
    type: "game",
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
    type: "game",
    flagship: true,
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
    type: "game",
    flagship: true,
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
    type: "game",
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
    type: "game",
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
    type: "tool",
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
    type: "game",
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
    type: "game",
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
    type: "game",
    category: ["kindergarten"],
    keywords: "tap play kindergarten worlds levels stars solo class play vocabulary listening",
    link: "games/tap_and_play_final.html",
    image: "images/tap-and-play-thumbnail.png",
    description: "Tap, learn, and smile! Explore colorful worlds, complete levels, and earn stars.",
    recent: true,
    popular: false
  },
  {
    title: "🎧 Listen and Tap",
    type: "tool",
    category: ["kindergarten", "teacher"],
    keywords: "kindergarten listening teacher tool future",
    link: "#",
    image: "images/hero-banner.png",
    description: "Teacher-focused listening activity builder. Coming soon.",
    recent: false,
    popular: false,
    comingSoon: true
  },
  {
    title: "🏫 Kindergarten Assessment Hub",
    type: "tool",
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

const lessonData = [
  {
    title: "📚 Lesson Plans",
    type: "lesson",
    category: ["teacher"],
    keywords: "lesson plans teaching support classroom lesson materials",
    link: "#",
    image: "images/hero-banner.png",
    description: "Ready-to-use classroom lesson plans will be added soon.",
    comingSoon: true
  },
  {
    title: "🖥️ PowerPoint Lessons",
    type: "lesson",
    category: ["teacher"],
    keywords: "powerpoint ppt lessons teaching presentation classroom slides",
    link: "#",
    image: "images/hero-banner.png",
    description: "Interactive PPT-style lessons for Kindergarten, Primary, and Secondary.",
    comingSoon: true
  },
  {
    title: "🧠 Assessment Materials",
    type: "lesson",
    category: ["teacher"],
    keywords: "assessment pretest posttest classroom materials lessons",
    link: "#",
    image: "images/hero-banner.png",
    description: "Pre-tests, post-tests, and printable classroom assessment resources.",
    comingSoon: true
  }
];

const worksheetData = [
  {
    title: "📝 Free Worksheets Coming Soon",
    type: "worksheet",
    category: ["kindergarten", "primary", "secondary"],
    keywords: "free worksheets pdf printable download coming soon",
    link: "#",
    image: "images/hero-banner.png",
    description: "Ready-to-download PDF worksheets will be added here soon.",
    comingSoon: true
  }
];

const allResources = [...gameData, ...worksheetData, ...lessonData];

const flagshipOrder = [
  "🏆 Classroom Jeopardy",
  "🐉 Monster Battle Quiz RPG",
  "🌊 Monster Battle Quiz RPG – Ocean Adventure",
  "📖 Reading Quest",
  "🛍️ Shopping Superstar!",
  "🎁 Give or Keep",
  "📝 Classroom Whiteboard Hub"
];

let activeSectionPopup = "";
let libraryTypeFilter = "all";
let libraryLevelFilter = "all";

function getMainSearchText() {
  const input = document.getElementById("mainSearchInput");
  return input ? input.value.trim().toLowerCase() : "";
}

function getPopupSearchText() {
  const input = document.getElementById("popupSearchInput");
  return input ? input.value.trim().toLowerCase() : "";
}

function getLibrarySearchText() {
  const input = document.getElementById("librarySearchInput");
  return input ? input.value.trim().toLowerCase() : "";
}

function itemMatchesSearch(item, searchText) {
  if (!searchText) return true;

  const haystack = [
    item.title,
    item.description,
    item.keywords,
    item.type,
    Array.isArray(item.category) ? item.category.join(" ") : item.category
  ].join(" ").toLowerCase();

  return haystack.includes(searchText);
}

function itemMatchesType(item, type) {
  if (type === "all") return true;
  return item.type === type;
}

function itemMatchesLevel(item, level) {
  if (level === "all") return true;

  const categories = Array.isArray(item.category) ? item.category : [item.category];
  return categories.includes(level);
}

function getCategoryTags(item) {
  const tags = [];

  if (item.type === "game") tags.push("Game");
  if (item.type === "tool") tags.push("Teacher Tool");
  if (item.type === "worksheet") tags.push("Worksheet");
  if (item.type === "lesson") tags.push("Lesson");

  const categories = Array.isArray(item.category) ? item.category : [item.category];

  categories.forEach(category => {
    if (category !== "teacher") {
      tags.push(category.charAt(0).toUpperCase() + category.slice(1));
    }
  });

  return [...new Set(tags)].slice(0, 3);
}

function createResourceCard(item) {
  const buttonText = item.comingSoon ? "Coming Soon" : (item.action || "Open");
  const href = item.comingSoon ? "javascript:void(0)" : item.link;
  const click = item.comingSoon ? "" : `onclick="trackResourceOpen('${escapeQuotes(item.title)}')"`;
  const tags = getCategoryTags(item)
    .map(tag => `<span class="card-tag">${tag}</span>`)
    .join("");

  return `
    <article class="game-card">
      <img src="${item.image}" alt="${item.title}" onerror="this.src='images/hero-banner.png'">
      <h3>${item.title}</h3>
      <div class="card-meta">${tags}</div>
      <p>${item.description}</p>
      <a class="card-btn ${item.comingSoon ? "disabled" : ""}" href="${href}" ${click}>${buttonText}</a>
    </article>
  `;
}

function sortFlagshipItems() {
  return flagshipOrder
    .map(title => gameData.find(item => item.title === title))
    .filter(Boolean);
}

function getTeacherTools() {
  return gameData.filter(item => item.type === "tool");
}

function getWorksheets() {
  return worksheetData;
}

function getLessons() {
  return lessonData;
}

function getRecentResources() {
  return allResources.filter(item => item.recent);
}

function renderGrid(elementId, items, limit = null, searchText = getMainSearchText()) {
  const grid = document.getElementById(elementId);
  if (!grid) return;

  let filteredItems = items.filter(item => itemMatchesSearch(item, searchText));

  if (limit) {
    filteredItems = filteredItems.slice(0, limit);
  }

  if (!filteredItems.length) {
    grid.innerHTML = `<div class="empty-message">No resources found. Try another search.</div>`;
    return;
  }

  grid.innerHTML = filteredItems.map(createResourceCard).join("");
}

function renderHomeSections() {
  const searchText = getMainSearchText();

  renderGrid("featuredGamesGrid", sortFlagshipItems(), 6, searchText);
  renderGrid("teacherToolsGrid", getTeacherTools(), 6, searchText);
  renderGrid("worksheetsGrid", getWorksheets(), 6, searchText);
  renderGrid("recentGrid", getRecentResources(), 6, searchText);
}

function handleMainSearch() {
  renderHomeSections();
}

function getSectionItems(section) {
  if (section === "featured") return sortFlagshipItems();
  if (section === "tools") return getTeacherTools();
  if (section === "worksheets") return getWorksheets();
  if (section === "lessons") return getLessons();
  if (section === "recent") return getRecentResources();
  return allResources;
}

function getSectionInfo(section) {
  if (section === "featured") {
    return {
      title: "All Featured Games",
      kicker: "Flagship Showcase",
      placeholder: "🔍 Search featured games..."
    };
  }

  if (section === "tools") {
    return {
      title: "All Teacher Tools",
      kicker: "For Teachers",
      placeholder: "🔍 Search teacher tools..."
    };
  }

  if (section === "worksheets") {
    return {
      title: "All Worksheets & Printables",
      kicker: "Free Downloads",
      placeholder: "🔍 Search worksheets and printables..."
    };
  }

  if (section === "lessons") {
    return {
      title: "All Lessons",
      kicker: "Teaching Support",
      placeholder: "🔍 Search lessons..."
    };
  }

  if (section === "recent") {
    return {
      title: "All Recently Added Resources",
      kicker: "Fresh Uploads",
      placeholder: "🔍 Search recently added resources..."
    };
  }

  return {
    title: "All Resources",
    kicker: "Browse",
    placeholder: "🔍 Search resources..."
  };
}

function openSectionPopup(section) {
  activeSectionPopup = section;

  const popup = document.getElementById("sectionPopup");
  const popupTitle = document.getElementById("popupTitle");
  const popupKicker = document.getElementById("popupKicker");
  const popupSearch = document.getElementById("popupSearchInput");

  if (!popup || !popupTitle || !popupKicker || !popupSearch) return;

  const info = getSectionInfo(section);

  popupTitle.textContent = info.title;
  popupKicker.textContent = info.kicker;
  popupSearch.value = "";
  popupSearch.placeholder = info.placeholder;

  renderSectionPopupContent();

  popup.classList.add("show");
  document.body.classList.add("modal-open");

  setTimeout(() => popupSearch.focus(), 100);
}

function renderSectionPopupContent() {
  const popupGrid = document.getElementById("popupGrid");
  if (!popupGrid) return;

  const items = getSectionItems(activeSectionPopup);
  const searchText = getPopupSearchText();

  const filteredItems = items.filter(item => itemMatchesSearch(item, searchText));

  popupGrid.innerHTML = filteredItems.length
    ? filteredItems.map(createResourceCard).join("")
    : `<div class="empty-message">No resources found. Try another search.</div>`;
}

function closeSectionPopup() {
  const popup = document.getElementById("sectionPopup");
  if (!popup) return;

  popup.classList.remove("show");
  document.body.classList.remove("modal-open");
}

function openLibraryPopup() {
  const popup = document.getElementById("libraryPopup");
  const searchInput = document.getElementById("librarySearchInput");

  if (!popup || !searchInput) return;

  libraryTypeFilter = "all";
  libraryLevelFilter = "all";
  searchInput.value = "";

  updateLibraryFilterButtons();
  renderLibraryPopupContent();

  popup.classList.add("show");
  document.body.classList.add("modal-open");

  setTimeout(() => searchInput.focus(), 100);
}

function closeLibraryPopup() {
  const popup = document.getElementById("libraryPopup");
  if (!popup) return;

  popup.classList.remove("show");
  document.body.classList.remove("modal-open");
}

function setLibraryTypeFilter(type) {
  libraryTypeFilter = type;
  updateLibraryFilterButtons();
  renderLibraryPopupContent();
}

function setLibraryLevelFilter(level) {
  libraryLevelFilter = level;
  updateLibraryFilterButtons();
  renderLibraryPopupContent();
}

function updateLibraryFilterButtons() {
  document.querySelectorAll("[data-library-type]").forEach(button => {
    button.classList.toggle("active", button.dataset.libraryType === libraryTypeFilter);
  });

  document.querySelectorAll("[data-library-level]").forEach(button => {
    button.classList.toggle("active", button.dataset.libraryLevel === libraryLevelFilter);
  });
}

function renderLibraryPopupContent() {
  const libraryGrid = document.getElementById("libraryGrid");
  if (!libraryGrid) return;

  const searchText = getLibrarySearchText();

  const filteredItems = allResources.filter(item => {
    return (
      itemMatchesSearch(item, searchText) &&
      itemMatchesType(item, libraryTypeFilter) &&
      itemMatchesLevel(item, libraryLevelFilter)
    );
  });

  libraryGrid.innerHTML = filteredItems.length
    ? filteredItems.map(createResourceCard).join("")
    : `<div class="empty-message">No resources found. Try another search or filter.</div>`;
}

function getResourceOpens() {
  return JSON.parse(localStorage.getItem("resourceOpens") || "{}");
}

function saveResourceOpens(opens) {
  localStorage.setItem("resourceOpens", JSON.stringify(opens));
}

function trackResourceOpen(title) {
  const opens = getResourceOpens();
  opens[title] = (opens[title] || 0) + 1;
  saveResourceOpens(opens);
}

function escapeQuotes(text) {
  return text.replace(/'/g, "\\'");
}

document.addEventListener("DOMContentLoaded", () => {
  renderHomeSections();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeSectionPopup();
    closeLibraryPopup();
  }
});

document.addEventListener("click", event => {
  if (event.target.classList.contains("modal-overlay")) {
    closeSectionPopup();
    closeLibraryPopup();
  }
});