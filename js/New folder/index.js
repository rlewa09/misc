function removeCheck(id) {
    checkbox = document.getElementById(id);
    labels = document.getElementsByClassName(id);
    console.log(labels);
    labels[0].style.display = "none";
    checkbox.style.display = "none";
}

let total = 2;
let newTodo;
function addTodo() {
    total++;
    document.getElementById('TodoList').innerHTML += `
    <input type="checkbox" id="${total}" onclick="removeCheck(${total})" />
    <label class="${total}"> item ${total} - ${newTodo}</label>
    `;
}

function todoName() {
    newTodo = document.getElementById('inputElement').value;
}