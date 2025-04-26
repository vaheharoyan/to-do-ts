import { useState } from 'react';

type Props = {
  addTodo(text: string): string;
};

export const TodoInput = ({ addTodo }: Props) => {
  const [text, setText] = useState<string>('');

  const handleAdd = () => {
    if (text.trim() !== '') {
      addTodo(text);
      setText('');
    }
  };

  return (
    <div className="input-container">
      <input
        className="todo-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
      />
      <button className="add-todo-button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};
