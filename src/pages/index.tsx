import React from "react";
import Cta from "../components/cta";
import Hero from "../components/hero";
import WhyUs from "../components/why-us";
import Expect from "../components/expect";
import Enroll from "../components/enroll";
import Waitlist from "../components/waitlist";
import Overview from "../components/overview";
import { engagements, faqGroups } from "../constants/config";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  mainHeroImage,
  microscopeIcon,
  smilyIcon,
  whiteImage,
} from "../constants/media";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function Page() {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    let interval = setInterval(
      () => setIndex((prev) => (prev + 1) % engagements.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Hero image={mainHeroImage}>
        <div className="flex flex-1 flex-col  gap-2  lg:mx-0 mx-auto lg:w-fit text-center md:text-left w-full lg:max-w-[400px] xl:max-w-[48vw] md:mt-10">
          <span className="text-blue-normal text-xl xl:text-3xl text-center lg:text-start">
            Welcome to STEM Teacher Training
          </span>

          <h2 className="text-xl md:text-8xl lg:text-[3.8rem] xl:text-[4.8rem] lg:leading-[1.15] text-center lg:text-start  font-medium">
            Transforming Classrooms for the Next Generation
          </h2>

          <div className="  lg:w-[90%] z-10 bg-white rounded-xl mt-10">
            <p className="z-50 text-sm md:text-base text-center md:p-4">
              This isn't your usual CPD, Oh No! <br />
              • It's a 360 degree transformative experience where you are
              equipped with the right strategies to seamlessly weave Science,
              Technology Engineering and maths into your lessons to create
              magical learning moments <br />• It a discovery journey into how
              to master the act of using real-life context to inspire children
              to problem solve, think critically and enjoy collaborating
            </p>
          </div>

          <a
            href="#waitlist-form"
            className="border-none outline-none w-fit mx-auto mt-8 bg-blue-normal text-white flex items-center gap-2 hover:gap-5 px-8 py-2 md:text-lg rounded-full transition-all"
          >
            Join the Waitlist <FaArrowRightLong size={20} />
          </a>
        </div>
      </Hero>
      <Overview>
        <div className="w-full relative rounded-[2em]  bg-white shadow-md gap-10 flex flex-col p-10">
          <img
            src={microscopeIcon}
            alt=""
            className="h-20 lg:h-[10rem] translate-y-1/2 lg:translate-y-[26%] lg:left-10 object-contain absolute left-5 -top-6 md:top-auto md:bottom-0 "
          />
          <img
            src={smilyIcon}
            alt=""
            className="absolute -bottom-4 md:bottom-auto md:top-10 right-0 md:right-10 h-10 md:h-20"
          />

          <h2 className="text-2xl md:text-5xl capitalize px-10 text-center md:text-left">
            imagine this
          </h2>

          <div className="md:w-4/5 mx-auto flex overflow-hidden items-center justify-start">
            {engagements.map((item) => (
              <p
                key={item.content}
                style={{ transform: `translateX(-${index * 100}%)` }}
                className="flex-none w-full text-md md:text-2xl transition-all duration-700 text-justify md:text-center"
              >
                {item.content}
              </p>
            ))}
          </div>

          <div className="flex gap-2 items-center justify-center">
            {engagements.map((_, id) => (
              <div
                key={id}
                onClick={() => setIndex(id)}
                className={`flex h-2 w-2  rounded-full ${
                  id === index ? "bg-[#FF6130]" : "bg-[#F1F1F1]"
                }`}
              >
                {" "}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex items-end justify-end mt-10 lg:my-0 lg:mt-24  xl:mt-10">
          <p className="font-medium   flex-none max-w-[800px]  w-full text-md md:text-2xl  text-justify md:text-start">
            STEM Teacher Training is designed to empower educators with the
            skills to thoughtfully connect different subjects, so that the
            knowledge from each one complements and enriches the others,
            creating a well-rounded and meaningful learning experience for
            students.
          </p>
        </div>
      </Overview>
      <Expect />
      <Cta />
      <Waitlist />

      <WhyUs />
      <a
          href="#waitlist-form"
          className="border-none outline-none lg:hidden mt-10 bg-blue-normal text-white w-fit  mx-auto flex items-center gap-2 hover:gap-5 px-5 py-2 rounded-full transition-all"
        >
          Join the Waitlist <FaArrowRightLong size={20} />
        </a>

      <Enroll />
      <a
          href="#waitlist-form"
          className="border-none outline-none lg:hidden mt-10 mb-8 bg-blue-normal text-white w-fit  mx-auto flex items-center gap-2 hover:gap-5 px-5 py-2 rounded-full transition-all"
        >
          Join the Waitlist <FaArrowRightLong size={20} />
        </a>
      <section className="relative bg-[#DBEAFE] -z-10 py-20">
        <div className="w-full "></div>
        <div className="w-full font-semibold px-4 xl:max-w-[1200px] mx-auto min-h-screen  py-8 pb-8">
          <p className="text-6xl  text-start ">F.A.Qs</p>
          <p className="mt-10 text-2xl mb-2">General Information</p>
         
          <Splide
            options={{
              type: "loop",
              perPage: 1,
              autoplay: true,
              interval: 5000,
              arrows: false, // Disable navigation arrows
              pagination: true, // Enable pagination (dots below the carousel)
            }}
            className="mt-2"
          >
            {faqGroups.map((group, index) => (
              <SplideSlide key={index} className={""}>
        
                <div className="space-y-8">
                  {group.map((faq, i) => (
                    <div key={i} className="flex flex-col text-2xl font-medium">
                      <p className="flex gap-1"><span className="">{faq.id}.</span>{faq.question}</p>
                      <p className="text-lg">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </section>
    </>
  );
}
