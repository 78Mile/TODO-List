let button = document.getElementById('plus-button');

button.addEventListener('click', function () {
    let inputsContainer = document.getElementById('inputs-container');
    inputsContainer.classList.toggle('hide-inputs');
});

let buttonAdd = document.getElementById('done');

buttonAdd.addEventListener('click', function () {
    let name = document.getElementById('name').value;
    let description = document.getElementById('description').value;
    let li = addCard(name, description);

    let ul = document.getElementById('todo-tasks');
    apendizamosATuHijo(ul, li);
});

function addCard(name, textdescription) {
    let li = crearEtiqueta('li', 'todo-cards');
    let title = crearEtiqueta('p', 'titles-cards');
    title.innerText = name;
    let description = crearEtiqueta('p', 'text');
    description.innerText = textdescription;
    let buttonX = crearEtiqueta('button', 'btn');
    buttonX.innerText = 'X';
    buttonX.addEventListener('click', remove);
    let buttonDone = crearEtiqueta('button', 'btn');
    buttonDone.innerText = 'DONE';
    buttonDone.addEventListener('click', complete);

    apendizamosATuHijo(li, title);
    apendizamosATuHijo(li, description);
    apendizamosATuHijo(li, buttonX);
    apendizamosATuHijo(li, buttonDone);
    return li;
}

function apendizamosATuHijo(padre, hijo) {
    return padre.appendChild(hijo);
}

function crearEtiqueta(etiqueta, clase) {
    let elemento = document.createElement(etiqueta);
    elemento.classList.add(clase);
    return elemento;
}

function complete() {
    let li = this.parentNode;
    li.classList.add('c-cards');
    li.parentNode.removeChild(li);
    let completedTasks = document.getElementById('completed-tasks');
    apendizamosATuHijo(completedTasks, li);
}

function remove() {
    let li = this.parentNode;
    li.parentNode.removeChild(li);
}