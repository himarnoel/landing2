import React from "react";
import ExpectCard from "./cards/expect";
import { expectations } from "../constants/config";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Expect() {
    return <section id="expect" className="w-full flex flex-col items-center gap-10 py-20 px-spacing-small md:px-spacing-large lg:px-spacing-x-large">
        <div className="w-full flex flex-col p-4 md:p-12 gap-20 rounded-3xl md:rounded-[4em] bg-yellow-normal">
            <header className="w-full gap-4 flex flex-col text-center items-center">
                <h2 className="text-2xl font-bold md:text-5xl">What to Expect</h2>
                <p className="md:text-2xl md:w-4/5">
                    This course is more than theory. It's a hands-on, engaging expereicnce
                    that you can put into practice immediately. Here's what you'll dive into
                </p>
            </header>
            <div className="grid gap-8 md:gap-y-12 grid-cols-auto-fill-20">
                {expectations.map(item => (<ExpectCard key={item.content} item={item} />))}
            </div>
        </div>

        <a href="#waitlist-form" className="border-none outline-none bg-blue-normal text-white flex items-center gap-2 hover:gap-5 px-5 py-2 rounded-full transition-all">
            Join the Waitlist <FaArrowRightLong size={20} />
        </a>
    </section>;
}
