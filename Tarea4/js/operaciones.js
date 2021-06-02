var palabra = prompt("Introduzca una frase o palabra");

const count_items = () => {
   console.log("El número de letras es: " + palabra.length);
   texto_separado = palabra.split(" ");
   numeroPalabras = texto_separado.length;
   console.log("El número de palabras es: " + numeroPalabras);
}

count_items();