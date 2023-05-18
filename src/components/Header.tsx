import * as React from "react";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
    return (
        <header className="bg-[#111] py-[15px] px-[30[30px] flex justify-center items-center">
            <h1 className="text-[32px] text-[#f1f1f1] font-bold">Notes App</h1>
        </header>
    );
};

export default Header;
