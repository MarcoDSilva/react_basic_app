import React, { useState, useEffect } from "react";
import Note from "./components/note";
import noteService from "./services/notes.js";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    noteService.getAll().then((res) => {
      setNotes(res);
    });
  }, []);

  const addNote = (e) => {
    e.preventDefault();
    const noteObj = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length + 1
    };

    // with post axios, we update the api in our localhost
    // we also update the state right away to see the changes
    noteService.create(noteObj).then((res) => {
      setNotes(notes.concat(res));
      setNewNote("");
    });
  };

  const handleNoteChange = (e) => {
    console.log(e.target.value);
    setNewNote(e.target.value);
  };

  const toggleImportanceOf = (id) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService
      .update(id, changedNote)
      .then((res) => {
        setNotes(notes.map((note) => (note.id !== id ? note : res)));
      })
      .catch(err => {
        alert(`the note '${note.content}' was already deleted from the server`)
        setNotes(notes.filter(n => n.id !== id))
      });
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? "important" : "all"}
      </button>

      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>

      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
