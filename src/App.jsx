import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-[#EDF5FE] w-full min-h-screen">
        <div className="w-full flex justify-between  items-start px-8">
          <img src="logo.png" alt="" className="mt-4"  />
          <div className="h-[22rem] w-[22rem]  rounded-full bg-[#7BD2E7] -mt-52"></div>
        </div>
        <div className=" h-screen flex  mt-10 justify-between w-full  relative max-w-[1024px] mx-auto ">
          <div className="flex flex-col ">
            <p className="text-[#4550E4] font-medium text-2xl">
              Welcome to STEM Teacher Training
            </p>
            <p className="text-[4.6rem] mt-4 leading-[1.2] font-medium">Transforming <br /> Classrooms  for the <br /> Next Generation</p>
          </div>
          <img
            src="side.png"
            alt=""
            className="absolute w-[32rem] block  right-0 top-0"
          />
        </div>
        <div className="mt-10 flex items-center px-10 max-w-[1024px] mx-auto ">
          sdfsd
        </div>
      </div>
    </>
  );
}

export default App;
