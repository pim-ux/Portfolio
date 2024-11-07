document.querySelector('.skip-link').addEventListener('click', function(e) {
  document.querySelector('#conteudo-principal').setAttribute('tabindex', '-1');
  document.querySelector('#conteudo-principal').focus();
});

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

// Adiciona o evento de scroll para verificar a posição do scroll
window.addEventListener('scroll', toggleBackToTopButton);
