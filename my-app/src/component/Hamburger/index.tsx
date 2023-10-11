import { useState } from "react";

interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
}



export const Hamburger = () => {

 const [open, setOpen] = useState(false);

 const handleClick = () => {
        setOpen(!open);
    }

    return (
        <div className="burger-menu" onClick={handleClick}>
            <div id="burger-top"/>
            <div id="burger-middle"/>
            <div id="burger-bottom"/>
        </div>
    );
    };
