import { useDispatch, useSelector } from "react-redux";
import { taskList } from "../reducers/tasks";
import TaskItem from "./TaskItem";


const TaskList = () => {
const tasks = useSelector(taskList)
console.log(tasks)
 
  return (
    <div>
        {tasks.map(({id, details , completed, task}) => (
          <TaskItem
            key={id} 
            id={id}
            details={details}
            task={task}
            completed={completed}
          />
        ))}
    </div>
  )

}

export default TaskList;