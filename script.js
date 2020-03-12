const openMenu = document.querySelector('#open');
const closeMenu = document.querySelector('#close');

openMenu.addEventListener('click', openMenuMobile);
closeMenu.addEventListener('click', closeMenuMobile);

function openMenuMobile() {
    let navbarSlider = document.querySelector('.navbar-slider');
    navbarSlider.style.display = 'block';
}
function closeMenuMobile() {
    let navbarSlider = document.querySelector('.navbar-slider');
    navbarSlider.style.display = 'none';
}