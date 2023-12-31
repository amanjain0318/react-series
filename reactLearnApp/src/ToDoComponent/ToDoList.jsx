function ToDoList({todoList,deleteTodo}){
    return(
        <>
        <h1>My ToDo Task List </h1>
        <ol>
            {todoList.map((todo) => (
                <li key = {todo.id}>
                        {todo.text}{'  '}
                        <button onClick={()=> deleteTodo(todo.id)}>Delete ToDo</button>     
                </li>
            ))}
        </ol>
        </>
    );
}

export default ToDoList