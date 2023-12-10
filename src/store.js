import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { tasks } from './reducers/tasks';

const reducer = combineReducers({
    tasks: tasks.reducer
  })

export const store = configureStore({ reducer });
