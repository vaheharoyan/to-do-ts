import { useState } from 'react';
import { Todo } from './types';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(text: string): string {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    return "Added";
  }

  function toggleTodo(id: number): string {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    return "Toggled";
  }

  function deleteTodo(id: number): string {
    setTodos(todos.filter((todo) => todo.id !== id));
    return "Deleted";
  }

  return (
    <div className="app-container">
      <h1 className="app-header">My To-Do List</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
