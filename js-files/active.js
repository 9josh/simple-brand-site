const activePage = window.location.pathname;
const links = document.querySelectorAll('.nav-link');

links.forEach((link) => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('active');
    }
});