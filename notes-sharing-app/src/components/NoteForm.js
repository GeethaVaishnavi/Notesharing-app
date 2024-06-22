// NoteForm.js
import React, { useState } from 'react';
import { RiAddCircleLine } from 'react-icons/ri';

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <div className="note-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Enter note content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit"><RiAddCircleLine /> Add Note</button>
      </form>
    </div>
  );
};

export default NoteForm;
