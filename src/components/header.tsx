import React from "react";
import { logoIcon } from "../constants/media";
import { Link } from "react-router-dom";

export default function Header() {

    return <header className="w-full flex items-center justify-start py-2 px-spacing-small md:px-spacing-normal">
       <Link to={"/"}> <img alt="" src={logoIcon} loading="lazy" className="w-20 object-contain" /></Link>
    </header>;
}
