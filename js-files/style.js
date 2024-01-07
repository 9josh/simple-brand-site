const hero = document.getElementById('hero-h1');
const heroList = document.querySelector('.hero-lists');
const contents = document.querySelector('.contents');
const letsWork = document.getElementById('lets-work');
const getTouch = document.getElementById('get-touch');
const shop = document.querySelector('.shop');


window.addEventListener('load', () => {
    hero.classList.add('loaded');
    heroList.classList.add('hero-list-load');
    contents.classList.add('load-content');
    letsWork.classList.add('load-lets-work');
    getTouch.classList.add('load-get-touch');
    shop.classList.add('load-shop');
})
    

