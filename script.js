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
}