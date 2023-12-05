export default function Navbar({ searchInput, onSearchInput }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <div className="note-search">
        <input
          type="text"
          placeholder="Cari catatan..."
          value={searchInput}
          onChange={onSearchInput}
        />
      </div>
    </div>
  );
}
