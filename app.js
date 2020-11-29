window.onload = function () {

    PaginaCargada();
}

function PaginaCargada() {
    const addToDoForm = document.getElementById('addToDoForm');
    let toDos = [];
    let id = 0;

    function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    IF(!new_todo_text.value){ return;} <----Asi lo tenía ella
        toDos.push({
            title: newToDoText.value,
            complete: false
            id: id
        });

        id++;

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

          const delete_btn = document.createElement("button"); 
          delete_btn.textContent = "Delete!" ;

          delete_btn.addEventListener("click", e => {
            toDos = toDos.filter(function(item){
                return item.id !== toDo.id;
            })
            

            renderTheUI();
          });

            newLi.textContent = toDo.title;
            toDoList.appendChild(newLi);
            newLi.appendChild(checkbox);
            newLi.appendChild(delete_btn);
        });

    }

    addToDoForm.addEventListener('submit', e => {
        //Evita que se recargue la página en el Submit
        e.preventDefault();
        createNewToDo();
    });

    renderTheUI();

}
