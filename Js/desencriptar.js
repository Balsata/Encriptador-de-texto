export function desencriptar() {
    const input = document.querySelector(".inputt").value;

    const validador = input.match(/^[a-z\s]*$/);

    if (input.trim() === "") {
        alert("El campo de entrada está vacío. Ingresa un texto válido.");
        return; // Detenemos la ejecución de la función
    }

    if (!validador) {
        alert("Solo son permitidas letras minúsculas y sin acentos.");
        return; // Detenemos la ejecución de la función
    }

    const matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    let textoDesencriptado = input.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        textoDesencriptado = textoDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }

    const textarea = document.querySelector(".rectangulo");
    textarea.value = textoDesencriptado;

    const copiar = document.querySelector(".copiar");
    copiar.style.visibility = 'visible';

}