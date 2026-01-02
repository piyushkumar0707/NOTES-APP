import { useState } from "react";

function NoteInput({ addNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAdd = () => {
    if (!title.trim() || !content.trim()) return;
    addNote(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Write your note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button onClick={handleAdd}>Add Note</button>
    </div>
  );
}

export default NoteInput;
