const input = document.querySelector('#todo'),
    todoList = document.querySelector('.todos'),
    form = document.querySelector('.todo-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let val = input.value.trim();

    if(val) {
        addElement({
            text: val
        });
        saveTodoList();
    }
    input.value = '';
});

function addElement(todo) {
    var li = document.createElement('li');

    li.innerHTML = `<span>${todo.text}</span>
                 <i class="fas fa-trash"></i>`;
    if(todo.status == 'done') {
        li.setAttribute('class','done')
    }

    li.addEventListener('click',function() {
        this.classList.toggle('done');
        saveTodoList();
    });

    li.querySelector('i').addEventListener('click', function() {
        this.parentElement.remove();
        saveTodoList();
    });

    todoList.appendChild(li);
}

function saveTodoList() {
    let todos = [];
    document.querySelectorAll('li').forEach(item => {
        let text = item.querySelector('span').innerText;
        let status = item.getAttribute('class');

        todos.push({
            text,
            status
        })
    });

    localStorage.setItem('todoList', JSON.stringify(todos));
}

function init() {
    let data = JSON.parse(localStorage.getItem('todoList'));
    data.forEach(item => {
        addElement(item);
    });
}

init();