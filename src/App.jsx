import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { store } from './store.js'

import TaskList from './components/TaskList';

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
