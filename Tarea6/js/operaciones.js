/* ---------------------- Variables ------------------- */
var nombre = prompt("Introduzca un nombre"),
     boton = document.getElementById("btn");

/* ---------------------- Funciones ------------------- */
const convertToString = (value) =>{
    return value.toString();
}

const modifyName = () => {
    let two = nombre.substring(0,2);
    let newName = [];   
    let auxiliar = '';

    for(let i=0; i<two.length; i++){
        newName[i] = two.charCodeAt(i) - 96;
    }
    newName = newName.map(convertToString);
    
    for(let i=0; i<newName.length; i++){
        auxiliar += newName[i];
    }
    console.log("El nuevo nombre será " + two.toUpperCase() + auxiliar);
}
/* ---------------------- Eventos ------------------- */
boton.addEventListener('click', function(){
    modifyName();
});