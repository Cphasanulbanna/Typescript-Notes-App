import * as React from "react";
import { Note } from "../models/note.model";
import Notes from "./Notes";

interface INotesListProps {
    notes: Note[];
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NotesList: React.FC<INotesListProps> = ({ notes, setNotes }) => {
    const handleDelete = (id: string) => {
        setNotes(notes?.filter((note) => note?.id !== id));
    };

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
