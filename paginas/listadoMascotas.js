let arrayDeMascotas = [
    {
     nombre: "Cachorros encontrados",
     edad: 2 ,
     imagen: "https://images.pexels.com/photos/69371/pexels-photo-69371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
     nombre: "Se busca a Timoteo",
     edad: 10,
     imagen: "https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
   },
   {
    nombre: "Gatito Perdido",
    edad: 5 ,
    imagen: "https://images.pexels.com/photos/4411430/pexels-photo-4411430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
   },
  ]
 
 
 
 
 
  for (let i = 0; i < arrayDeMascotas.length; i++){
    let article = document.createElement("article")
    let imagen = document.createElement("img")
    let nombre = document.createElement("h3")
    let edad = document.createElement("p")
 
    imagen.src = arrayDeMascotas[i].imagen
    nombre.innerText = arrayDeMascotas[i].nombre
    edad.innerText = arrayDeMascotas[i].edad
 
    article.appendChild(imagen)
    article.appendChild(nombre)
    article.appendChild(edad)
 
   document.querySelector("section.listadoMascotas").appendChild(article)
  }
 
 