import { useState } from "react";

export function FormAddNote({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [countText, setCountText] = useState(50);

  function handleSubmit(e) {
    e.preventDefault();

    if (title === "" && body === "") return;

    const newNote = {
      title,
      body,
      id: +new Date(),
      archived: false,
      createdAt: new Date().toISOString(),
    };

    onAddNote(newNote);
    setTitle("");
    setBody("");
  }

  function handleLimitInputText(e) {
    const inputTextValue = e.target.value;

    if (inputTextValue.length <= 50) {
      setTitle(inputTextValue);
      setCountText(50 - inputTextValue.length);
    }
  }

  return (
    <div className="note-input">
      <h2>Buat Catatan</h2>
      <form>
        <p className="note-input__title__char-limit">
          Sisa karakter : {countText}
        </p>
        <input
          className="note-input__title"
          type="text"
          placeholder="Tuliskan judul disini"
          value={title}
          onChange={(e) => handleLimitInputText(e)}
        />
        <textarea
          className="note-input__body"
          type="text"
          placeholder="Tuliskan catatanmu disini"
          spellCheck="false"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button type="submit" onClick={handleSubmit}>
          Buat
        </button>
      </form>
    </div>
  );
}
