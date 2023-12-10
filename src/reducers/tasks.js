import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: 1,
    task: "Buy groceries",
    details: "Go to the supermarket and buy milk, eggs, bread, and vegetables.",
    completed: false
  },
  {
    id: 2,
    task: "Finish school project",
    details: "Complete the coding part and write a short summary of the project.",
    completed: false
  },
  {
    id: 3,
    task: "Go for a run",
    details: "Run for 30 minutes in the park.",
    completed: true
  },
  {
    id: 4,
    task: "Read a book",
    details: "Start reading 'The Great Gatsby' by F. Scott Fitzgerald.",
    completed: false
  },
  {
    id: 5,
    task: "Clean the house",
    details: "Vacuum the floors, dust the furniture, and clean the kitchen.",
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