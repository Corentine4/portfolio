// ----- BURGER MENU -----

const burgerMenu = document.querySelectorAll('button img');
const navigation = document.querySelectorAll('ul');

burgerMenu[0].addEventListener('click', () => {
    navigation[0].classList.toggle('showNav');
});