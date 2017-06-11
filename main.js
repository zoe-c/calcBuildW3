// // Select the input element with the id 'todoInput' and store in a variable `todoInput`.
// var todoInput = document.querySelector('#todoInput');
//
// // console.log(todoInput);
// // Select the ordered list element with the id 'todoList' and store in a variable `todoList`.
// var todoList = document.querySelector('#todoList');
// // console.log(todoList);
//
// // Add a keypress event listener to `todoInput`.
// todoInput.addEventListener('keypress', function(event) {
//    if (event.keyCode == 13) {
//    var todoContent = event.target.value;
//    event.target.value = '';
//    // todoContent = '';       // .createTextNode () assigned to a variable and appended to the list item is another way to create or return a text output. here, we just assigned the TARGET ELEMENT'S (li) VALUE (upon event trigger) TO A STRING.
//    // woo
//    var newTodoLi = document.createElement('li');
//
//    newTodoLi.textContent = todoContent;
//    todoList.appendChild(newTodoLi);
// }
//    return event;
// });
