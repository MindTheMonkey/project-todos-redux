const TaskItem = ({id, task, details, completed} ) => {

  return (
    <div className="w-full mb-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{task}</h5>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{details}</p>
    </div>
  )
}

export default TaskItem;