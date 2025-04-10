// Função para mostrar/ocultar o botão "Back to Top"
function toggleBackToTopButton() {
  const backToTopButton = document.querySelector('.back-to-top-container');
  const scrollPosition = window.scrollY || window.pageYOffset;
  const documentHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;

  // Verifica se o usuário rolou até o final da página
  if (scrollPosition + windowHeight >= documentHeight - 10) { // 10px de margem
      backToTopButton.classList.add('show');
  } else {
      backToTopButton.classList.remove('show');
  }
}

// Função que adiciona o foco ao conteúdo principal ao clicar no "Back to Top"
document.querySelector('.back-to-top-link').addEventListener('click', function (e) {
  e.preventDefault(); // Impede a navegação padrão do link
  
  // Foca no conteúdo principal
  document.querySelector('#conteudo-principal').focus();
});

// Exibe ou oculta o botão "Back to Top" com base na rolagem
window.addEventListener('scroll', () => {
  const backToTopContainer = document.getElementById('backToTopContainer');
  const backToTopLink = document.getElementById('backToTopLink');

  if (window.scrollY > 300) {
    backToTopContainer.classList.add('show');
    backToTopLink.setAttribute('tabindex', '0'); // Torna o link "Back to Top" acessível por teclado
  } else {
    backToTopContainer.classList.remove('show');
    backToTopLink.setAttribute('tabindex', '-1'); // Remove o foco do link
  }
});

// Adiciona o evento de scroll para verificar a posição do scroll
window.addEventListener('scroll', toggleBackToTopButton);

