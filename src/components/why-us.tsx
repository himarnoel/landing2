import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import imag from "../assets/images/img.png";
export default function WhyUs() {
  return (
    <section className="w-full  flex  flex-col justify-between lg:items-baseline bg-yellow-normal px-spacing-normal lg:py-10 pb-0 relative before:h-80 before:w-80 before:left-0 before:absolute before:bg-red-normal before:rounded-full before:-translate-x-2/3 before:md:-translate-x-1/2">
      <div className="flex flex-1 flex-col basis-80 mt-10 items-center lg:max-w-[800px] md:items-start text-center md:text-left lg:py-10 lg:p-20 gap-10 justify-center">
        <h2 className="text-3xl font-medium md:text-5xl z-20  mt-10">
          Why STEM Teacher Training?
        </h2>
        <p className="z-10 md:text-2xl text-xl xl:text-2xl md:w-4/5">
          This isn't just a training course; it's a gateway to transforming your
          teaching practice. We believe every educator has the power to inspire
          curiosity and creativity in students. With our STEM Teacher Training,
          you'll learn how to design a classroom experience that prepares
          students for the 1future, nurtures critical thinking, and bridges the
          gap between school and the real world.
        </p>

        <a
          href="#waitlist-form"
          className="border-none outline-none hidden bg-blue-normal text-white lg:flex items-center gap-2 hover:gap-5 px-5 py-2 rounded-full transition-all"
        >
          Join the Waitlist <FaArrowRightLong size={20} />
        </a>
      </div>
      <img
        src={imag}
        alt=""
        className=" self-end object-contain   w-[40rem] lg:w-[20rem] xl:w-[45rem] lg:absolute -right-32 xl:right-0 xl:bottom-0 bottom-0"
      />
    </section>
  );
}
