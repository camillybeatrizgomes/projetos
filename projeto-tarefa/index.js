const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("Você deve escrever algo!");
    } else {
        let li = document.createElement("li"); // Cria um novo elemento de lista
        li.innerHTML = inputBox.value; // Define o conteúdo do elemento de lista
        listContainer.appendChild(li); // Adiciona o elemento de lista ao contêiner da lista
        let span = document.createElement("span"); // Cria um elemento span para o botão de exclusão
        span.innerHTML = "\u00d7"; // Define o conteúdo do span como o símbolo de multiplicação (x)
        li.appendChild(span); // Adiciona o span ao elemento de lista
    }
    inputBox.value = ""; // Limpa a caixa de entrada após adicionar a tarefa
    saveData(); // Salva os dados após adicionar a tarefa
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Alterna a classe "checked" para marcar/desmarcar a tarefa
        saveData(); // Salva os dados após marcar/desmarcar a tarefa
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Remove a tarefa quando o botão de exclusão é clicado
        saveData(); // Salva os dados após remover a tarefa
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML); // Salva o conteúdo da lista no armazenamento local
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data"); // Carrega o conteúdo da lista do armazenamento local
}
showTask();