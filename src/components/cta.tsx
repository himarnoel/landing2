import React from "react";
import { ctsa } from "../constants/config";

export default function Cta() {
    const [index, setIndex] = React.useState(0);
    const current = React.useMemo(() => ctsa[index], [index, ctsa]);

    React.useEffect(() => {
        let interval = setInterval(() => setIndex(prev => (prev + 1) % ctsa.length), 5000);
        return () => clearInterval(interval);
    }, []);

    return <section id="cta" className="py-10 px-spacing-small md:px-spacing-x-large flex flex-col items-center gap-10">
        <h2 className="text-2xl text-center font-bold md:text-5xl">
            The STEM Teacher training course is Ideal for
        </h2>

        <div className="w-full flex flex-wrap rounded-3xl bg-gray-normal overflow-hidden">
            <img src={current.image} alt="" className="flex-1 basis-80 object-contain rounded-t-3x md:rounded-l-3x" />
            <div className={`flex flex-1 basis-80 items-center justify-center p-10 duration-500 rounded-b-3x md:rounded-r-3x transition-all ${current.className}`}>
                <p className="text-white text-justify text-lg md:text-4xl">{current.content}</p>
            </div>
        </div>

        <p className="text-justify md:text-2xl md:text-center">
            Whether you're a science teacher, a math teacher, or a general classroom educator, 
            this course will give you the tools to elevate your teaching and engage students in powerful, real-world learning.
        </p>
    </section>;
}
