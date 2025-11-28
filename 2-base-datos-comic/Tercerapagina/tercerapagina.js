import { comic } from "../bd.js"

//const parametros = new URLSearchParams("id");// 
const param = new URLSearchParams(window.location.search);
const id = parseInt(param.get("id"))

const personaje = comic.personajes.find (p => p.id === id)

const contenedor = document.querySelector(".container")
contenedor.innerHTML=`
    
    <div class="card">
        <img src="${personaje.imagen}" alt="Foto personaje">
        <div class="info">
            <h2>${personaje.nombre}</h2>
            <p>${personaje.descripcion}</p>
          
        </div>
    </div>
    </a>

`