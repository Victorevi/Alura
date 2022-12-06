const Delete = () => {
    const Delete = document.createElement('button')

    Delete.innerText = 'Deletar'
    Delete.addEventListener('click', DeleteTarefa)

    return Delete
}

const DeleteTarefa = (Evento) => {
    const Delete = Evento.target

    const Finished = Delete.parentElement

    Finished.remove()

    return Delete
}

export default Delete