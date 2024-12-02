import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { nodeIcon, enrollImage } from "../constants/media";

export default function Enroll() {
    return <section id="enroll" className="bg-gray-200 md:pt-10 md:pr-spacing-normal">
        <div className="flex flex-wrap flex-row-reverse md:flex-row gap-4 px-10 md:translate-y-10 bg-white md:rounded-r-3xl">
            <div className="flex gap-8 basis-80 relative md:ml-10">
                <img src={nodeIcon} className=" mb-auto h-20 object-contain absolute right-10 md:relative md:right-auto" />
                <img src={enrollImage} className="min-h-80 md:h-96 w-full md:w-auto mt-auto object-contain" />
            </div>

            <div className="flex flex-1 flex-col basis-80 items-center md:items-end text-center md:text-right py-10 md:p-20 gap-10 justify-center">
                <h2 className="text-3xl font-bold md:text-5xl">
                    Enroll in STEM Teacher Training Today
                </h2>
                <p className="md:text-2xl md:w-4/5">
                    Don't wait to bring real-world STEM experiences into your classroom.
                    Sign up now and join a community of educators who are committed
                    to making a difference through engaging, interdisciplinary learning.
                    Your Journey to a STEM-Rich Classroom Starts Here.

                </p>

                <a href="#waitlist-form" className="border-none outline-none bg-blue-normal text-white flex items-center gap-2 hover:gap-5 px-5 py-2 rounded-full transition-all">
                    Join the Waitlist <FaArrowRightLong size={20} />
                </a>
            </div>
        </div>
    </section>;
}
