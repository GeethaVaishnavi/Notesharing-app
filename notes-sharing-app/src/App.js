import React, { useState } from 'react';
import './App.css';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (title, content) => {
    const newNote = {
      id: uuidv4(),
      title,
      content,
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <h1>Notes Sharing App</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
