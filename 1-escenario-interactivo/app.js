const monedas = document.querySelectorAll(".coins")
const score = document.querySelector(".puntaje")
let marcador = 0

console.log(monedas) /*no debe dar null*/
console.log(score)

monedas .forEach(item => {
item.addEventListener("click", () => {
    item.classList.add("saltomoneda")
marcador++ 
score.textContent = `X ${marcador}`
})






item.addEventListener("animationend", () => {
    item.style,display.add = "none"
}, {once: true})



})

/*////////////////////////////////////////////////////////////////////////////////////////////////*/

const shyguys = document.querySelectorAll(".sg")
const score2 = document.querySelector(".puntaje2")
let marcador2 = 0


shyguys .forEach(item => {
item.addEventListener("click", () => {
    item.classList.add("saltoshyg")
marcador2++ 
score2.textContent = `X ${marcador2}`
})

item.addEventListener("animationend", () => {
    item.style,display.add = "none"
}, {once: true})



})

/*////////////////////////////////////////////////////////////////////////////////////////////////*/

const goombas = document.querySelectorAll(".gb")
const score3 = document.querySelector(".puntaje3")
let marcador3 = 0


goombas .forEach(item => {
item.addEventListener("click", () => {
    item.classList.add("caidagoomba")
marcador3++ 
score3.textContent = `X ${marcador3}`
})

item.addEventListener("animationend", () => {
    item.style,display.add = "none"
}, {once: true})



})