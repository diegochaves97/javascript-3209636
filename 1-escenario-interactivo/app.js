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