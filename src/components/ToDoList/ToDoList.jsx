import React, { useState } from 'react';
import AddToDo from '../AddToDo/AddToDo';

export default function ToDoList({}) {
  const [toDos, setToDos] = useState(initialToDos);

  const handleAdd = (toDo) =>
    setToDos((prev) => [
      { id: prev.length + 1, content: toDo.content, isDone: false },
      ...prev,
    ]);

  return (
    <section>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.content}</li>
        ))}
      </ul>
      <AddToDo onAdd={handleAdd} />
    </section>
  );
}

const initialToDos = [
  { id: 1, content: '강의 보기', isDone: false },
  { id: 2, content: '청소하기', isDone: false },
];
