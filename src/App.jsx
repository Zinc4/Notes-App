import { useState } from "react";
import { Container } from "./components/Container";
import { FormAddNote } from "./components/FormAddNote";
import Navbar from "./components/Navbar";
import { getInitialData } from "./utils";
import { ActiveNotes } from "./components/ActiveNotes";
import { ActiveArchived } from "./components/ActiveArchived";
import { showFormattedDate } from "./utils";

export default function App() {
  const dataNote = getInitialData();

  const [notes, setNotes] = useState(dataNote);
  const [archivedNotes, setArchivedNote] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  function handleAddNote(note) {
    setNotes((notes) => [...notes, note]);
    setArchivedNote(
      archivedNotes.filter((archivedNotes) => archivedNotes.id !== note.id)
    );
  }
  function handleAddArchivedNote(note) {
    setArchivedNote((archivedNotes) => [...archivedNotes, note]);
    setNotes(notes.filter((notes) => notes.id !== note.id));
  }

  function handleDeleteNote(id) {
    setNotes((notes) => notes.filter((note) => note.id !== id));
  }

  function handleDeleteArchived(id) {
    setArchivedNote((archiveds) =>
      archiveds.filter((archived) => archived.id !== id)
    );
  }

  function handleSearchInput(e) {
    const lowerCase = e.target.value.toLowerCase();
    setSearchInput(lowerCase);
  }

  return (
    <div>
      <Navbar searchInput={searchInput} onSearchInput={handleSearchInput} />
      <Container>
        <FormAddNote onAddNote={handleAddNote} notes={notes} />
        <ActiveNotes
          notes={notes}
          onDeleteNote={handleDeleteNote}
          onArchiveNote={handleAddArchivedNote}
          searchInput={searchInput}
          date={showFormattedDate}
        />
        <ActiveArchived
          archiveds={archivedNotes}
          onDeleteArchived={handleDeleteArchived}
          onAddNote={handleAddNote}
          searchInput={searchInput}
        />
      </Container>
    </div>
  );
}
