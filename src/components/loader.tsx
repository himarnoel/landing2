import React from "react";
import { logoIcon } from "../constants/media";

export default function Loader() {
    return <section id="loader" className='h-full flex items-center justify-center'>
        <div className='w-40 aspect-square md:aspect-video bg-green flex items-center justify-center p-spacing-small md:p-spacing-x-small rounded-full md:rounded-xl shadow-2xl md:animate-pulse animate-bounce'>
            <img loading="lazy" src={logoIcon} alt='' className='' />
        </div>
    </section>;
}