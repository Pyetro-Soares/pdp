const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting === true) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')
elements.forEach((element) => myObserver.observe(element))





const myObservador = new IntersectionObserver((entrie) => {
    entrie.forEach((enry) => {
        if (enry.isIntersecting === true) {
            enry.target.classList.add('mostr')
        } else {
            enry.target.classList.remove('mostr')
        }
    })
})


const elementos = document.querySelectorAll('.escond')
elementos.forEach((elementos) => myObservador.observe(elementos))