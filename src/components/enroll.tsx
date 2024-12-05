import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { nodeIcon, enrollImage } from "../constants/media";

export default function Enroll() {
    return <section id="enroll" className="bg-gray-200 xl:pr-spacing-normal">
        <div className="py-10 px-spacing-normal flex flex-wrap bg-white overflow-hidden xl:translate-y-10 xl:rounded-r-3xl">
            <div className="flex justify-center gap-20 relative flex-none basis-80 xl:w-1/3">
                <img src={nodeIcon} className="h-20 xl:h-44 mt-12 object-contain absolute right-10 xl:right-auto xl:relative" />
                <img src={enrollImage} alt="" className="h-96 xl:scale-150 xl:translate-y-1/2" />
            </div>

            <div className="flex flex-1 basis-80 flex-col items-center xl:items-end justify-center text-center xl:text-right gap-10 py-10">
                <h2 className="text-3xl font-bold xl:text-6xl md:w-4/5 xl:w-3/5">
                    Enroll in STEM Teacher Training Today
                </h2>

                <p className="xl:text-2xl xl:w-4/5">
                    Don't wait to bring real-world STEM experiences into your classroom.
                    Sign up now and join a community of educators who are committed
                    to making a difference through engaging, interdisciplinary learning.
                    Your Journey to a STEM-Rich Classroom Starts Here.
                </p>

                <a href="#waitlist-form" className="border-none outline-none bg-blue-normal text-white flex items-center gap-2 hover:gap-4 px-6 py-2 rounded-full transition-all">
                    Join the Waitlist <FaArrowRightLong size={20} />
                </a>
            </div>
        </div>
    </section>;
}
