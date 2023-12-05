export default function Archived({ archiveds, onDeleteArchived, onAddNote }) {
  function handleMoveNote() {
    const newNote = {
      ...archiveds,
      archived: !archiveds.archived,
    };
    onAddNote(newNote);
  }
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{archiveds.title}</h3>
        <p className="note-item__date">{archiveds.createdAt}</p>
        <p className="note-item__body">{archiveds.body}</p>
      </div>
      <div className="note-item__action">
        <button
          className="note-item__delete-button"
          onClick={() => onDeleteArchived(archiveds.id)}
        >
          Delete
        </button>
        <button className="note-item__archive-button" onClick={handleMoveNote}>
          Pindahkan
        </button>
      </div>
    </div>
  );
}
