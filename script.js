document.addEventListener("DOMContentLoaded", () => {
  const botonSaludo = document.querySelector("#boton-saludo");

  if (botonSaludo) {
    botonSaludo.addEventListener("click", () => {
      alert("¡Hola! Gracias por visitar mi tarjeta mosaico.");
    });
  }
});

