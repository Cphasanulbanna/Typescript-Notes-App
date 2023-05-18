import { useState } from "react";
import { Note } from "./models/note.model";
import Header from "./components/Header";
import NotesList from "./components/NotesList";

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
    return (
        <>
            <Header />
            <NotesList notes={notes} />
        </>
    );
};

export default App;
