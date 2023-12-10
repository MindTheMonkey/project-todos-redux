import { useDispatch } from 'react-redux';
import { deleteTask, completeTask } from '../reducers/tasks';
import { CheckMark, CheckMarkChecked, TrashCan } from '../icons/Icons';

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
    <>
    <div id="task" class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent">
      <div className="inline-flex items-center space-x-2">
        <button onClick={handleCompleteClick}>{completed ? <CheckMarkChecked /> : <CheckMark />}</button>
        <div className={`${completed ? "text-slate-500 line-through" : "" }`}>{task}</div>
      </div>
      <button onClick={handleDeleteClick}><TrashCan /></button>
    </div>
    </>
  )
}

export default TaskItem;