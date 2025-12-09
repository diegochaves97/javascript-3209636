import { comic } from "../bd.js"

//const parametros = new URLSearchParams("id");// 
const param = new URLSearchParams(window.location.search);
const id = parseInt(param.get("id"))

const escenas = comic.escenas.find (p => p.id === id)

const contenedor1 = document.querySelector(".video")
contenedor1.innerHTML=`
    
<h1 class="titulodecapitulo">${escenas.nombre}</h1>
    
<div class="contenedor"> 
 <video class="videofish" width="600" height="auto" controls> <source src="${escenas.video}" type="video/mp4"> </video> 

</div>

<div class="sinopsis">
 <h1>${escenas.nombre}</h1>
 <p class="textoparrafo"> ${escenas.descripcion}<p>
</div>

<div class="listapersonajes"> 
<h3>Personajes:</h3>
<ul>
    <li>${escenas.personaje1}</li>
    <li>${escenas.personaje2}</li>
    <li>${escenas.personaje3}</li>
    <li>${escenas.personaje4}</li>
</ul>
</div>
  `
