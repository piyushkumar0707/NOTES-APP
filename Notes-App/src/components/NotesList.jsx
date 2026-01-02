import NoteItem from './NoteItem';
function NotesList({ notes, deleteNote, updateNote }) {
  if (notes.length === 0) {
    return <p style={{ textAlign: "center" }}>No notes found</p>;
  }

  return (
    <div className="notes-grid">
      {notes.map(note => (
        <NoteItem
          key={note.id}
          note={note}
          deleteNote={deleteNote}
          updateNote={updateNote}
        />
      ))}
    </div>
  );
}

export default NotesList;
