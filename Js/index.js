import { encriptar } from "./encriptar.js";
import { desencriptar } from "./desencriptar.js";
import { copiar } from "./copiar.js";

document.querySelector('.encriptar').addEventListener('click', encriptar);
document.querySelector('.desencriptar').addEventListener('click', desencriptar);
document.querySelector('.copiar').addEventListener('click', copiar);
