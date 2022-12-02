
/* javascript */


const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
searchButton.addEventListener('click', () => {
  const inputValue = searchInput.value;
  document.location.href="assets/browse-page.html";

});
