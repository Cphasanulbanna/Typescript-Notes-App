import React, { useRef, useState } from "react";
import { Note } from "../models/note.model";

interface ICreateNotesProps {
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
    notes: Note[];
}

const CreateNotes: React.FC<ICreateNotesProps> = ({ notes, setNotes }) => {
    const [error, setError] = useState<string>("");

    const titleRef = useRef<HTMLInputElement | null>(null);
    const textRef = useRef<HTMLTextAreaElement | null>(null);
    const colorRef = useRef<HTMLInputElement | null>(null);

    const inputStyle =
        "border-[1px] border-[solid] border-[#111] p-[10px] rounded-[4px] overflow-hidden text-[#111] text-[16px] outline-none";

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (titleRef.current?.value === "" || textRef.current?.value === "") {
            return setError("All fields are required");
        }
        setError("");
        setNotes([
            ...notes,
            {
                id: new Date().toString(),
                title: (titleRef.current as HTMLInputElement).value,
                text: (textRef.current as HTMLTextAreaElement).value,
                color: (colorRef.current as HTMLInputElement).value,
                date: new Date().toString(),
            },
        ]);

        (titleRef.current as HTMLInputElement).value = "";
        (textRef.current as HTMLTextAreaElement).value = "";
    };
    return (
        <div className="px-[35px] flex flex-col gap-[15px]">
            <h1 className="text-[26px] text-[#111] font-bold">Create Notes</h1>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-[15px]"
                action=""
            >
                <div className={`input-box ${inputContainerStyle}`}>
                    <label
                        className="font-semibold"
                        htmlFor="title"
                    >
                        Title
                    </label>
                    <input
                        className={`${inputStyle}`}
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Enter title"
                        ref={titleRef}
                    />
                </div>
                <div className={`input-box ${inputContainerStyle}`}>
                    <label
                        htmlFor="text"
                        className="font-semibold"
                    >
                        Text
                    </label>
                    <textarea
                        className={`${inputStyle}`}
                        placeholder="Enter text"
                        cols={3}
                        id="text"
                        name="text"
                        ref={textRef}
                    ></textarea>
                </div>
                <div className={`input-box ${inputContainerStyle}`}>
                    <label
                        htmlFor="color"
                        className="font-semibold"
                    >
                        Text
                    </label>
                    <input
                        className={`${inputStyle} cursor-pointer`}
                        type={"color"}
                        id="color"
                        name="color"
                        defaultValue={"#dfdfdf"}
                        title="Choose your color"
                        ref={colorRef}
                    />
                </div>
                <button
                    className="text-[#fff] bg-slate-800 font-semibold w-[max-content] text-center cursor-pointer p-[10px] px-[30px] rounded-[4px] overflow-hidden"
                    type="submit"
                >
                    Save
                </button>
            </form>
        </div>
    );
};

export default CreateNotes;

const inputContainerStyle = "flex flex-col gap-[10px]";
