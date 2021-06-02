var radio = prompt("Introduzca el radio de la circunferencia");

var perimetro = (2 * Math.PI * radio).toFixed(2),
         area = (Math.PI * radio * radio).toFixed(2);

console.log(perimetro);
console.log(area);