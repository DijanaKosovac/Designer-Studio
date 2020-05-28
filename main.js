var nav = document.querySelector('.navbar');

window.addEventListener('scroll', function (event) {
    event.preventDefault();

    if (window.scrollY <= 310) {
        nav.style.backgroundColor = 'transparent';
    } else {
        nav.style.backgroundColor = '#ba5370';
    }
});