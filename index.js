const navMenu = document.querySelector("#navMenu")
const openButton = document.querySelector("#openButton")
const closeButton = document.querySelector("#closeButton")

function toggleMenu() {
  navMenu.classList.toggle("nav-menu--open")
}

openButton.onclick = toggleMenu
closeButton.onclick = toggleMenu

const navMenuItemWrapper1 = document.querySelector(".nav-menu_item_wrapper1")
const navMenuItemWrapper2 = document.querySelector(".nav-menu_item_wrapper2")
const navMenuItemWrapper3 = document.querySelector(".nav-menu_item_wrapper3")
const navMenuItemWrapper4 = document.querySelector(".nav-menu_item_wrapper4")

const menuElem1 = document.querySelector(".item1")
const menuElem2 = document.querySelector(".item2")
const menuElem3 = document.querySelector(".item3")
const menuElem4 = document.querySelector(".item4")

function toggleElem1() {
  navMenuItemWrapper1.classList.toggle("active")
}

function toggleElem2() {
  navMenuItemWrapper2.classList.toggle("active")
}

function toggleElem3() {
  navMenuItemWrapper3.classList.toggle("active")
}

function toggleElem4() {
  navMenuItemWrapper4.classList.toggle("active")
}

menuElem1.addEventListener("click", toggleElem1)
menuElem2.addEventListener("click", toggleElem2)
menuElem3.addEventListener("click", toggleElem3)
menuElem4.addEventListener("click", toggleElem4)

// Описать стили для бокового меню реализовать закрытие окна залить на гитхаб и отправить ссылку в чате
// Добавить подпункты меню таким образом чтобы при клике на любой пункт меню снизу появились еще два-три подраздела
