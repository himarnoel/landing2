import React from "react";
import Hero from "../components/hero";
import Overview from "../components/overview";
import { missedHeroImage, microscopeIcon } from "../constants/media";

export default function Page() {
  return (
    <>
      <Hero image={missedHeroImage}>
        <div className="flex flex-1 flex-col gap-10 text-center md:text-left">
          <div className="relative mx-auto md:w-4/5 z-10 gap-4 flex flex-col">
            <h2 className="text-xl md:text-6xl">
              Oops... You Just <br /> Missed It
            </h2>

            <p className="z-50 md:text-2xl text-justify md:text-left">
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
        </div>
      </Hero>
      <Overview>
        <div className="w-full rounded-[2em] bg-white shadow-md gap-10 flex flex-col items-center py-20 p-4 relative">
          <header className="w-full flex flex-col items-center">
            <h2 className="text-center font-bold text-xl md:text-4xl text-blue-normal">
              Here's what educators loved about the last session:
            </h2>
          </header>

          <ul className="list-disc flex flex-col items-center text-lg">
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
            className="h-20 absolute bottom-0 right-10 translate-y-1/2"
          />
        </div>
      </Overview>

      <section className="w-full flex gap-10 flex-col py-10 pl-spacing-normal px-spacing-small md:pl-spacing-x-large md:px-spacing-normal">
        <header className="w-full flex flex-col items-center">
          <h3 className="text-center text-xl md:text-3xl text-blue-normal">
            Here's how to prepare for the course:
          </h3>
        </header>

        <ul className="list-disc flex flex-col items-center text-xl">
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
    </>
  );
}
