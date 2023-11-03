export function encriptar() {
    const input = document.querySelector(".inputt").value;

    if (input.trim() === "") {
        alert("El campo de entrada está vacío. Ingresa un texto válido.");
        return; // Detenemos la ejecución de la función
    }

    const validador = input.match(/^[a-z\s]*$/);

    if (!validador) {
        alert("Solo son permitidas letras minúsculas y sin acentos.");
        return; // Detenemos la ejecución de la función
    }

    const encriptado = [];

    for (var i = 0; i < input.length; i++) {
        if (input[i] === "a") {
            encriptado.push("ai");
        } else if (input[i] === "e") {
            encriptado.push("enter");
        } else if (input[i] === "i") {
            encriptado.push("imes");
        } else if (input[i] === "o") {
            encriptado.push("ober");
        } else if (input[i] === "u") {
            encriptado.push("ufat");
        } else {
            encriptado.push(input[i]);
        }
    }

    const textarea = document.querySelector(".rectangulo");
    const copiar = document.querySelector(".copiar")
    const texto_p = document.querySelector(".text-p")
    const texto_s = document.querySelector(".text-s")

    textarea.value = encriptado.join('');
    textarea.style.backgroundImage = "none";
    copiar.style.visibility = 'visible';
    texto_p.style.display = "none"
    texto_s.style.display = "none"
}