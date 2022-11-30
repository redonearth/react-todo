import React from 'react';
import { IoTrashBinSharp } from 'react-icons/io5';

export default function ToDo({ toDo, onUpdate, onDelete }) {
  const { content, isDone } = toDo;

  const handleChange = (e) => {
    const isDone = e.target.checked ? true : false;
    onUpdate({ ...toDo, isDone });
  };

  const handleDelete = () => onDelete(toDo);

  return (
    <li>
      <input
        type="checkbox"
        id="checkbox"
        checked={isDone}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">{content}</label>
      <button onClick={handleDelete}>
        <IoTrashBinSharp />
      </button>
    </li>
  );
}
