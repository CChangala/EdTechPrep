const storedTodoList = localStorage.getItem('todoList');
let todoList = storedTodoList ? JSON.parse(storedTodoList) : [];
renderTODOList();
function addLists(){
    const inputBar = document.querySelector('.js-list-input');
    const taskl = inputBar.value.trim();
    const dateBar = document.querySelector('.js-input-date');
    const datel = dateBar.value;
    
    if (taskl && datel) {
        const list ={
            task : taskl,
            date : datel
        }
        todoList.push(list);
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }
    else{
        alert('Please give correct detailes');
    }
    renderTODOList();
    // Clear the input bar
    inputBar.value = '';
}

function renderTODOList(){
    let HTMLDiv = '';
        // Generate HTML for the todo list
        for(let i = 0;i<todoList.length;i++){
            const todo = todoList[i];
            const task =todo.task;
            const date = todo.date;
            const htmlpara =`
            <div>${task}</div>
            <div> ${date} </div>
            <button onclick="deleteList(${i})">Delete</button>`;
            HTMLDiv+=htmlpara;
        }
        // Update the HTML of the .js-div-list element
        document.querySelector('.js-div-list').innerHTML = HTMLDiv;
}
function deleteList(index){
    todoList.splice(index,1);
    renderTODOList();
}