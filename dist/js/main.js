const openModal = function(p_pick, c_pick, message, image_src) {
  modal_container.style.display = "flex";
};
const closeModal = function() {
  modal_container.style.display = "none";
};
window.addEventListener("click", function(event) {
  if (event.target == modal_container) {
    modal_container.style.display = "none";
  }
});
