import { createSlice } from '@reduxjs/toolkit';
import {
  addTodo,
  removeTodo,
  toggleTodo,
  editTodo,
  clearCompleted,
} from './todosActions';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodosState {
  items: Todo[];
}

const initialState: TodosState = {
  items: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTodo, (state, action) => {
        state.items.push({
          id: Date.now(),
          text: action.payload,
          completed: false,
        });
      })
      .addCase(removeTodo, (state, action) => {
        state.items = state.items.filter(todo => todo.id !== action.payload);
      })
      .addCase(toggleTodo, (state, action) => {
        const todo = state.items.find(todo => todo.id === action.payload);
        if (todo) {
          todo.completed = !todo.completed;
        }
      })
      .addCase(editTodo, (state, action) => {
        const todo = state.items.find(todo => todo.id === action.payload.id);
        if (todo) {
          todo.text = action.payload.text;
        }
      })
      .addCase(clearCompleted, (state) => {
        state.items = state.items.filter(todo => !todo.completed);
      });
  },
});

export default todosSlice.reducer;
