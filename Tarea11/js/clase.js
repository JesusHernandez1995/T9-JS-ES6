// Procedemos a crear una clase coche

class Coche{
    constructor(nombre, marca, velocidad)
    {
        this.nombre = nombre;
        this.marca = marca;
        this.velocidad = velocidad;
    }

    // Métodos
    Acelerar(){
        this.velocidad = 30;
    }

    Desacelerar(){
        this.velocidad = 0;
    }
}

// Creando una nueva instancia de Coche: creando el objeto
const auto1 = new Coche('Elantra', 'Hyundai', 12);
console.log(auto1.velocidad);
auto1.Acelerar();
console.log(auto1.velocidad);