/* -------------- Variables ---------------- */
var texto = prompt("Introduzca una palabra");

/* -------------- Funciones ---------------- */
const converToUpperCase = () => {
    let nuevo = '';
    for(var i=0; i<texto.length; i++){
        if((texto.charCodeAt(i)>=97 && texto.charCodeAt(i)<=122) || (texto.charCodeAt(i)>=224 && texto.charCodeAt(i)<=255)){
            nuevo += String.fromCharCode(texto.charCodeAt(i) - 32);
        } else {
            nuevo += texto[i];
        }
    }
    console.log(nuevo);
}
/* -------------- Eventos ---------------- */
window.addEventListener('load', function(){
    converToUpperCase();
});