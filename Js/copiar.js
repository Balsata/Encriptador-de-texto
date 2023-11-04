export function copiar() {
    // Obtener elementos del DOM
    const textoCopia = document.querySelector(".rectangulo");
    const campoEntrada = document.querySelector(".inputt");
    const botonCopiar = document.querySelector(".copiar");
    const textoP = document.querySelector(".text-p");
    const textoS = document.querySelector(".text-s");

    // Seleccionar y copiar el texto al portapapeles
    textoCopia.select();
    navigator.clipboard.writeText(textoCopia.value);

    // Restablecer los valores y estilos
    textoCopia.value = "";
    textoCopia.style.backgroundImage = 'url("/images/Muñeco.png")';
    campoEntrada.value = "";
    botonCopiar.style.visibility = 'hidden';
    textoP.style.display = "block";
    textoS.style.display = "block";

    // Mostrar un mensaje de confirmación
    alert("Texto Copiado");
}
