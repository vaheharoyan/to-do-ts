import  { useState } from 'react';
import './TodoItem.css';
import { useAppDispatch } from '../../hooks/hooks';
import { removeTodo, toggleTodo, editTodo } from './todosActions';

interface TodoItemProps {
  todo: { id: number; text: string; completed: boolean };
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const dispatch = useAppDispatch();

  const Toggle = () => dispatch(toggleTodo(todo.id));
  const Remove = () => dispatch(removeTodo(todo.id));
  const Edit = () => {
    if (editText.trim()) {
      dispatch(editTodo({ id: todo.id, text: editText }));
      setEditing(false);
    }
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={Toggle}
      />
      {editing ? (
        <div className="todo-buttons">
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={Edit}>Save</button>
        </div>
      ) : (
        <>
          <span>{todo.text}</span>
          <div className="todo-buttons">
            <button onClick={() => setEditing(true)}>Edit</button>
            <button onClick={Remove}>❌</button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
