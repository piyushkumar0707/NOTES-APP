import { useParams, Link } from "react-router-dom";

function NoteDetails({ notes }) {
  const { id } = useParams();

  const note = notes.find(
    (n) => n.id === Number(id)
  );

  if (!note) {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>Note not found</h2>
        <Link to="/notes">Back to Notes</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{note.title}</h2>
      <p>{note.content}</p>

      <Link to="/notes">← Back to Notes</Link>
    </div>
  );
}

export default NoteDetails;
