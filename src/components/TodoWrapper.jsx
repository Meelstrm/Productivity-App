import { useState } from "react"
import AddTodo from "./AddTodo"
import { v4 as uuidv4 } from 'uuid';
import Todo from "./Todo";


function TodoWrapper() {
    
    const [todos, setTodos] = useState([])

    const addNewTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
        console.log(todos)
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo ))
    }

    return(
        <div className="todoWrapper">
            <h1>Todo List!</h1>
        <AddTodo addNewTodo={addNewTodo}/>
        {todos.map((todo, index) => (
         <Todo task ={todo} key={index} toggleComplete={toggleComplete}/>
        ) )}
        </div>  

    )
}

export default TodoWrapper  