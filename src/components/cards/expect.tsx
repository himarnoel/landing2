import React from "react";

export default function ExpectCard(props: { item: { id: number, content: string } }) {
    console.log(props);

    return <div data-name="expect" className="flex text-lg rounded-xl text-white p-6 items-center justify-center">
        {props.item.content}
    </div>
}