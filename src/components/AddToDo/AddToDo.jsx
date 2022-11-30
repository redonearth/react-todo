import React, { useState } from 'react';

export default function AddToDo({ onAdd }) {
  const [content, setContent] = useState('');

  const handleChange = (e) => setContent(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (content.trim() === '') {
      setContent('');
      return;
    }
    onAdd({ content });
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="할 일 작성하기"
        value={content}
        onChange={handleChange}
      />
      <button>추가</button>
    </form>
  );
}
