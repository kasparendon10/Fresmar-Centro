// Toggle Mobile Menu
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Scroll to Products by Category Click
const categoryButtons = document.querySelectorAll("#categorias span");
const productsSection = document.getElementById("productos-carousel");

categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    productsSection.scrollIntoView({ behavior: "smooth" });
  });
});

const heroImages = ['img/hero1.jpg', 'img/hero2.jpg', 'img/hero3.jpg'];
  let current = 0;
  const heroImage = document.getElementById('heroImage');

  setInterval(() => {
    heroImage.classList.remove('opacity-100');
    heroImage.classList.add('opacity-0');

    setTimeout(() => {
      current = (current + 1) % heroImages.length;
      heroImage.src = heroImages[current];
      heroImage.classList.remove('opacity-0');
      heroImage.classList.add('opacity-100');
    }, 500);
  }, 3000);