document.addEventListener("DOMContentLoaded", function() {
    const loadingTexts = document.querySelectorAll(".loading-text");
    let index = 0;

    function showText() {
      if (index < loadingTexts.length) {
        loadingTexts[index].classList.add("active");
        setTimeout(() => {
          loadingTexts[index].classList.remove("active");
          index++;
          showText();
        }, 1000); // 2 segundos
      } else {
        const loadingContainer = document.querySelector(".loading-container");
        const homepage = document.querySelector(".homepage");
        loadingContainer.style.display = "none";
        homepage.style.display = "block";
      }
    }

    showText();
  });