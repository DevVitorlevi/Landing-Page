// Seleciona todos os elementos com a classe 'elementos' na página.
const Elementos = document.querySelectorAll('.elementos');

// Cria uma nova instância do IntersectionObserver para observar quando os elementos entram na viewport.
const Observador = new IntersectionObserver((entradas) => {
    // 'entradas' é um array com informações sobre os elementos observados.
    entradas.forEach((info) => {
        // Verifica se o elemento está visível na viewport.
        if (info.isIntersecting) {
            // Se o elemento estiver visível, adiciona a classe 'mostrar'.
            info.target.classList.add('mostrar');
            // Para de observar o elemento atual, garantindo que a animação ocorra apenas uma vez.
            Observador.unobserve(info.target);
        }
    });
});

// Observa cada elemento selecionado para detectar quando ele entra na viewport.
Elementos.forEach((todos) => Observador.observe(todos));
    