
/* javascript */


const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('form1');
searchButton.addEventListener('click', () => {
  const inputValue = searchInput.value;
  document.location.href="assets/browse-page.html";
  console.log("clicked"+"; my search was "+ inputValue);

});
