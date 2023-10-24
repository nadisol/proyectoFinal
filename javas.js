  window.onload = () => {
   let formulario = document.querySelector("form-login");
     let inputpass = document.getElementById("pass");
     let inputname = document.getElementById("name");
   let boton = document.getElementById("button");
 // mensaje de error si el pass no cumple con ciertos requisitos
  inputpass.addEventListener("keyup", () => {
       let mensaje;
      if (inputpass.value.length < 8) {
           mensaje = "La contraseña tiene que tener al menos 8 caracteres"
          document.getElementById("mensajePass").innerText = mensaje;
     } else {
         document.getElementById("mensajePass").innerText = " "
    }
   })

    }

    let boton = document.querySelector("button")
  
    localStorage.setItem("usuarioRegistrado", "Macarena")
  
  
      boton.onclick = (event)  => {
        event.preventDefault()
        let inputUsuario = document.getElementById ("username").value;
        if (inputUsuario == localStorage.getItem("usuarioRegistrado")) {
          let mensajeIngreso = document.createElement("p")
  
          document.querySelector("p").innerText = "Ingreso con éxito"
          sessionStorage.setItem("sesionIniciada", true)
          sessionStorage.setItem("username", inputUsuario)
  
  
        } else {
          let p = document.createElement("p")
          mensajePass.innerText = "Intente de nuevo"
          document. querySelector("form-login").appendChild(mensajePass)
   
        }
      }
  


//       fetch("url")

//  window.onload = () => {
//     let name =document.querySelector("name")
//     let boton = document.querySelector("boton")

//     boton.addEventListener("click", (event) =>{
//       event.preventDefault();
//       let valorInput = input.value;
//       fetch(" https://pokeapi.co/api/v2/pokemon/" + valorInput)
//         .then((response) => {return response.json() })
//         .then((data) => {console.log(data) })
//       .catch ((error) =>{console.log(error)})
//     })
//  }


 const url = 'https://location-to-address.p.rapidapi.com/v1/geocode/reverse?lon=-74.0445&lat=40.68922&limit=1&lang=en';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '86c520158bmsh0ccede3e16715d1p128bc2jsna06f460b0e95',
		'X-RapidAPI-Host': 'location-to-address.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}