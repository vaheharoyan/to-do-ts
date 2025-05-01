import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import './TodoActions.css';
import { clearCompleted } from './todosActions';

const TodoActions = () => {
  const todos = useAppSelector((state) => state.todos.items);
  const dispatch = useAppDispatch();

  const ClearCompleted = () => {
    dispatch(clearCompleted());
  };

  return (
    todos.some((todo) => todo.completed) && (
      <button onClick={ClearCompleted}>Clear Completed</button>
    )
  );
};

export default TodoActions;
