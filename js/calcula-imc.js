let titulo = document.querySelector("h1")
titulo.textContent = "Aparecida Nutricionista"


let pacientes = document.querySelectorAll(".paciente")

for(let i = 0; i < pacientes.length; i++) {
    let paciente = pacientes[i];
   
    let tdPeso = paciente.querySelector(".info-peso")
    let peso = tdPeso.textContent

    let tdAltura = paciente.querySelector(".info-altura")
    let altura = tdAltura.textContent

    let tdImc = paciente.querySelector(".info-imc")


    let pesoEhValido = true
    let alturaEhValida = true

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso Inválido!")
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido"
        paciente.classList.add("paciente-invalido")

    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura Invalida!")
        alturaEhValida = falsetdImc.textContent = "Altura Inválida"
        paciente.classList.add("paciente-invalido")
    }

    if (alturaEhValida && pesoEhValido) {
        tdImc.textContent = calculaImc(peso, altura)
    }
}


function calculaImc (peso, altura) {
    let imc = 0;

    imc = peso / (altura*altura)
    
    return imc.toFixed(2)
}
