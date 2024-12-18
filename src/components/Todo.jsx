import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenSquare } from "@fortawesome/free-solid-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

function Todo({task, toggleComplete, deleteTodo, reDoTodo}) {
    return(
   <div className="todoList">
    <h4>{task.task.title}</h4>
    <h5>{task.task.description}</h5>
    <h5>{task.task.status}</h5>
    <h5>Time Estimate: {task.task.timeEstimate}</h5>
    <h5> Category: {task.task.category}</h5>
    <h5> Deadline: {task.task.deadline}</h5>




    <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}></p>
    <div>
        <FontAwesomeIcon icon={faPenSquare} onClick={() => reDoTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)}/>
    </div>

   </div>
    )
}

export default Todo 