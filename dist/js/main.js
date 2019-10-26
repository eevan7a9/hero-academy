const openModal = function (p_pick, c_pick, message, image_src) {
  modal_container.style.display = "flex";
};
const closeModal = function () {
  modal_container.style.display = "none";
};
window.addEventListener("click", function (event) {
  if (event.target == modal_container) {
    modal_container.style.display = "none";
  }
});
closeModal();
let navbar_toggled = 0;
function toggleNavbar(params) {
  // const nav_container = document.querySelector('.navbar .container');
  const nav_item_container = document.querySelector('.nav-item-container');
  // if (!navbar_toggled) {
  //   nav_container.classList.add('navbar-active');
  //   nav_item_container.classList.add('nav-item-toggled');
  //   navbar_toggled = 1
  // } else {
  //   nav_container.classList.remove('navbar-active');
  //   nav_item_container.classList.remove('nav-item-toggled');
  //   navbar_toggled = 0;
  // }
  nav_item_container.classList.toggle('active');
}