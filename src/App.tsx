import { useState } from "react";

//TYPES
import { Note } from "./models/note.model";

//COMPONENTS
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import CreateNotes from "./components/CreateNotes";

type Props = {};

const App = (props: Props) => {
    //NOTE STATE
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
