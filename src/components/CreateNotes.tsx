import * as React from "react";

interface ICreateNotesProps {}

const CreateNotes: React.FC<ICreateNotesProps> = (props) => {
    const inputStyle =
        "border-[1px] border-[solid] border-[#111] p-[10px] rounded-[4px] overflow-hidden text-[#111] text-[16px] outline-none";
    return (
        <div className="px-[35px] flex flex-col gap-[15px]">
            <h1 className="text-[26px] text-[#111] font-bold">Create Notes</h1>
            <form
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
