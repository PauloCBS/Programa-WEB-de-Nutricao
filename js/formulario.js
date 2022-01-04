var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", enviarDados);

function enviarDados(event){

    event.preventDefault();
    console.log("deu certo");

    var formulario = document.querySelector("#form-adiciona");
    var paciente = obtemPaciente(formulario);
    var pacienteTr = criarElemento(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    formulario.reset(formulario);
    
}

    function obtemPaciente(formulario){

        var paciente = {

            nome: formulario.nome.value,
            peso: formulario.peso.value,
            altura: formulario.altura.value,
            gordura: formulario.gordura.value,
            imc: calculoDeIMC(formulario.peso.value, formulario.altura.value)

        }
        return paciente
    }

    function criarElemento(paciente){

            var pacienteTr = document.createElement("tr");
            pacienteTr.classList.add("paciente");

            var nomeTd = criarPacienteTd(paciente.nome,"info-nome");
            var pesoTd = criarPacienteTd(paciente.peso,"info-peso");
            var alturaTd = criarPacienteTd(paciente.altura,"info-altura");
            var gorduraTd = criarPacienteTd(paciente.gordura,"info-gordura");
            var ImcTd = criarPacienteTd(paciente.imc,"info-imc");
        
            pacienteTr.appendChild(criarPacienteTd(paciente.nome,"info-nome"));
            pacienteTr.appendChild(criarPacienteTd(paciente.peso,"info-peso"));
            pacienteTr.appendChild(criarPacienteTd(paciente.altura,"info-altura"));
            pacienteTr.appendChild(criarPacienteTd(paciente.gordura,"info-gordura"));
            pacienteTr.appendChild(criarPacienteTd(paciente.imc,"info-imc"));
 
            return pacienteTr;
    }

    function criarPacienteTd(dado, classe){

        var pacienteTd = document.createElement("td");
        pacienteTd.textContent = dado; 
        pacienteTd.classList.add(classe);

        return pacienteTd;
    }


