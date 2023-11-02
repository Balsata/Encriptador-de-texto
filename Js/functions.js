function encriptar() {

    var input = document.querySelector(".inputt").value;
    var encriptado = [];

    let validador = input.match(/^[a-z\s]*$/);

    if (!validador || input.length === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos");
        location.reload();
    }

    for (var i = 0; i < input.length; i++) {

        if (input[i] === "a") {
            encriptado.push("ai");
        }
        else if (input[i] === "e") {
            encriptado.push("enter");
        }
        else if (input[i] === "i") {
            encriptado.push("imes");
        }
        else if (input[i] === "o") {
            encriptado.push("ober");
        }
        else if (input[i] === "u") {
            encriptado.push("ufat");
        }
        else {
            encriptado.push(input[i]);
        }
    }

    let out = document.querySelector(".rectangulo");
    out.value = encriptado.join('');

    let images = document.getElementById('images');
    images.style.visibility = 'hidden';

    let copiar = document.querySelector(".copiar")
    copiar.style.visibility = 'visible';

}


function desencriptar() {
    var input = document.querySelector(".inputt").value;

    let validador = input.match(/^[a-z\s]*$/);

    if (!validador || input.length === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos");
        location.reload();
    }

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    input = input.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (input.includes(matrizCodigo[i][1])) {
            input = input.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    let out = document.querySelector(".rectangulo");
    out.value = input;

    let images = document.getElementById('images');
    images.style.visibility = 'hidden';

    let copiar = document.querySelector(".copiar")
    copiar.style.visibility = 'visible';

}


function copiar() {
    var copy = document.querySelector(".rectangulo");

    copy.select();
    navigator.clipboard.writeText(copy.value);
    copy.value = "";
    alert("Texto Copiado");
}

var button = document.querySelector(".encriptar");
button.onclick = encriptar;

var buttons = document.querySelector(".desencriptar");
buttons.onclick = desencriptar;

var copiarText = document.querySelector(".copiar");
copiarText.onclick = copiar;

