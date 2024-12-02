import React from "react";
import { logoIcon } from "../constants/media";

export default function Header() {

    return <header className="w-full flex items-center justify-start py-2 px-spacing-small md:px-spacing-normal">
        <img alt="" src={logoIcon} loading="lazy" className="w-20 object-contain" />
    </header>;
}
