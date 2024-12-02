import React from "react";
import { logoIcon } from "../constants/media";
import { socialMediaLinks } from "../constants/config";

export default function Footer() {
    return <footer className="w-full pb-4 bg-gray-normal md:pb-4 p-spacing-normal md:p-spacing-small flex flex-col items-center md:items-start gap-10">
        <div className="w-full h-1 bg-blue-normal rounded-full" />

        <img alt="" src={logoIcon} loading="lazy" className="w-40 object-contain" />

        <div className="w-full flex gap-4 flex-wrap items-center justify-center md:justify-between">
            <nav className="flex items-center justify-start gap-4 text-blue-normal">
                {socialMediaLinks.map(item => (
                    <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer">
                        <item.icon size={20} />
                    </a>
                ))}
            </nav>

            <span className="pr-2 first-letter:capitalize">
                website designed by Waaki creative
            </span>
        </div>
    </footer>;
}
