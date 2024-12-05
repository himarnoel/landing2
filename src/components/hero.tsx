import React from "react";

export default function Hero(props: React.PropsWithChildren<{ image: string }>) {
    return <section id="banner" className="py-10 flex relative flex-wrap gap-10 md:gap-0  px-spacing-small md:px-spacing-normal">
        <div className="basis-80 flex-1">
            {props.children}
        </div>

        <div className="lg:right-32 lg:absolute -z-0 flex-1 md:flex-none basis-60 flex items-end justify-center">
            <img src={props.image} className="h-full w-[35em] lg:w-[45rem] xl:w-[55rem] z-10 object-contain"/>
        </div>
    </section>
}
