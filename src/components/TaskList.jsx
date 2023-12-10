import { useDispatch, useSelector } from "react-redux";
import { taskList } from "../reducers/tasks";
import { CreateTask } from "./CreateTask";
import TaskItem from "./TaskItem";
import { ClockIcon, ListIcon } from "../icons/Icons";



const TaskList = () => {
  const tasks = useSelector(taskList)
  const completedTasks = tasks.filter(task => task.completed === true)
  console.log("completedTasks",completedTasks)

  return (
    <>
    <div className="flex flex-row justify-between items-center">
      <div>
        <h1 className="text-3xl font-medium">Todo list</h1>
      </div>
      {/*} 
      <div className="inline-flex space-x-2 items-center">
        <a href="#" className="p-2 border border-slate-200 rounded-md inline-flex space-x-1 items-center text-indigo-200 hover:text-white bg-indigo-600 hover:bg-indigo-500">
          <ClockIcon />
          <span className="text-sm font-medium hidden md:block">Urgent</span>                     
        </a>
        <a href="#" className="p-2 border border-slate-200 rounded-md inline-flex space-x-1 items-center hover:bg-slate-200">
          <ListIcon />
          <span class="text-sm hidden md:block">Latest</span>                    
        </a>
      </div>
     {*/}
    </div>
    <p className="text-slate-500">Hello, here are your latest tasks</p>
    <CreateTask />
    <div id="tasks" class="my-5">
      {tasks.map(({id , completed, task}) => (
        <TaskItem
          key={id} 
          id={id}
          task={task}
          completed={completed}
        />
      ))}
    </div>
    <p class="text-xs text-slate-500 text-center">You have completed <span className="font-bold">{completedTasks.length}</span> tasks out of <span className="font-bold">{tasks.length}</span> tasks</p>
    </>
  )
}

export default TaskList;