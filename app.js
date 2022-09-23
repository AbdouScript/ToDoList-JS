// On définit les selecteurs
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const exportCsv = document.querySelector("#downloadexcel");
let elements_liste= document.getElementsByClassName('todo-item');



todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
// Notre fonction d'ajout
function addTodo(event) {
    event.preventDefault();
    console.log("Hello");
    // Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // Création du li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    // Bouton validation
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // Bouton Suppression
    const deletedButton = document.createElement("button");
    deletedButton.innerHTML = '<i class="fas fa-trash"></i>';
    deletedButton.classList.add("delete-btn");
    todoDiv.appendChild(deletedButton);
    // Ajouter notre TODO à TODO-LIST
    todoList.appendChild(todoDiv);
    todoInput.value = "";  // Renvoyer un champ de texte vide
}

// Fonction de suppression et de validation
function deleteCheck(e) {
    const item = e.target;
    // DELETE TODO
    if (item.classList[0] === "delete-btn") {
        const todo = item.parentElement;
        todo.remove();
    }
    // CHECK TODO
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");

    }
}
exportCsv.addEventListener("click", function () {
    console.log("Lancement de la fonction");
    // maListe = document.getElementById('list-tache');
    elements_liste= document.getElementsByClassName('todo-item');

    for (let i = 0; i < elements_liste.length; i++) {
        console.log(elements_liste[i].innerHTML);
    }
    // console.log(maListe.innerText);
    console.log(elements_liste);
    console.log(elements_liste.length);
});