import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenSquare } from "@fortawesome/free-solid-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

function Todo({task, toggleComplete}) {
    return(
   <div className="todoList">
    <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
    <div>
        <FontAwesomeIcon icon={faPenSquare}/>
        <FontAwesomeIcon icon={faTrash}/>
    </div>

   </div>
    )
}

export default Todo 