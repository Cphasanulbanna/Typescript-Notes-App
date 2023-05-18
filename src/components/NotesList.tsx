import * as React from "react";

//COMPONENTS
import Notes from "./Notes";

//TYPES
import { Note } from "../models/note.model";

interface INotesListProps {
    notes: Note[];
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NotesList: React.FC<INotesListProps> = ({ notes, setNotes }) => {
    //DELETE NOTE FUNCTION
    const handleDelete = (id: string) => {
        setNotes(notes?.filter((note) => note?.id !== id));
    };

    //DISPLAY NOTES FUNCTION
    const renderNotes = (): JSX.Element[] => {
        return notes?.map((note) => {
            return (
                <Notes
                    key={note.id}
                    note={note}
                    handleDelete={handleDelete}
                />
            );
        });
    };
    return (
        <div className="flex flex-col p-[35px]">
            <h1 className="mt-[25px] text-[#111] font-bold text-[26px] text-center">Notes</h1>
            <div className="flex flex-wrap gap-[20px] justify-end">{renderNotes()}</div>
        </div>
    );
};

export default NotesList;
