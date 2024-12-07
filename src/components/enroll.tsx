import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { nodeIcon, enrollImage } from "../constants/media";

export default function Enroll() {
  return (
    <section
      id="enroll"
      className=" z-10 md:pt-10 mt-10 md:mt-0 md:pr-spacing-normal relative"
    >
      <div className="flex flex-wrap  flex-col w-full md:flex-row-reverse  relative z-50 gap-4 lg:px-10 md:translate-y-10 bg-white md:rounded-r-3xl">
        <div className="flex gap-8 md:basiss-80 md:ml-10 xl:ml-0 lg:hidden md:block">
          <img
            src={nodeIcon}
            className=" mb-auto h-20 xl:h-[10rem] md:block hidden object-contain  bottom-20 absolute right-10 xl:-0 xl:left-0 md:relative md:right-auto"
          />
        </div>

        <div className="lg:flex gap-8  xl:ml-0 md:hidden ">
          <img
            src={nodeIcon}
            className=" mb-auto h-20 xl:h-[6rem] md:block hidden object-contain  bottom-20 absolute  xl:-0 xl:left-10  top-0 md:right-auto"
          />
        </div>


        <img
          src={enrollImage}
          className="h-[17rem] md:h-96 xl:h-[21rem] md:block hidden md:absolute left-0 lg:left-64 xl:left-14 bottom-0 -z-20 w-full md:w-auto mt-auto object-contain"
        />

        <div className="flex flex-1 px-8 flex-col basis-80 items-center md:items-end text-center md:text-right py-10 md:p-20 gap-10 justify-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            Enroll in STEM Teacher Training Today
          </h2>
          <p className="md:text-2xl md:w-4/5">
            Don't wait to bring real-world STEM experiences into your classroom.
            Sign up now and join a community of educators who are committed to
            making a difference through engaging, interdisciplinary learning.
            Your Journey to a STEM-Rich Classroom Starts Here.
          </p>

          <div className="relative mt-10 block md:hidden">
            {" "}
            <div className="md:flex block gap-8 md:basis-80 md:ml-10 ">
              <img
                src={nodeIcon}
                className=" mb-auto h-20 xl:h-[10rem] object-contain  -top-10  absolute -right-8 md:relative md:right-auto"
              />
            </div>
            <img
              src={enrollImage}
              className="h-[24rem] md:h-96 xl:h-[24rem]  md:absolute left-0 lg:left-64 bottom-0 -z-20 w-full md:w-auto mt-auto object-contain"
            />
          </div>
          <a
            href="#waitlist-form"
            className="border-none outline-none hidden  bg-blue-normal text-white lg:flex items-center gap-2 hover:gap-5 px-5 py-2 rounded-full transition-all"
          >
            Join the Waitlist <FaArrowRightLong size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
