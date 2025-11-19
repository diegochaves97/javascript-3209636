const sinopsis1 = document.querySelector(".containersinopsis")
const informacion = document.querySelector(".info-comic")
const castdepersonajes = document.querySelector(".castdepersonajes")
const listaescenas = document.querySelector(".lista-escenas")


sinopsis1.innerHTML = ` 
 <h2 class="sinopsis"> Sinopsis </h2>
 <p class="sinopsistex              <li> Mineros </li>
                    <li> Ninove </li>
                </li>
            </div>

to"> ${comic.sinopsis} </p>           
`

informacion.innerHTML = `
 <aside class="info-comic">
            <div class="portada"> <img src="${comic.portada}"> </div>
            <section class="seccion2">
                <div class="informacion">
                    <ul class="informacion1">
                         <li> Genero: ${comic.genero} </li>
                        <li> Fecha: ${comic.year} </li>
                        <li> Estado: ${comic.status}</li>
                        <li> Producido: ${comic.producido}</li>
                        <li> Creadores: ${comic.autores}</li>
                        <li> Pagina Oficial: <a href="www.Narramentum.com"> Narramentum Website </a> </li>
                    </ul>

                </div>
            </section>
        </aside>

`

castdepersonajes.innerhtml = ` 
 <div class="castdepersonajes">
                <h1 class="Personajes"> Personajes - Cast </h1>
                <ul class="Personajeslista">
                    <li> Elloy </li>
                    <li> James Watt </li>
       
`

comic.escenas.foreach(escena => {
    const micard = document.createElement("tr")
    // micard.classList.add("tarjeta-cap") //
    micard.innerHTML = `
  <td>1</td>
  <td>${comic.escena}</td>

`
})

/* 
listaescenas.innerHTML = ` 
<thead>
        <tr>
            <th>#</th>
            <th>Escenas</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Escena 1</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Escena 2</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Escena 3</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Escena 4</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Escena 5</td>
      
        </tr>
        <tr>
            <td>6</td>
            <td>Escena 6</td>
        </tr>
        <tr>
            <td>7</td>
            <td>Escena 7</td>
        </tr>
        <tr>
            <td>8</td>
            <td>Escena 8</td>
        </tr>
        <tr>
            <td>9</td>
            <td>Escena 9</td>
        </tr>
        <tr>
            <td>10</td>
            <td>Escena 10</td>
        </tr>
    </tbody>

`   */