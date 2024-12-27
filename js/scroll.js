const Elementos = document.querySelectorAll('.elementos')

const Observador = new IntersectionObserver((entrada) => {
    entrada.forEach(info => {
        if (info.isIntersecting) {
            info.target.classList.add("mostrar")
        } else {
            info.target.classList.remove("mostrar")
        }
    })
})

Elementos.forEach((todos) => Observador.observe(todos))