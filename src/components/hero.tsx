import React from "react";

export default function Hero(props: React.PropsWithChildren<{ image: string }>) {
    return <section id="banner" className="py-10  w-full md:h-[108rem] lg:h-fit flex flex-col  relative  gap-10 md:gap-0  px-spacing-small lg:px-spacing-normal">
        <div className="basis-80 flex-1">
            {props.children}
        </div>

        <div className=" right-0 xl:right-10 md:absolute bottom-0 lg:mt-20  xl:64  -z-0 flex-1 md:flex-none basis-60 flex items-end justify-center">
            {/* <div className="h-4/5 aspect-[4/6] absolute rounded-[4em] -z-10 bg-pink-normal"/> */}
            <img src={props.image} className="h-full md:w-[82rem] lg:w-[40rem] xl:w-[44rem] z-10 object-contain"/>
        </div>
    </section>
}
