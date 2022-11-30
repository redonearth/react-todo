import React, { useState } from 'react';
import AddToDo from '../AddToDo/AddToDo';
import ToDo from '../ToDo/ToDo';

export default function ToDoList({}) {
  const [toDos, setToDos] = useState(initialToDos);

  const handleAdd = (toDo) =>
    setToDos((prev) => [
      { id: prev.length + 1, content: toDo.content, isDone: false },
      ...prev,
    ]);

  const handleUpdate = (updated) =>
    setToDos(toDos.map((toDo) => (toDo.id === updated.id ? updated : toDo)));

  const handleDelete = (deleted) =>
    setToDos(toDos.filter((toDo) => toDo.id !== deleted.id));

  return (
    <section>
      <ul>
        {toDos.map((toDo) => (
          <ToDo
            key={toDo.id}
            toDo={toDo}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
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
