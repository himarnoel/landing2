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
          <img src="logo.png" alt="" className="mt-4" />
          <div className="h-[20rem] w-[20rem]  rounded-full bg-[#7BD2E7] -mt-52"></div>
        </div>
        <div className="mt-10 flex items-center justify-between w-full px-64 relative">
          <p className="text-xl text-[#4550E4]">
            Welcome to STEM Teacher Training
          </p>
          <img src="side.png" alt="" className="w-32" />
        </div>
      </div>
    </>
  );
}

export default App;
