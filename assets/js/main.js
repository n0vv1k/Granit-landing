document.addEventListener("DOMContentLoaded", function () {
  // === старый аккордеон (для toggle-btn) ===
  const toggleButtons = document.querySelectorAll(".toggle-btn");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const hiddenBlock =
        this.closest(".c-block").querySelector(".hidden-c-block");

      hiddenBlock.classList.toggle("active");
      this.classList.toggle("rotate");
    });
  });

  // === АККОРДЕОН ===
  const accordions = document.querySelectorAll(".projects-accordeon");

  accordions.forEach((accordion) => {
    const title = accordion.querySelector(".projects-accordeon-title");
    const content = accordion.querySelector(".projects-accordeon-hidden");
    const arrow = title.querySelector("img");

    title.addEventListener("click", () => {
      const isOpen = content.style.display === "block";

      // Закрыть все аккордеоны
      document.querySelectorAll(".projects-accordeon-hidden").forEach((el) => {
        el.style.display = "none";
      });
      document
        .querySelectorAll(".projects-accordeon-title img")
        .forEach((img) => {
          img.classList.remove("open");
        });

      // Если текущий был закрыт — открыть его
      if (!isOpen) {
        content.style.display = "block";
        arrow.classList.add("open");
      }
    });
  });

  // === СЛАЙДЕР ===
  const slides = document.querySelectorAll(".slides");
  let currentSlide = 0;
  let autoSlideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Стрелки
  document.querySelectorAll(".arrows img")[0].addEventListener("click", () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
  });
  document.querySelectorAll(".arrows img")[1].addEventListener("click", () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
  });

  // Инициализация
  showSlide(currentSlide);
  startAutoSlide();

  const burgerMenu = document.getElementById("burger-menu");
  const headerMenu = document.querySelector(".header-menu");

  burgerMenu.addEventListener("click", function () {
    headerMenu.classList.toggle("active");
  });
});
