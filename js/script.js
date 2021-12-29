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
        var imc = peso / (altura * altura);
        tdIMC.textContent = imc.toFixed(2);
    }else {
        tdIMC.textContent = "Altura e/ou peso inválidos!"
    }

}


var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", enviarDados);

function enviarDados(event){

    event.preventDefault();
    console.log("deu certo");

    var formulario = document.querySelector("#form-adiciona");

    var nome = formulario.nome.value;
    var peso = formulario.peso.value;
    var altura = formulario.altura.value;
    var gordura = formulario.gordura.value;


    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var ImcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    ImcTd.textContent = imc.toFixed(2);


    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(ImcTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
}
