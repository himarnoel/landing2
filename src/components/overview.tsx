import React from "react";

export default function Overview(properties: React.PropsWithChildren) {
    return <section id="overview" className="w-full flex flex-col gap-5 items-center justify-center px-spacing-small md:px-spacing-normal p-4 rounded-xl relative before:max-h-96 before:md:max-h-max before:h-full before:rounded-full before:block before:absolute before:left-0 before:-translate-x-1/2 before:md:translate-x-0 before:-translate-y-8 before:aspect-square before:bg-red-500 before:-z-10">
        {properties.children}
    </section>
}
