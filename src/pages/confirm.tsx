import React from "react";
import Hero from "../components/hero";
import Overview from "../components/overview";
import { thankHeroImage, microscopeIcon } from "../constants/media";

export default function Page() {
    return <>
        <Hero image={thankHeroImage}>
            <div className="flex flex-1 flex-col gap-10 text-center md:text-left">
                <div className="relative mx-auto md:w-4/5 z-10 gap-4 flex flex-col">
                    <h2 className="text-xl md:text-6xl">
                        Thank You for Joining <br /> STEM Teacher Training
                    </h2>

                    <p className="z-50 md:text-2xl text-justify md:text-left">
                        You've just taken an incredible step toward transforming your classroom,
                        and we're thrilled to have you in our STEM Teacher Training community!
                    </p>
                </div>

                <div className="relative mx-auto md:w-4/5 z-10 gap-4 flex flex-col">
                    <span className="text-green-normal text-xl md:text-4xl">
                        What's Next?
                    </span>

                    <p className="z-50 md:text-2xl text-justify md:text-left">
                        We'll be sending a confirmation email shortly with everything you need to get started.
                        Be sure to check your inbox (and double-check your spam folder, just in case!).
                    </p>
                </div>
            </div>
        </Hero>
        <Overview>
            <div className="w-full relative rounded-[2em] bg-white shadow-md gap-10 flex flex-col items-center py-10 p-4">
                <header className="w-full flex flex-col items-center">
                    <h2 className="text-center text-xl md:text-4xl text-blue-normal">Get Ready to Transform Your Classroom</h2>
                    <h3 className="text-center text-xl md:text-3xl text-blue-normal">Here's how to prepare for the course:</h3>
                </header>

                <ul className="list-disc flex flex-col items-center text-lg">
                    <li>
                        Look out for our exclusive STEM Starter Kit in your email! It's packed with introductory activities and resources to help you get started with STEM right away.
                    </li>
                    <li>
                        Follow us on social media to join a community of like-minded educators, stay up-to-date on new resources, and share your journey with others!
                    </li>
                </ul>

                <img src={microscopeIcon} alt="" className="h-20 absolute right-1/4 top-4" />
            </div>
        </Overview>

        <section className="w-full flex gap-10 flex-col py-10 pl-spacing-normal px-spacing-small md:pl-spacing-x-large md:px-spacing-normal">
            <h2 className="text-3xl md:text-6xl font-bold capitalize">stay tuned</h2>
            <div className="w-full flex flex-col text-lg md:text-2xl gap-4 text-justify md:text-left">
                <p className="">
                    We'll be in touch soon with more details to make sure you're prepared to bring real-world STEM learning into your classroom.
                    If you have questions in the meantime, don't hesitate to reach out—we're here to support you every step of the way.
                </p>

                <p className="">
                    Get ready to empower your students, ignite curiosity, and bring learning to life—the future of your classroom starts now!
                </p>
            </div>
        </section>
    </>;
}
