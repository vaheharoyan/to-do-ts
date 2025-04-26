import { Todo } from '../types';
import { TodoItem } from './TodoItem';

type Props = {
  todos: Todo[];
  toggleTodo(id: number): string;
  deleteTodo(id: number): string;
};

export const TodoList = ({ todos, toggleTodo, deleteTodo }: Props) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};
