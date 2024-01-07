const firstBox = document.querySelector('.first-box');
const secondBox = document.querySelector('.second-img');
const about = document.querySelector('.about');
const exp = document.querySelector('.experience');
const clients = document.querySelector('.clients');
const letsWork = document.getElementById('letWork');
const getTouch = document.getElementById('getTouch');


window.addEventListener('load', () => {
       firstBox.classList.add('load-first-box');
       secondBox.classList.add('load-second-box');
       about.classList.add('load-contents');
       exp.classList.add('load-contents');
       clients.classList.add('load-contents');
       letsWork.classList.add('load-let-work');
       getTouch.classList.add('load-get-touch');
});