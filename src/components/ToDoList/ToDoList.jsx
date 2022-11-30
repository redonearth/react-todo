import React, { useEffect, useState } from 'react';
import AddToDo from '../AddToDo/AddToDo';
import ToDo from '../ToDo/ToDo';

const TODOS = 'toDos';

export default function ToDoList({ filter }) {
  const [toDos, setToDos] = useState(getToDosFromLocalStorage);

  const handleAdd = (toDo) =>
    setToDos((prev) => [
      { id: prev.length + 1, content: toDo.content, status: 'active' },
      ...prev,
    ]);

  const handleUpdate = (updated) =>
    setToDos(toDos.map((toDo) => (toDo.id === updated.id ? updated : toDo)));

  const handleDelete = (deleted) =>
    setToDos(toDos.filter((toDo) => toDo.id !== deleted.id));

  useEffect(() => {
    localStorage.setItem(TODOS, JSON.stringify(toDos));
  }, [toDos]);

  const filtered = getFilteredItems(toDos, filter);

  return (
    <section>
      <ul>
        {filtered.map((toDo) => (
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

function getFilteredItems(toDos, filter) {
  if (filter === 'all') {
    return toDos;
  }
  return toDos.filter((toDo) => toDo.status === filter);
}

function getToDosFromLocalStorage() {
  const toDos = localStorage.getItem(TODOS);
  return toDos ? JSON.parse(toDos) : [];
}
