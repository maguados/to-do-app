function onReady() {
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');

    addToDoForm.addEventListener('submit', event => { //cacha el evento "submit"

        event.preventDefault(); //para trabajar en una sola pagina y que no se recargue
        let title = newToDoText.value; // get the text
        // create a new li
        let newLi = document.createElement('li');
        // create a new input
        let checkbox = document.createElement('input');
        // set the input's type to checkbox
        checkbox.type = "checkbox";
        // set the title
        newLi.textContent = title;
        // attach the checkbox to the li
        newLi.appendChild(checkbox);
        // attach the li to the ul
        toDoList.appendChild(newLi);
        //empty the input
        newToDoText.value = '';

    });
}

window.onload =function () {
    onReady();
 };
