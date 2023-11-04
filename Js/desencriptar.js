export function desencriptar() {
    // Obtener el valor del campo de entrada
    const input = document.querySelector(".inputt").value;

    // Obtener elementos del DOM
    const textarea = document.querySelector(".rectangulo");
    const copiar = document.querySelector(".copiar");
    const texto_p = document.querySelector(".text-p");
    const texto_s = document.querySelector(".text-s");

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

    // Definir la matriz de desencriptación
    const matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    // Convertir el texto de entrada a minúsculas
    let textoDesencriptado = input.toLowerCase();

    // Recorrer la matriz de desencriptación y reemplazar las secuencias de caracteres
    for (let i = 0; i < matrizCodigo.length; i++) {
        textoDesencriptado = textoDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }

    // Actualizar el valor del textarea con el texto desencriptado
    textarea.value = textoDesencriptado;
    textarea.style.backgroundImage = "none";
    copiar.style.visibility = 'visible';
    texto_p.style.display = "none";
    texto_s.style.display = "none";
}
