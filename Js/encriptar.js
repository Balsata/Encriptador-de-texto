export function encriptar() {
    // Obtener el valor del campo de entrada
    const input = document.querySelector(".inputt").value;

    // Verificar si el campo de entrada está vacío
    if (input.trim() === "") {
        alert("El campo de entrada está vacío. Ingresa un texto válido.");
        return;
    }

    // Validar que solo se permitan letras minúsculas y espacios
    const validador = input.match(/^[a-z\s]*$/);
    if (!validador) {
        alert("Solo son permitidas letras minúsculas y sin acentos.");
        return;
    }

    // Definir la matriz de encriptación
    const matrizCodigo = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
    };

    // Crear un arreglo para almacenar el texto encriptado
    const encriptado = [];

    // Recorrer el texto de entrada y encriptar caracteres
    for (let i = 0; i < input.length; i++) {
        const caracter = input[i];
        const caracterEncriptado = matrizCodigo[caracter] || caracter;
        encriptado.push(caracterEncriptado);
    }

    // Obtener elementos del DOM
    const textarea = document.querySelector(".rectangulo");
    const copiar = document.querySelector(".copiar");
    const texto_p = document.querySelector(".text-p");
    const texto_s = document.querySelector(".text-s");

    // Actualizar el valor del textarea con el texto encriptado
    textarea.value = encriptado.join('');
    textarea.style.backgroundImage = "none";
    copiar.style.visibility = 'visible';
    texto_p.style.display = "none";
    texto_s.style.display = "none";
}
