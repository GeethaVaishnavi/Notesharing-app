// NoteList.js
import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';

const NoteList = ({ notes, deleteNote }) => {
  return (
    <div className="note-list">
      {notes.map(note => (
        <div className="note" key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => deleteNote(note.id)}><RiDeleteBinLine /> Delete</button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
