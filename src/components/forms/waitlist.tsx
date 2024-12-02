import React from "react";
import { smilyIcon } from "../../constants/media";

export default function WaitlistForm() {
    const handleSubmit = (ev: React.FormEvent) => { };

    return <form id="waitlist-form" onSubmit={handleSubmit} className="w-80 mx-auto md:w-96 relative p-10 py-14 bg-black rounded-xl flex flex-col items-center gap-4 text-white">
        <img src={smilyIcon} alt="" className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 h-16" />
        <h3 className="font-bold">Join the Waitlist Form</h3>

        <div className="flex flex-col gap-2 w-full">
            <input required type="text" placeholder="name" className="w-full border-none outline-none p-2 bg-transparent placeholder:text-white placeholder:capitalize" />
            <input required type="email" placeholder="email" className="w-full border-none outline-none p-2 bg-transparent placeholder:text-white placeholder:capitalize" />
            <input required type="tel" placeholder="phone number" className="w-full border-none outline-none p-2 bg-transparent placeholder:text-white placeholder:capitalize" />
        </div >

        <button className="px-10 py-1.5 rounded-full bg-yellow-normal self-center">Join Now</button>
    </form >
}