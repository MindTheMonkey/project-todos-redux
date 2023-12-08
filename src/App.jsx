import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { tasks } from './reducers/tasks'

import TaskList from './components/TaskList';

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="max-w-4xl w-full">
          <TaskList />
        </div>
      </div>
    </Provider>
  );
};
