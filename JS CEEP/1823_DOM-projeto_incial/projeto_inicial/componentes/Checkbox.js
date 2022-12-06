const Checkbox = () => {
    const Checkbox = document.createElement('button')
    
    Checkbox.classList.add('check-button')
    Checkbox.innerText = 'Check'
    Checkbox.addEventListener('click', Check)
    
    return Checkbox
}

const Check = (Evento) => {
    const Checkbox = Evento.target

    const Finished = Checkbox.parentElement

    Finished.classList.toggle('done')
}

export default Checkbox