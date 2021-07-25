const menu = document.querySelector('.navbar__links');
const openMenu = document.querySelector('.navbar__open-menu');
const closeMenu = document.querySelector('.navbar__close-menu');

const toggleMenu = () =>{
    menu.classList.toggle("menu-opened");
}

openMenu.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);

const navbarLinks = document.querySelectorAll('.navbar__links a[href^="#"]');

navbarLinks.forEach(links => {
    links.addEventListener('click', function() {
        menu.classList.remove("menu-opened");
    })
})