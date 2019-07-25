

let btnAdicionar = document.querySelector("#adicionar-paciente")



btnAdicionar.addEventListener("click", (e) => {
    e.preventDefault()
    
    let form = document.querySelector("#form-adiciona")
    
    let paciente = obtemPacienteDoFormulario(form)

    let pacienteTr = montaTr(paciente)

    let erros = validaPaciente(paciente)

    if(erros.length > 0) {
        exibeMensagemErro(erros)
        return
    }

    let tbody = document.querySelector("#tabela-pacientes")

    tbody.appendChild(pacienteTr)

    form.reset()
    let mensagensErro = document.querySelector("#mensagem-erro")
    mensagensErro.innerHTML = ""

})

const obtemPacienteDoFormulario = (form) => {

    paciente = {
        nome: form.nome.value,
        peso: form.peso.value ,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente
}

const montaTr = (paciente) => {

    let pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente")

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"))
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"))
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"))
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"))
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"))

    return pacienteTr
}

function montaTd(dado, classe) {
    let td = document.createElement("td")
    td.textContent = dado
    td.classList.add(classe)

    return td
}

function validaPaciente(paciente) {

    let erros = []

    if(paciente.nome.length == 0) erros.push("Nome não pode ser vazio")

    if(!validaPeso(paciente.peso)) erros.push("O peso é invalido")

    if(!validaAltura(paciente.altura)) erros.push("Altura é Invalida")

    if(paciente.gordura.length == 0) erros.push("A gordura não pode ser em branco")

    if(paciente.peso.length == 0) erros.push("peso não pode ser em branco")

    if(paciente.altura.length == 0) erros.push("Altura não pode ser vazia")

    return erros;
}

function exibeMensagemErro(erros){
    let ul = document.querySelector("#mensagem-erro")
    ul.innerHTML = ""

    erros.forEach(function(erro) {
        let li = document.createElement("li")
        li.textContent = erro

        ul.appendChild(li)
    })
}