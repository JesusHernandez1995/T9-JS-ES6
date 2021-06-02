var num = parseInt(prompt("Introduce cualquier número"));

const esPrimo = (numero) => {
    if(numero == 0 || numero == 1 || numero == 4)   return false;

    for(let i=2; i<numero/2; i++){
        if(numero % i == 0)     return false;
    }

    return true;
}

if(esPrimo(num)){
    console.log("El número " + num + " es primo");
} else {
    console.log("El número " + num + " no es primo");
}