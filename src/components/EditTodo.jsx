import { useState } from "react"


function EditTodo({reDoTodo, editTask, task}) {
    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault()
        editTask(value, task.id)

        setValue('')

    }

    return(
        <> 
        <form className="addTodo" onSubmit={handleSubmit}>
            <input type="text" className="todoInput" value={value} placeholder="Update your task" onChange={(e) =>(setValue(e.target.value))}/>
            <button type="submit" className="newTodoBtn">Update Task</button>
        </form>
        </>

    )
}

export default EditTodo                  