import { useDispatch, useSelector } from "react-redux";
import { taskList } from "../reducers/tasks";
import { CreateTask } from "./CreateTask";
import TaskItem from "./TaskItem";
import { ClockIcon, ListIcon } from "../icons/Icons";



const TaskList = () => {
  const tasks = useSelector(taskList)
  const completedTasks = tasks.filter(task => task.completed === true)

  return (
    <>
    <div className="flex flex-row justify-between items-center">
      <div>
        <h1 className="text-3xl font-medium">Todo list</h1>
      </div>
    </div>
    <p className="text-slate-500">Hello, here are your latest tasks</p>
    <CreateTask />
    <div id="tasks" className="my-5">
      {tasks.map(({id , completed, task}) => (
        <TaskItem
          key={id} 
          id={id}
          task={task}
          completed={completed}
        />
      ))}
    </div>
    <p className="text-xs text-slate-500 text-center">You have completed <span className="font-bold">{completedTasks.length}</span> tasks out of <span className="font-bold">{tasks.length}</span> tasks</p>
    </>
  )
}

export default TaskList;