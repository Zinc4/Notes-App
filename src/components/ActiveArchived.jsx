import Archived from "./Archived";
export function ActiveArchived({
  archiveds,
  onDeleteArchived,
  onAddNote,
  searchInput,
}) {
  const numArchived = archiveds.length;

  const filteredArchive = archiveds.filter((archived) =>
    archived.title.toLowerCase().includes(searchInput)
  );

  return (
    <>
      <h2>Arsip</h2>
      {numArchived === 0 ? (
        <p className="notes-list__empty-message">Tidak ada arsip</p>
      ) : (
        <div className="notes-list">
          {filteredArchive.map((archived) => (
            <Archived
              key={archived.id}
              archiveds={archived}
              onDeleteArchived={onDeleteArchived}
              onAddNote={onAddNote}
            />
          ))}
        </div>
      )}
    </>
  );
}
