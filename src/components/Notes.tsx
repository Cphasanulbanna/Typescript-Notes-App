import * as React from "react";

import { Note } from "../models/note.model";

interface INotesProps {
    note: Note;
    handleDelete: (id: string) => void;
}

const Notes: React.FC<INotesProps> = ({ note, handleDelete }) => {
    const Border = "rounded-[4px] overflow-hidden";
    const dynamicBg = note.color;

    return (
        <div
            style={{ backgroundColor: dynamicBg }}
            className={`${Border} ${dynamicBg} mt-[24px] w-[1/3] p-[20px] note-card flex flex-col gap-[5px] border-[1px] border-solid border-[gray] mx-auto`}
        >
            <h1 className="text-[#111] text-[22px] font-bold">{note?.title}</h1>
            <p className="text-grey text-[16px] font-semibold">{note?.text}</p>
            <span className="text-[15px] text-[gray]">{note?.date}</span>
            <button
                onClick={() => handleDelete(note?.id)}
                className={`${Border} text-center w-[max-content] text-[16px] cursor-pointer py-[10px] px-[20px] text-[#f1f1f1] bg-[red] `}
            >
                Delete
            </button>
        </div>
    );
};

export default Notes;
