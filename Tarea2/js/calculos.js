// ---------------- Variables ------------------ // 
let input_field = document.getElementById("radio-circle"),
   btn_calcular = document.getElementById("btn-calcular"),
          radio = input_field.value;
          
// ---------------- Funciones ------------------ // 
const calcular = (r) => {
    let perimetro = (2 * Math.PI * r).toFixed(2),
            area = (Math.PI * r * r).toFixed(2);

    input_field.value = perimetro;
}

// ---------------- Eventos ------------------ // 
input_field.addEventListener('keyup', function(){
    if(this.value < 0){
        /* De esta manera, evitamos que el usuario escriba un radio negativa */
        this.value *= -1;   
    }
});

btn_calcular.addEventListener('click', function(){
    calcular(radio);
});