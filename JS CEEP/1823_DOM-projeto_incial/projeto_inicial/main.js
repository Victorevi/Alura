import Checkbox from "./componentes/Checkbox.js"
import Delete from "./componentes/Delete.js"

const CriarTarefa = (Evento) => {

    Evento.preventDefault()

    const Lista = document.querySelector('[DataList]')
    const Input = document.querySelector('[DataForInput]')
    const Valor = Input.value

    const Tarefa = document.createElement('li')
    Tarefa.classList.add('task')
    const Conteudo = `<p class="content">${Valor}</p>`

    Tarefa.innerHTML = Conteudo

    Tarefa.appendChild(Checkbox())
    Tarefa.appendChild(Delete())
    Lista.appendChild(Tarefa)
    Input.value = " "
}

const NovaTarefa = document.querySelector('[DataForButton]')

NovaTarefa.addEventListener('click', CriarTarefa) 