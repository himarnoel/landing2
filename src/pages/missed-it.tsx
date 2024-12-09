import React from "react";
import Hero from "../components/hero";
import Overview from "../components/overview";
import { missedHeroImage, microscopeIcon } from "../constants/media";
import Header from "../components/header";
import { logoIcon } from "../constants/media";
import { socialMediaLinks } from "../constants/config";

export default function Page() {
  return (
    <>
     <div className="w-full ">
     <Header />
      <div className="flex items-center justify-between w-full lg:flex-row flex-col px-spacing-small md:px-spacing-normal md:mt-32 lg:mt-20 xl:mt-32 mt-8">
        <div className="flex  flex-col gap-10 max-w-[400px] xl:max-w-[500px] w-full">
          <h2 className="text-4xl font-medium md:text-6xl">
            Oops... You Just <br /> Missed It
          </h2>

          <p className="z-50 md:text-2xl text-justify md:text-left font-medium">
            Our recent STEM Teacher Training course was a game-changer for
            educators, offering practical tools to bring Science, Technology,
            Engineering, and Math to life in the classroom. And if you missed
            it? Well, your students missed out, too.
            <br />
            <br />
            <br />
            But there's good news ---- we're giving you another chance to be
            part of this transformative experience
          </p>
        </div>
        <img
          src={missedHeroImage}
          className="w-[50rem] md:w-[89rem] lg:w-[40rem]  xl:w-[45rem] -z-10 object-contain lg:absolute right-0 xl:right-[4rem] m"
        />
      </div>

     
      <section
        id="overviews"
        className="w-full flex flex-col -mt-7 lg:mt-[4rem] xl:mt-[8.9rem] lg:my-20 items-center justify-center px-spacing-small md:px-spacing-normal p-4 rounded-xl relative  h-[24rem] before:md:max-h-max before:h-[20rem] before:lg:h-[30rem] before:rounded-full before:block before:absolute before:left-0 before:lg:mt-[18rem] before:mt-[16rem] before:lg:-ml-64 before:-translate-x-1/2 before:md:translate-x-0 before:-translate-y-20 before:aspect-square before:bg-red-500 before:-z-10 "
      >
        <div className="w-full rounded-[2em] bg-white px-8 lg:px-10 xl:px-4 shadow-md gap-10 pt-8 flex flex-col items-center h-[32rem] p-4 relative">
          <header className="w-full flex flex-col items-center">
            <h2 className="text-center font-medium text-xl md:text-3xl lg:text-4xl text-blue-normal">
              Here's what educators loved about the last session:
            </h2>
          </header>

          <ul className="list-disc flex text-sm flex-col items-center lg:text-xl xl:text-2xl space-y-3 font-medium">
            <li>
              Creating interdisciplinary, hands-on lessons that make STEM
              relevantand engaging for every student
            </li>
            <li>
              Discovering how to make learning meaningful through real-world
              problem-solving
            </li>
            <li>
              Building an inquiry-based classroom culture that promotes critical
              thinking and collaboration
            </li>
          </ul>

          <img
            src={microscopeIcon}
            alt=""
            className="w-14 lg:w-28 absolute object-contain bottom-0 right-10 translate-y-1/2"
          />
        </div>
      </section>

      <section className="w-full flex gap-10 flex-col py-10 mt-24 lg:mt-32 pl-spacing-normal px-spacing-small md:pl-spacing-x-large md:px-spacing-normal">
        <header className="w-full flex flex-col items-center">
          <h3 className="text-center text-2xl font-medium md:text-3xl xl:text-4xl text-blue-normal">
            Here's how to prepare for the course:
          </h3>
        </header>

        <ul className="list-disc flex flex-col items-center text-xl xl:text-2xl  space-y-4 font-medium">
          <li>
            A classroom filled with students eager to explore, learn, and grow
          </li>
          <li>
            Lessons that connect multiple subjects, helping students see how
            STEM impacts their daily lives
          </li>
          <li>
            A confident, STEM-savvy teacher (that's you!) equipped with skills
            to inspire the next generation
          </li>
        </ul>
      </section>
      <footer className="w-full pb-4  md:pb-4  p-spacing-normal md:p-spacing-small flex flex-col items-center md:items-start gap-10">
      <div className="w-full h-1 bg-blue-normal rounded-full " />

      <img
        alt=""
        src={logoIcon}
        loading="lazy"
        className="w-40 object-contain"
      />

      <div className="w-full flex gap-4 flex-wrap items-center justify-center md:justify-between">
        <nav className="flex items-center justify-start gap-4 text-blue-normal">
          {socialMediaLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <item.icon size={20} />
            </a>
          ))}
        </nav>

        <a
          href={`https://waakicreative.com/`}
          target="_blank"
          className="pr-2 first-letter:capitalize text-[#656CE8] font-medium"
        >
          website designed by Waaki creative
        </a>
      </div>
    </footer>
      
     </div>
    </>
  );
}
