const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

function renderTodoList() {
  let todoListHtml = '';
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const { name, dueDate } = todo;
    const todoHtml = `
      <div class="todo-item">
        <d>${name}</d>
        <d>${dueDate}</d>
        <button onclick="
          deleteTodo(${i});
          renderTodoList();
        " class="todo-delete">Delete</button>
      </div>
    `;
    todoListHtml += todoHtml;
  }

  document.querySelector('.todo-list-container').innerHTML = todoListHtml;
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

function addTodo() {
  const buttonElement = document.querySelector('.js-input-todo');
  const name = buttonElement.value;

  const inputDate = document.querySelector('.js-input-date');
  const dueDate = inputDate.value;
  todoList.push({
    name,
    dueDate
  });
  buttonElement.value = '';
  inputDate.value = '';
  renderTodoList();
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  renderTodoList();
}

// Initialize the to-do list on page load
renderTodoList();