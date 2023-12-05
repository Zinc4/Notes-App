export default function Notes({ notes, onDeleteNote, onArchiveNote, date }) {
  function handleMoveAr() {
    const newArchive = {
      title: notes.title,
      body: notes.body,
      id: notes.id,
      archived: !notes.archived,
      createdAt: date(notes.createdAt),
    };
    onArchiveNote(newArchive);
  }

  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{notes.title}</h3>
        <p className="note-item__date">{date(notes.createdAt)}</p>
        <p className="note-item__body">{notes.body}</p>
      </div>
      <div className="note-item__action">
        <button
          className="note-item__delete-button"
          onClick={() => onDeleteNote(notes.id)}
        >
          Delete
        </button>
        <button className="note-item__archive-button" onClick={handleMoveAr}>
          Arsipkan
        </button>
      </div>
    </div>
  );
}
