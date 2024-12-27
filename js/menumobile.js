const MobileBtn = document.getElementById('mobile-btn') 
const MobileMenu = document.getElementById('mobile-menu') 
const Burguer = document.querySelector('.fa-bars') 
const Overlay = document.querySelector('.overlay')


MobileBtn.addEventListener('click', () => { 
    // Adiciona um evento de clique ao botão `MobileBtn`.

    MobileMenu.classList.toggle('active') 
    // Alterna a classe 'active' no menu. 
    // Isso é usado para abrir ou fechar o menu (normalmente associado a um estilo CSS).

    Burguer.classList.toggle('fa-x') 
    // Alterna entre o ícone de "barras" (`fa-bars`) e o ícone de "X" (`fa-x`).
    // Isso muda a aparência do ícone ao abrir/fechar o menu.

    if(MobileMenu.classList.contains('active')){
        Overlay.style.display='block'
    }else{
        Overlay.style.display='none'
    }
    
})
