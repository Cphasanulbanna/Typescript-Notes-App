import * as React from "react";
import { Note } from "../models/note.model";
import Notes from "./Notes";

interface INotesListProps {
    notes: Note[];
}

const NotesList: React.FC<INotesListProps> = ({ notes }) => {
    const handleDelete = (id: string) => {};

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
        <div className="flex- flex-col p-[35px]">
            <h1 className="mt-[25px] text-[#111] font-bold text-[26px]">Notes</h1>
            <div>{renderNotes()}</div>
        </div>
    );
};

export default NotesList;
