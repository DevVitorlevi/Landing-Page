const MobileBtn = document.getElementById('mobile-btn');
const MobileMenu = document.getElementById('mobile-menu');
const Burguer = document.querySelector('.fa-bars');
const Overlay = document.querySelector('.overlay');

MobileBtn.addEventListener('click', () => {
    // Alterna a classe 'active' no menu e no overlay
    MobileMenu.classList.toggle('active');
    Burguer.classList.toggle('fa-x');

    if (MobileMenu.classList.contains('active')) {
        Overlay.classList.add('active');
    } else {
        Overlay.classList.remove('active');
    }
});

