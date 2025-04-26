import { Todo } from '../types';

type Props = {
  todo: Todo;
  toggleTodo(id: number): string;
  deleteTodo(id: number): string;
};

export const TodoItem = ({ todo, toggleTodo, deleteTodo }: Props) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span className="todo-text">{todo.text}</span>
      <button className="delete-button" onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
};
