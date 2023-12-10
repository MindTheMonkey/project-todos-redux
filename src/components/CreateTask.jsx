import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addTask } from '../reducers/tasks';

export const CreateTask = () => {
  const emptyTask = { 
    task: "", 
    completed: false
   }
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState(emptyTask)

  const handleChange = event => {
    const { name, value } = event.target;
    setNewTask({ ...newTask, [name]: value });
  }

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addTask(newTask));
    setNewTask(emptyTask);
  }

  return (
    <div className="w-full m-2 mx-auto">
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex items-center mb-5">
          <input
            id="taskName"
            type="text"
            name="task"
            placeholder="Add task"
            value={newTask.task}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block flex-grow p-2.5 mr-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button 
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          > Add Task
          </button>
        </div>
      </form>
    </div>
  );

}