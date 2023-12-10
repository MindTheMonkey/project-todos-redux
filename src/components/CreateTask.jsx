import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addTask } from '../reducers/tasks';

export const CreateTask = () => {
  const emptyTask = { 
    task: "", 
    details: "",
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
    <div className="max-w-sm rounded-lg overflow-hidden mb-2 bg-white p-6 mx-auto mt-2">
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <h3>Add new task</h3>
        <div className="mb-5">
          <input
            id="taskName"
            type="text"
            name="task"
            placeholder="Task"
            value={newTask.task}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
          />
        </div>
        <textarea
          name="details"
          placeholder="Task Details (Optional)"
          value={newTask.details}
          onChange={handleChange}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
        />
        <button 
          type="submit"
          className="mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Task
        </button>
      </form>
    </div>
  );

}