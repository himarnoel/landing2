import React from "react";

export default function Overview(properties: React.PropsWithChildren) {
    return <section id="overviews" className="w-full flex flex-col gap- my-20 items-center justify-center px-spacing-small md:px-spacing-normal p-4 rounded-xl relative  h-[24rem] before:md:max-h-max before:h-full before:rounded-full before:block before:absolute before:left-0 before:-translate-x-1/2 before:md:translate-x-0 before:-translate-y-20 before:aspect-square before:bg-red-500 before:-z-10 ">
        {properties.children}
    </section>
}
