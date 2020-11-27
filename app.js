window.onload = function () {

    PaginaCargada();
}

function PaginaCargada() {
    let toDos = [];

    const addToDoForm = document.getElementById('addToDoForm');

    function createNewToDo() {
        const newToDoText = document.getElementById('newToDoText');

        toDos.push({
            title: newToDoText.value,
            complete: false
        });

        //console.log(toDos);

        newToDoText.value = '';

        renderTheUI();
    }

    function renderTheUI() {
        //Apunta al elemento ul
        const toDoList = document.getElementById('toDoList');
        //Limpas para que vuelva a dibujar.Sino los elementos de la lista se vana agregando una y otra vez
        toDoList.textContent = '';

        toDos.forEach(function (toDo) {
            const newLi = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = "checkbox";

            newLi.textContent = toDo.title;
            toDoList.appendChild(newLi);
            newLi.appendChild(checkbox);
        });

    }

    addToDoForm.addEventListener('submit', e => {
        //Evita que se recargue la página en el Submit
        e.preventDefault();
        createNewToDo();
    });

    renderTheUI();

}
