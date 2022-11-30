import { useState } from 'react';
import styles from './App.module.css';

export default function App() {
  const [toDos, setToDos] = useState(initialToDos);
  const [toDoText, setToDoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChangeText = (e) => {
    setToDoText(e.target.value);
  };

  const handleAddToDo = () => {
    setToDos((prev) => [
      { id: prev.length + 1, content: toDoText, isDone: false },
      ...prev,
    ]);
  };

  return (
    <div className={styles.appContainer}>
      <form onSubmit={handleSubmit}>
        <ul>
          {toDos.map((toDo) => (
            <li key={toDo.id}>
              <span>{toDo.content}</span>
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="할 일 작성하기"
          value={toDoText}
          onChange={handleChangeText}
        />
        <button onClick={handleAddToDo}>추가</button>
      </form>
    </div>
  );
}

const initialToDos = [
  { id: 1, content: '강의 보기', isDone: false },
  { id: 2, content: '청소하기', isDone: false },
];
