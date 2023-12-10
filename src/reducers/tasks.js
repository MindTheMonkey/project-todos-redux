import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: 1,
    task: "Buy groceries",
    completed: false
  },
  {
    id: 2,
    task: "Finish school project",
    completed: false
  },
  {
    id: 3,
    task: "Go for a run",
    completed: true
  },
  {
    id: 4,
    task: "Read a book",
    completed: false
  },
  {
    id: 5,
    task: "Clean the house",
    completed: true
  }
]

export const tasks = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
      deleteTask: (state, action) => {
        console.log("Delete Payload", action.payload)
        return state.filter((task) => task.id !== action.payload)
      },
      completeTask: (state, action) => {
        return state.map((task) =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        );
      },
      addTask: (state, action) => {
        const newTask = {
          id: Date.now(),
          ...action.payload
        }
        state.push(newTask);
      }
    }
  });

export const { deleteTask, completeTask, addTask } = tasks.actions;
export const taskList = (state) => state.tasks;