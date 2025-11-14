const infocomic = document.querySelector (".info-comic")
const listcapitulos = document.querySelector (".list-capitulos")

console.log(infocomic)
console.log(listcapitulos)


//modificar el contenido de info general de comic//

infocomic.innerHTML =` 
<p> ${comic.year} </p>
 <h1>${comic.nombrecomic}</h1>
<p>${comic.sinopsis}</p>
<p>${comic.genero.join(",")}</p>
<p>${comic.personajes.join(", ")}</p>
`
