// Procedemos a crear una clase coche
class Coche{
    constructor(nombre, marca, velocidad)
    {
        this.nombre = nombre;
        this.marca = marca;
        this.velocidad = velocidad;
    }

    // Métodos
    Correr(){
        this.velocidad = this.velocidad + 10;
        console.log(this.velocidad);
    }

    Frenar(){
        this.velocidad = 0;
    }

    Aparcar(){
        console.log("He aparcao!");
    }
}

class Moto extends Coche {
    constructor(nombre, marca, velocidad, matricula, num_ruedas, num_puertas, years_of_use){
        super(nombre, marca, velocidad);
        this.matricula = matricula;
        this.num_ruedas = num_ruedas;
        this.num_puertas = num_puertas;
        this.years_of_use = years_of_use;
    }
}

class Patin extends Coche{
    constructor(...args){
        super(...args);
    }
}

// Creando una nueva instancia de Coche: creando el objeto
const vehiculo = new Coche('Elantra', 'Hyundai', 12);

const motocicleta = new Moto('Yamaha', 'RX86', 80, 'E32SF9', 2, 0, 4);

const monopatin = new Patin('RES201', 'Xaomi', 20, 'XLAFD3', 2, 0, 1);

monopatin.Aparcar();
console.log(monopatin.Correr());


