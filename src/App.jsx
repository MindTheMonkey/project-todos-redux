import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { store } from './store.js'

import TaskList from './components/TaskList';

export const App = () => {
  return (
    <Provider store={store}>
      <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <TaskList />
      </div>
    </Provider>
  );
};
