var nameInput = document.getElementById('name')
var horarioInput = document.getElementById('horario')
var button = document.querySelector('.botao')
var messege = document.querySelector('.msg')
var item = document.getElementById('tarefas')

button.addEventListener("click", (e) => {
    e.preventDefault();

    var nameValue = nameInput.value
    var horarioValue = horarioInput.value

    if(nameValue === '' || horarioValue === ''){
        messege.textContent = 'Digite uma tarefa e o horário que teve ser feita!'
        messege.classList = 'error'
        setTimeout(() => {
            message.textContent = "";
            message.classList = "";
        }, 3000);        
        return; 
    }

    var li = document.createElement('li')
    li.classList = 'tarefas'
    li.innerHTML = `Tarefa: ${nameValue} | Horário: ${horarioValue}`
    item.appendChild(li)


    nameInput.value = "";
    horarioInput.value = "";
})