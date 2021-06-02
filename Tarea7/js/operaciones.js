/* -------------- Variables ---------------- */
var texto = prompt("Introduzca una palabra");

/* -------------- Funciones ---------------- */
const converToUpperCase = () => {
    let nuevo = [];
    for(var i=0; i<texto.length; i++){
        if((texto.charCodeAt(i)>=97) && (texto.charCodeAt(i)<=122)){
            nuevo[i] = String.fromCharCode(texto.charCodeAt(i) - 32);
        } else if ((texto.charCodeAt(i)>=65) && (texto.charCodeAt(i)<=90)){
            nuevo[i] = texto[i];
        }
    }
    console.log(nuevo.join(''));
}
/* -------------- Eventos ---------------- */
window.addEventListener('load', function(){
    converToUpperCase();
});