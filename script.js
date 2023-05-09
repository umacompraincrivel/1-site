const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const products = document.querySelectorAll('.product');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();

    products.forEach(product => {
        const title = product.querySelector('h2').textContent.toLowerCase();
        const description = product.querySelector('p').textContent.toLowerCase();

        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});
searchInput.addEventListener('keydown', (event) => {
if (event.key === 'Enter') {
const searchTerm = searchInput.value.toLowerCase();

products.forEach(product => {
    const title = product.querySelector('h2').textContent.toLowerCase();
    const description = product.querySelector('p').textContent.toLowerCase();

    if (title.includes(searchTerm) || description.includes(searchTerm)) {
        product.style.display = 'block';
    } else {
        product.style.display = 'none';
    }
});
}
});

// Quando o usuário rolar a página para baixo 20px do topo do documento, mostre o botão
window.onscroll = function() {scrollFunction()};
        
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// Quando o usuário clicar no botão, role para o topo do documento
function topFunction() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}

const messages = [
    "Digite o nome do produto",
    "Ou o número do vídeo",
    "Encontre o melhor preço",
   
  ];
  function changePlaceholder() {
    const input = document.getElementById("search-input");
    let i = 0;
    setInterval(() => {
      input.placeholder = messages[i];
      i = (i + 1) % messages.length;
    }, 6000);
  }
 