import React from "react";
import Hero from "../components/hero";
import Overview from "../components/overview";
import { thankHeroImage, microscopeIcon } from "../constants/media";
import Header from "../components/header";
import Footer from "../components/footer";
import { logoIcon } from "../constants/media";
import { socialMediaLinks } from "../constants/config";

export default function Page() {
  return (
    <>
      <Header />

      <div className="flex lg:flex-row flex-col items-center justify-between px-spacing-small md:px-spacing-normal mt-20">
      <div className="flex  flex-col text-center items-center lg:items-start gap-10 lg:max-w-[450px] xl:max-w-[700px] w-full">
          <div className=" z-10 gap-4 flex flex-col text-center lg:text-start">
            <h2 className="text-3xl font-medium md:text-6xl lg:text-3xl xl:text-6xl">
              Thank You for Joining <br /> STEM Teacher Training
            </h2>

            <p className="z-50 md:text-2xl text-center   lg:text-start  font-medium">
              You've just taken an incredible step toward transforming your
              classroom, and we're thrilled to have you in our STEM Teacher
              Training community!
            </p>
          </div>

          <div className=" z-10 gap-1 md:gap-4 flex flex-col">
            <span className="text-green-normal lg:text-start font-medium text-2xl md:text-4xl">
              What's Next?
            </span>

            <p className="z-50 md:text-2xl  lg:text-start   font-medium">
              We'll be sending a confirmation email shortly with everything you
              need to get started. Be sure to check your inbox (and double-check
              your spam folder, just in case!).
            </p>
          </div>
        </div>
        <img
          src={thankHeroImage}
          className="h-full md:w-[82rem] lg:w-[40rem]  xl:w-[38rem] -z-10 object-contain  lg:absolute right-0 xl:right-[4rem] lg:mt-10"
        />
      </div>

      <section
        id="overviews"
        className="w-full flex flex-col gap- mt-[4rem] lg:mt-[1rem] xl:mt-[6rem] items-center justify-center px-spacing-small md:px-spacing-normal p-4 rounded-xl relative  h-[24rem] before:md:max-h-max before:h-[28rem] before:md:h-[30rem] before:rounded-full before:block before:absolute before:left-0 before:lg:mt-[18rem]  before:mt-[19rem] before:lg:-ml-64 before:-translate-x-1/2 before:md:translate-x-0 before:-translate-y-20 before:aspect-square before:bg-red-500 before:-z-10 "
      >
        <div className="w-full relative rounded-[2em] px-10 bg-white shadow-md gap-10 xl:gap-2 lex flex-col items-center py-10 p-4">
          <header className="w-full flex flex-col items-center">
            <h2 className="text-center  text-xl md:text-4xl xl:text-5xl text-blue-normal">
              Get Ready to Transform Your Classroom
            </h2>
            <h3 className="text-center text-xl md:text-3xl text-blue-normal font-medium">
              Here's how to prepare for the course:
            </h3>
          </header>

          <ul className="list-disc flex flex-col  text-xl mt-10 font-medium">
            <li>
              Look out for our exclusive STEM Starter Kit in your email! It's
              packed with introductory activities and resources to help you get
              started with STEM right away.
            </li>
            <li>
              Follow us on social media to join a community of like-minded
              educators, stay up-to-date on new resources, and share your
              journey with others!
            </li>
          </ul>

          <img
            src={microscopeIcon}
            alt=""
            className="w-14 lg:w-14 object-contain absolute md:right-10  md:top-4"
          />
        </div>{" "}
      </section>

      <section className="w-full flex gap-10 flex-col  pl-spacing-normal px-spacing-small md:pl-spacing-x-large md:px-spacing-normal  mt-[12rem] md:mt-14">
        <h2 className="text-5xl md:text-6xl font-medium capitalize">
          stay tuned!
        </h2>
        <div className="w-full flex flex-col font-medium text-lg md:text-2xl gap-4 text-justify md:text-left">
          <p className="">
            We'll be in touch soon with more details to make sure you're
            prepared to bring real-world STEM learning into your classroom. If
            you have questions in the meantime, don't hesitate to reach
            out—we're here to support you every step of the way.
          </p>

          <p className="">
            Get ready to empower your students, ignite curiosity, and bring lea
            rning to life—the future of your classroom starts now!
          </p>
        </div>
      </section>
      <footer className="w-full pb-4  md:pb-4  p-spacing-normal md:p-spacing-small flex flex-col items-center md:items-start gap-10">
      <div className="w-full h-2 bg-blue-normal  " />

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
          className="pr-2 first-letter:capitalize text-[#1D29DE] font-medium"
        >
          website designed by Waaki creative
        </a>
      </div>
    </footer>
    </>
  );
}
