const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const product = document.querySelector('.product');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const productName = product.querySelector('h2').textContent.toLowerCase();

  if (productName.includes(searchTerm)) {
    alert('Produto encontrado!');
  } else {
    alert('Produto não encontrado.');
  }
});