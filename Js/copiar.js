export function copiar() {
    const copy = document.querySelector(".rectangulo");
    const input = document.querySelector(".inputt");
    const copiar = document.querySelector(".copiar")

    copy.select();
    navigator.clipboard.writeText(copy.value);
    copy.value = "";
    copy.style.backgroundImage = 'url("/images/Muñeco.png")';
    input.value = "";
    copiar.style.visibility = 'hidden';

    alert("Texto Copiado");
}