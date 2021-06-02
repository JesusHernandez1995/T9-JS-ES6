/* ---------------------- Variables --------------------- */
var boton = document.getElementById("btn");

/* ---------------------- Funciones --------------------- */
const randomNumber = (min, max) => {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

/* ---------------------- Eventos --------------------- */
boton.addEventListener('click', function(){
    let number = randomNumber(100, 999);
    let nombre = "RX" + number;
    console.log("El nuevo nombre de robot es " + nombre);
});