import React from 'react';
import { IoTrashBinSharp } from 'react-icons/io5';

export default function ToDo({ toDo, onUpdate, onDelete }) {
  const { content, status } = toDo;

  const handleChange = (e) => {
    const status = e.target.checked ? 'done' : 'active';
    onUpdate({ ...toDo, status });
  };

  const handleDelete = () => onDelete(toDo);

  return (
    <li>
      <input
        type="checkbox"
        id="checkbox"
        checked={status === 'done'}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">{content}</label>
      <button onClick={handleDelete}>
        <IoTrashBinSharp />
      </button>
    </li>
  );
}
