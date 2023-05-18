import * as React from "react";
import { Note } from "../models/note.model";

interface INotesProps {
    note: Note;
}

const Notes: React.FC<INotesProps> = ({ note }) => {
    return (
        <div className="border-[1px] border-solid border-[gray] p-[24px] rounded-[4px] overflow-hidden w-[500px]">
            <div className="note-card flex flex-col gap-[5px]">
                <h1 className="text-[#111] text-[22px] font-bold">{note?.title}</h1>
                <p className="text-grey text-[16px] font-semibold">{note?.text}</p>
                <span className="text-[15px] text-[gray]">{note?.date}</span>
                <button className="text-center w-[max-content] text-[16px] cursor-pointer rounded-[4px] overflow-hidden py-[10px] px-[20px] text-[#f1f1f1] bg-[red] ">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Notes;
