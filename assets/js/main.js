
/* javascript */


const searchButton = document.getElementById('btn btn-primary');
const searchInput = document.getElementById('form1');
searchButton.addEventListener('click', () => {
  const inputValue = searchInput.value;
  document.location.href="assets/browse-page.html";

});
