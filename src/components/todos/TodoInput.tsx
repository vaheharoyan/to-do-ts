import './TodoInput.css';

type Props = {
  text: string;
  setText: (val: string) => void;
  Add: () => void;
};

const TodoInput = ({ text, setText, Add }: Props) => {
  return (
    <div className="todo-input-container">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task..."
      />
      <button onClick={Add}>+</button>
    </div>
  );
};

export default TodoInput;
