import * as React from "react";
import { Note } from "../models/note.model";
import Notes from "./Notes";

interface INotesListProps {
    notes: Note[];
}

const NotesList: React.FC<INotesListProps> = ({ notes }) => {
    console.log(notes);
    const renderNotes = () => {
        notes?.map((note) => {
            <Notes
                key={note.id}
                note={note}
            />;
        });
    };
    return (
        <>
            <h1 className="mt-[25px]">Notes</h1>
            <div>{renderNotes()}</div>
        </>
    );
};

export default NotesList;
