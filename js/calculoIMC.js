var pacientes = document.querySelectorAll(".paciente");

for( var i = 0; i < pacientes.length; i++ ){

    var paciente = pacientes[i];

    var pacienteNome = paciente.querySelector(".info-nome")
    var nome = paciente.textContent;
    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdIMC = paciente.querySelector(".info-imc");
    
    
    var alturaValida = true;
    var pesoValido = true; 
    
    
    if(peso <= 0 || peso >= 600){
    
        pesoValido = false;
        console.log("Peso Invalido");
        tdPeso.textContent =  "Peso invalido";
        paciente.classList.add("paciente-invalido");
    }
    
    if(altura <= 0 || altura >= 3){
    
        alturaValida = false;
        console.log("Altura Invalido");
        tdAltura.textContent =  "Altura invalida";
        paciente.classList.add("paciente-invalido");
    }
    
    if( alturaValida && pesoValido){
        var imc = calculoDeIMC(peso, altura)
        tdIMC.textContent = imc;
    }

}
function calculoDeIMC(peso, altura){

    var imc = 0;

    imc = peso / (altura * altura);
    return imc.toFixed(2); 
    
}


