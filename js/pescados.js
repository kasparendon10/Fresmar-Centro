document.addEventListener("DOMContentLoaded", () => {
    const productCards = document.querySelectorAll(".product-card");
    const modal = document.getElementById("product-modal");
    const modalImage = document.getElementById("modal-image");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const whatsappButton = document.getElementById("whatsapp-button");
    const modalClose = document.getElementById("modal-close");
  
    productCards.forEach(card => {
      card.addEventListener("click", () => {
        const title = card.dataset.title;
        const description = card.dataset.description;
        const image = card.dataset.image;
  
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modalImage.src = image;
        whatsappButton.href = `https://wa.me/573103008952?text=Hola,%20quiero%20comprar%20${encodeURIComponent(title)}`;
  
        modal.classList.remove("hidden");
      });
    });
  
    modalClose.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.add("hidden");
      }
    });
  });
  