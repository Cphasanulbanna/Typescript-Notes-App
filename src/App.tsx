import { useState } from "react";
import { Note } from "./models/note.model";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import CreateNotes from "./components/CreateNotes";

type Props = {};

const App = (props: Props) => {
    const [notes, setNotes] = useState<Note[]>([
        {
            id: new Date().toString(),
            title: "Typescript",
            text: "Typescript is a superset of javascript",
            color: "#dfdfdf",
            date: new Date().toString(),
        },
    ]);

    console.log(notes, "notes");
    return (
        <>
            <Header />
            <NotesList
                notes={notes}
                setNotes={setNotes}
            />
            <CreateNotes
                setNotes={setNotes}
                notes={notes}
            />
        </>
    );
};

export default App;
