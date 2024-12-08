import React from "react";
import { ctsa } from "../constants/config";

export default function Cta() {
  const [index, setIndex] = React.useState(0);
  const current = React.useMemo(() => ctsa[index], [index, ctsa]);

  React.useEffect(() => {
    let interval = setInterval(
      () => setIndex((prev) => (prev + 1) % ctsa.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="cta"
      className="py-10 px-spacing-small md:px-spacing-x-large flex flex-col items-center gap-10"
    >
      <h2 className="lg:text-2xl xl:text-4xl text-center font-medium  md:text-5xl lg:mt-14 xl:mt-10">
        The STEM Teacher training course is Ideal for
      </h2>

      <div className="w-full flex  !rounded-3xl bg-gray-normal overflow-hidden lg:h-[18rem] xl:lg:h-[28rem]">
        <img
          src={current.image}
          alt=""
          className=" w-1/2 object-cover !rounded-t-3x md:!rounded-l-3xl"
        />
        <div
          className={`flex flex-1 bassis-80 items-center justify-center p-10 duration-500 !rounded-b-3x md:!rounded-r-3xl transition-all ${
            current.className
          }  ${current.id == 1 ? "!bg-[#7BD2E7]" : ""}`}
        >
          <p
            className={`${
              current.id == 1 ? "text-black" : "text-white"
            } text-start text-lg md:text-4xl lg:text-3xl xl:text-start xl:text-4xl leading-[2.5rem]`}
          >
            {current.content}
          </p>
        </div>
      </div>

      <p className="text-justify md:text-2xl md:text-center">
        Whether you're a science teacher, a math teacher, or a general classroom
        educator, this course will give you the tools to elevate your teaching
        and engage students in powerful, real-world learning.
      </p>
    </section>
  );
}
