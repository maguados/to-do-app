function onReady() {
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');

    addToDoForm.addEventListener('submit', event => { //cacha el evento "submit"

        event.preventDefault(); //para trabajar en una sola pagina y que no se recargue

        if (newToDoText.value !== '') {

        let title = newToDoText.value; // get the text
        // create a new li
        let newLi = document.createElement('li');
        // create a new input
        let checkbox = document.createElement('input');
        // set the input's type to checkbox
        checkbox.type = "checkbox";
         //creates a delete button
         let deleteBtn = document.createElement('button');
         //Add text to the button
         deleteBtn.textContent = 'Delete';
         deleteBtn.setAttribute('class',"btn btn-danger");

         deleteBtn.addEventListener('click', event=>{
             //console.log(event);
             //console/log(deleteBtn.parentElement);
            toDoList.removeChild(deleteBtn.parentElement);
         })
        // set the title
        newLi.textContent = title;
        // attach the checkbox to the li
        newLi.appendChild(checkbox);
        //Attach the button to a list item
        newLi.appendChild(deleteBtn);
        // attach the li to the ul
        toDoList.appendChild(newLi);
        //empty the input
        newToDoText.value = '';

        }
        else
        alert("Add an element on your list.");

    });
}

window.onload =function () {
    onReady();
 };
