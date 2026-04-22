const boton= document.querySelector("button");
const mensaje= document.querySelector("#msg");
const mostrarMensaje = document.querySelector(".mensaje");



boton.addEventListener("click", (e) =>{
    e.preventDefault()
    const msg = mensaje.value.trim();
    if(msg){
        const nuevoMensaje = document.createElement("p");
        nuevoMensaje.classList.add("tarjeta")
        nuevoMensaje.textContent = msg;
        mostrarMensaje.append(nuevoMensaje)
    }
    mensaje.value = "";
})