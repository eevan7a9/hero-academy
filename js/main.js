const openModal = function (p_pick, c_pick, message, image_src) {
  modal_container.style.display = "flex";
};
const closeModal = function () {
  modal_container.style.display = "none";
};
window.addEventListener("click", function (event) {
  if (event.target == modal_container) {
    // for Modal
    modal_container.style.display = "none";
  }
});

const scrollInto = function (id) {
  const element = document.querySelector(id);
  setTimeout(() => {
    element.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'center' });
  }, 500)
};

const toggleMenu = function () {
  // for navbar burger menu
  const nav_item_container = document.querySelector(".nav-item-container");
  nav_item_container.classList.toggle("active");

}
$(function () {
  const $gallery = $(".gallery a").simpleLightbox();
});