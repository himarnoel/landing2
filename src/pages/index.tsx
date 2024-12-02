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
import { mainHeroImage, microscopeIcon, smilyIcon, whiteImage } from "../constants/media";

export default function Page() {
    const [index, setIndex] = React.useState(0);
    React.useEffect(() => {
        let interval = setInterval(() => setIndex(prev => (prev + 1) % engagements.length), 5000);
        return () => clearInterval(interval);
    }, []);

    return <>
        <Hero image={mainHeroImage}>
            <div className="flex flex-1 flex-col gap-10 text-center md:text-left">
                <span className="text-blue-normal text-xl md:text-3xl">
                    Welcome to STEM Teacher Training
                </span>

                <h2 className="text-xl md:text-8xl font-semibold">
                    Transforming <br /> Classrooms for<br /> the Next Generation
                </h2>

                <div className="relative mx-auto md:w-4/5 z-10">
                    <p className="z-50 text-sm md:text-base text-center md:p-4">This isn't your usual CPD, Oh No! <br />
                        • It's a 360 degree transformative experience where you are equipped with the right strategies to seamlessly
                        weave Science, Technology Engineering and maths into your lessons  to create magical learning moments <br />
                        • It a discovery journey into how to master the act of using real-life context to inspire children to problem solve,
                        think critically and enjoy collaborating
                    </p>
                    <img src={whiteImage} alt="" className="w-full h-full absolute top-0 left-0 -z-10 hidden md:flex" />
                </div>

                <a href="#waitlist-form" className="border-none outline-none self-center bg-blue-normal text-white flex items-center gap-2 hover:gap-5 px-8 py-2 md:text-lg rounded-full transition-all">
                    Join the Waitlist <FaArrowRightLong size={20} />
                </a>
            </div>
        </Hero>
        <Overview>
            <div className="w-full relative rounded-[2em] bg-white shadow-md gap-10 flex flex-col p-10">
                <img src={microscopeIcon} alt="" className="h-20 absolute left-3/4 md:left-1/5 -top-6 md:top-auto md:bottom-0 translate-y-1/2" />
                <img src={smilyIcon} alt="" className="absolute -bottom-4 md:bottom-auto md:top-10 right-0 md:right-10 h-10 md:h-20" />

                <h2 className="text-2xl md:text-5xl capitalize px-10 text-center md:text-left">imagine this</h2>

                <div className="md:w-4/5 mx-auto flex overflow-hidden items-center justify-start">
                    {engagements.map(item => (
                        <p key={item.content} style={{ transform: `translateX(-${index * 100}%)` }} className="flex-none w-full text-md md:text-2xl transition-all duration-700 text-justify md:text-center">
                            {item.content}
                        </p>
                    ))}
                </div>

                <div className="flex gap-2 items-center justify-center">
                    {engagements.map((_, id) => (
                        <input key={id} type="radio" checked={id === index} onChange={() => setIndex(id)} />
                    ))}
                </div>

            </div>

            <p className="font-bold mt-10 md:pl-20 flex-none w-full text-md md:text-2xl text-gray-700 text-justify md:text-center">
                STEM Teacher Training is designed to empower educators with the skills to thoughtfully connect different
                subjects, so that the knowledge from each one complements and enriches the others, creating a
                well-rounded and meaningful learning experience for students.
            </p>
        </Overview>
        <Expect />
        <Cta />
        <Waitlist />
        <WhyUs />
        <Enroll />
    </>;
}
