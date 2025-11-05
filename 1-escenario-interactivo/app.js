const monedas = document.querySelectorAll(".coins")
const score = document.querySelector(".puntaje")
const sonidoMoneda = new Audio("./sonidos/mario-coin-sound-effect.mp3");
let marcador = 0


console.log(monedas) /*no debe dar null*/
console.log(score)

monedas .forEach(item => {
item.addEventListener("click", () => {
    item.classList.add("saltomoneda")
marcador++ 
score.textContent = `X ${marcador}`

    sonidoMoneda.play();
    })


item.addEventListener("animationend", () => {
    item.style.display.add = "none"
}, {once: true})



})

/*////////////////////////////////////////////////////////////////////////////////////////////////*/

const shyguys = document.querySelectorAll(".sg")
const score2 = document.querySelector(".puntaje2")
const sonidoshyg = new Audio("./sonidos/smw_stomp.wav");
let marcador2 = 0


shyguys .forEach(item => {
item.addEventListener("click", () => {
    item.classList.add("saltoshyg")
marcador2++ 
score2.textContent = `X ${marcador2}`

    sonidoshyg.play();
    })


item.addEventListener("animationend", () => {
    item.style,display.add = "none"
}, {once: true})



})

/*////////////////////////////////////////////////////////////////////////////////////////////////*/

const goombas = document.querySelectorAll(".gb");
const score3 = document.querySelector(".puntaje3");
let marcador3 = 0;
const sonidoGoomba = new Audio("./sonidos/smw_pipe.wav");
const pipesAmarillas = document.querySelectorAll(".pipey1, .pipey2, .pipey3");

pipesAmarillas.forEach((pipe, index) => {
  pipe.addEventListener("click", () => {
    const goomba = goombas[index]; 

    if (!goomba) return; 
 
    if (!goomba.classList.contains("caidagoomba")) {
      goomba.classList.add("caidagoomba");
      marcador3++;
      score3.textContent = `X ${marcador3}`;

     
      sonidoGoomba.currentTime = 0;
      sonidoGoomba.play();
      goomba.addEventListener(
        "animationend",
        () => {
          goomba.style.display = "none";
        },
        { once: true }
      );
    }
  });
});

/*/////////////////////////////////////////CARRUSEL////////////////////////////////////////////*/


/*variables*/
const escenas = document.querySelectorAll(".escena")
const btnanterior =document.querySelector(".btn-anterior")
const btnsiguiente = document.querySelector(".btn-siguiente")
const miniaturas = document.querySelectorAll(".miniatura")
let indice = 0

console.log(escenas)
console.log(btnanterior)
console.log(btnsiguiente)
console.log(miniaturas)

/*Funciones*/
function mostrarescena (i) {
  for (let j = 0; j < escenas.length; j++) {
     escenas[j].classList.remove("activa")
  }
escenas[i].classList.add("activa")

indice = i 

}
mostrarescena (2)

/*Eventos*/

//funcion anterior//

btnanterior.addEventListener ("click", () => { 
    indice = indice - 1
    if(indice < 0) {
indice = escenas.length - 1 //para ir a ultima imagen//

    }
    mostrarescena (indice)
}

)

//funcion siguiente//

btnsiguiente.addEventListener ("click", () => { 
    indice = indice + 1
    if(indice > escenas.length - 1) {
indice = 0 //para ir a ultima imagen//
    }
    mostrarescena (indice)
}

)

//////Miniatura/////////

miniaturas.forEach( (min, i) => {min.addEventListener("click", () => {
    mostrarescena(i)


})

});