import Notes from "./Notes";
export function ActiveNotes({
  notes,
  onDeleteNote,
  onArchiveNote,
  searchInput,
  date,
}) {
  const numNote = notes.length;

  const filteredNote = notes.filter((note) => {
    if (searchInput === "") {
      return note;
    } else {
      return note.title.toLowerCase().includes(searchInput);
    }
  });

  return (
    <>
      <h2>Catatan Aktif</h2>
      {numNote === 0 ? (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      ) : (
        <div className="notes-list">
          {filteredNote.map((note) => (
            <Notes
              key={note.id}
              notes={note}
              onDeleteNote={onDeleteNote}
              onArchiveNote={onArchiveNote}
              date={date}
            />
          ))}
        </div>
      )}
    </>
  );
}
