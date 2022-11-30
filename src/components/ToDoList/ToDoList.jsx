import React, { useEffect, useState } from 'react';
import AddToDo from '../AddToDo/AddToDo';
import ToDo from '../ToDo/ToDo';

const TODOS = 'toDos';

export default function ToDoList() {
  const [toDos, setToDos] = useState(getToDosFromLocalStorage);

  const handleAdd = (toDo) =>
    setToDos((prev) => [
      { id: prev.length + 1, content: toDo.content, isDone: false },
      ...prev,
    ]);

  const handleUpdate = (updated) =>
    setToDos(toDos.map((toDo) => (toDo.id === updated.id ? updated : toDo)));

  const handleDelete = (deleted) =>
    setToDos(toDos.filter((toDo) => toDo.id !== deleted.id));

  useEffect(() => {
    localStorage.setItem(TODOS, JSON.stringify(toDos));
  }, [toDos]);

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

function getToDosFromLocalStorage() {
  const toDos = localStorage.getItem(TODOS);
  return toDos ? JSON.parse(toDos) : [];
}
