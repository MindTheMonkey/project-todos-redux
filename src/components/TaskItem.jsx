import { useDispatch } from 'react-redux';
import { deleteTask, completeTask } from '../reducers/tasks';

const TaskItem = ({id, task, details, completed} ) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    // Dispatch the deleteTask action with the task ID as a payload
    dispatch(deleteTask(id));
  };

  const handleCompleteClick = () => {
    // Dispatch the deleteTask action with the task ID as a payload
    dispatch(completeTask(id));
  };

  return (
    <div className="w-full mb-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className={`mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ${completed ? "line-through" : "" }`}>{task}</h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{details}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded" onClick={handleDeleteClick}>Delete</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded" onClick={handleCompleteClick}>Complete</button>
    </div>
  )
}

export default TaskItem;