import  { useState } from 'react';
import './TodoList.css';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import TodoActions from './TodoActions';
import { addTodo } from './todosActions';

const TodoList = () => {
  const [text, setText] = useState('');
  const todos = useAppSelector((state) => state.todos.items);
  const dispatch = useAppDispatch();

  const Add = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div className="todo-app">
      <h2>To-Do List</h2>

      <TodoInput text={text} setText={setText} Add={Add} />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <TodoActions />
    </div>
  );
};

export default TodoList;
