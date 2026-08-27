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


function levant1 (){
    let div1 = document.querySelector('#cl1')
    div1.style.transform = 'translateY(-10px)'   
}
function levant2 (){
    let div2 = document.querySelector('#cl2')
    div2.style.transform = 'translateY(-10px)'
}
function levant3 (){
    let div3 = document.querySelector('#cl3')
    div3.style.transform = 'translateY(-10px)'
}
function levant4(){
    let div4 = document.querySelector('#cl4')
    div4.style.transform = 'translateY(-10px)'
}
function desc(){
    let elemento1 = document.querySelector('#cl1')
    elemento1.style.transform = 'translateY(0px)' 
}
function desc2(){
    let elemento2 = document.querySelector('#cl2')
    elemento2.style.transform = 'translateY(0px)' 
}
function desc3(){
    let elemento3 = document.querySelector('#cl3')
    elemento3.style.transform = 'translateY(0px)' 
}
function desc4(){
    let elemento4 = document.querySelector('#cl4')
    elemento4.style.transform = 'translateY(0px)' 
}
function divlevant(){
    let elediv1 = document.querySelector('dicamp')
    elediv1.style.transform = 'translateY(-10px)'
}
function divlevant2(){
    let elediv2 = document.querySelector('dicamp2')
    elediv2.style.transform = 'translateY(-10px)'
}
function divlevant3(){
    let elediv3 = document.querySelector('dicamp3')
    elediv3.style.transform = 'translateY(-10px)'
}
function divlevant4(){
    let elediv4 = document.querySelector('dicamp4')
    elediv4.style.transform = 'translateY(-10px)'
}
function divdesc(){
    let elemdiv = querySelector('dicamp')
    elemdiv.style.transform = 'translateY(0px)'
}
function divdesc2(){
    let elemdiv2 = querySelector('dicamp2')
    elemdiv2.style.transform = 'translateY(0px)'
}
function divdesc3(){
    let elemdiv3 = querySelector('dicamp3')
    elemdiv3.style.transform = 'translateY(0px)'
}
function divdesc4(){
    let elemdiv4 = querySelector('dicamp4')
    elemdiv4.style.transform = 'translateY(0px)'
}