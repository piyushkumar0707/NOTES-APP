import { useEffect, useState } from "react";
import NoteInput from "./components/NoteInput";
import NotesList from "./components/NotesList";

function App() {
  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem("notes")) || [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (title, content) => {
    setNotes([
      ...notes,
      { id: Date.now(), title, content }
    ]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };


  const [searchTerm, setSearchTerm] = useState("");
  const filteredNotes = notes.filter(note =>
  note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  note.content.toLowerCase().includes(searchTerm.toLowerCase())
);



  const updateNote = (id, updatedTitle, updatedContent) =>{
    setNotes(
      notes.map(note =>
        note.id === id ?
        { ...note, title: updatedTitle, content: updatedContent}
        : note
      )
    );
  };

  return (
    <div className="app">
      <h1>Notes App</h1>
      <NoteInput addNote={addNote} />
      <input
  type="text"
  placeholder="Search notes..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>

      <NotesList notes={filteredNotes} deleteNote={deleteNote} updateNote={updateNote} />
    </div>
  );
}

export default App;
