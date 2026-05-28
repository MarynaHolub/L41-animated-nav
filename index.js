const navMenu = document.querySelector("#navMenu")
const openButton = document.querySelector("#openButton")
const closeButton = document.querySelector("#closeButton")

function toggleMenu() {
  navMenu.classList.toggle("nav-menu--open")
}
openButton.onclick = toggleMenu
closeButton.onclick = toggleMenu

// Описать стили для бокового меню реализовать закрытие окна залить на гитхаб и отправить ссылку в чате
