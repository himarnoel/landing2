import React from "react";
import Cta from "../components/cta";
import Hero from "../components/hero";
import WhyUs from "../components/why-us";
import Expect from "../components/expect";
import Enroll from "../components/enroll";
import Waitlist from "../components/waitlist";
import Overview from "../components/overview";
import { engagements } from "../constants/config";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  mainHeroImage,
  microscopeIcon,
  smilyIcon,
  whiteImage,
} from "../constants/media";

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
        <div className="flex flex-1 flex-col gap-10 text-center md:text-left">
          <span className="text-blue-normal text-xl md:text-3xl">
            Welcome to STEM Teacher Training
          </span>

          <h2 className="text-xl md:text-8xl font-semibold">
            Transforming <br /> Classrooms for
            <br /> the Next Generation
          </h2>

          <div className="relative mx-auto md:w-4/5 z-10">
            <p className="z-50 text-sm md:text-base text-center md:p-4">
              This isn't your usual CPD, Oh No! <br />
              • It's a 360 degree transformative experience where you are
              equipped with the right strategies to seamlessly weave Science,
              Technology Engineering and maths into your lessons to create
              magical learning moments <br />• It a discovery journey into how
              to master the act of using real-life context to inspire children
              to problem solve, think critically and enjoy collaborating
            </p>
            <img
              src={whiteImage}
              alt=""
              className="w-full h-full absolute top-0 left-0 -z-10 hidden md:flex"
            />
          </div>

          <a
            href="#waitlist-form"
            className="border-none outline-none self-center bg-blue-normal text-white flex items-center gap-2 hover:gap-5 px-8 py-2 md:text-lg rounded-full transition-all"
          >
            Join the Waitlist <FaArrowRightLong size={20} />
          </a>
        </div>
      </Hero>
      <Overview>
        <div className="w-full relative rounded-[2em] bg-white shadow-md gap-10 flex flex-col p-10">
          <img
            src={microscopeIcon}
            alt=""
            className="h-20 absolute left-3/4 md:left-1/5 -top-6 md:top-auto md:bottom-0 translate-y-1/2"
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
              <input
                key={id}
                type="radio"
                checked={id === index}
                onChange={() => setIndex(id)}
              />
            ))}
          </div>
        </div>

        <p className="font-bold mt-10 md:pl-20 flex-none w-full text-md md:text-2xl text-gray-700 text-justify md:text-center">
          STEM Teacher Training is designed to empower educators with the skills
          to thoughtfully connect different subjects, so that the knowledge from
          each one complements and enriches the others, creating a well-rounded
          and meaningful learning experience for students.
        </p>
      </Overview>
      <Expect />
      <Cta />
      <Waitlist />
      
      <WhyUs />
      <section className="relative bg-[#FBCD78] my-20">
        <div className="w-full "></div>
        <div className="w-full font-semibold max-w-[1000px] mx-auto min-h-screen  py-20">
          <p className="text-start font-bold  xl:text-center text-2xl ">
            Kidpreneur Bootcamp: equipping young minds to explore, create, and
            grow into the leaders of tomorrow.
          </p>
          <p className="text-6xl mt-14 text-center ">F.A.Qs</p>
          <div className="flex flex-col mt-10 text-2xl font-medium">
            <p className="">1.Q: What is the AI training about?</p>
            <p className=" ">
              A: The training introduces kids to the basics of artificial intelligence, how it works, and how AI is used in creative fields such as design, art, and storytelling. It’s designed to be fun and interactive!
            </p>
          </div>
          <div className="flex flex-col mt-10 text-2xl font-medium">
            <p className="">2.Q: Who can join the training?</p>
            <p className=" ">
              A: The training is open to kids aged 10 to 16 who are curious about technology and AI. No prior experience is needed, just an interest in learning and exploring AI.
            </p>
          </div>{" "}
          <div className="flex flex-col mt-10 text-2xl font-medium">
            <p className="">3.Q:How much does the training cost?</p>
            <p className=" ">
              A:The fee for the 2-day virtual training is N5,000.
            </p>
          </div>{" "}
          <div className="flex flex-col mt-10 text-2xl font-medium">
            <p className="">
              4.Q:What will the kids learn during the training?
            </p>
            <p className=" ">
              A: Participants will learn about AI concepts, how AI is used in creative fields, hands-on activities related to AI, and how to create basic AI projects. They'll also explore AI tools and technologies used by professionals.
            </p>
          </div>
          <div className="flex flex-col mt-10 text-2xl font-medium">
            <p className="">5.Q: Is the training virtual or in person?</p>
            <p className=" ">
              A: The training will be conducted virtually over two days, allowing kids to join from the comfort of their home.
            </p>
          </div>
          <div className="flex flex-col mt-10 text-2xl font-medium">
            <p className="">6.Q: What time will the training start and end?</p>
            <p className=" ">
              A: The training starts at 10:00 AM and ends at 11:30 AM each day.
            </p>
          </div>
          <div className="flex flex-col mt-10 text-2xl font-medium">
            <p className="">
              7.Q: Do I need any special equipment or software for the training?
            </p>
            <p className=" ">
              A: Kids will need a computer or tablet with an internet connection. Most of the tools we use are web-based, so no special software is required.
            </p>
          </div>
          <div className="flex flex-col mt-10 text-2xl font-medium">
            <p className="">8.Q: Will there be any assignments or homework?</p>
            <p className=" ">
              A: Yes, there will be a few fun activities and projects to reinforce the learning. However, these will be light and designed to engage kids, not overwhelm them.
            </p>
          </div>
          <div className="flex flex-col mt-10 text-2xl font-medium">
            <p className="">
              9.Q: Will I receive a certificate after completing the training?
            </p>
            <p className=" ">
              A:No, there will be no certificate of completion for this training.
            </p>
          </div>
          <div className="flex flex-col mt-10 text-2xl font-medium">
            <p className="">10.Q: How do I register for the training?</p>
            <p className=" ">
              A: Registration and payment can be done by clicking on the registration icon and filling out the required details.
            </p>
          </div>
        </div>
      </section>
      <Enroll />
    </>
  );
}
