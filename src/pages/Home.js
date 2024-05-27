import React from "react";
import Navbar from "../component/Navbar";
import Downloadcvbutton from "../component/Downloadcvbutton";
import my1 from "./photos/my3.jpg";

function Aboutme() {
  return (
    <div className="flex-col">
      <div className="h-max bg-gray-900 pl-40 pr-40 py-24 grid grid-cols-2 gap-4">
        <div className="grid grid-row-4">
          <div className="text-base text-yellow-400 pt-14">Hello, Welcome</div>
          <div className="text-2xl text-white font-Pacifico pt-5">
            I m Kavinda Karunanayaka
          </div>
          <div className="text-sm text-gray-500 text-justify w-96 pb-2">
            My knowledge base in the field of statistics, computer science and
            mathematics My unwavering drive and excitement to learn new things
            makes my greatest strengths, and I am confident in my ability to
            make a positive impact in any challenge that comes my way.
          </div>
          <div className="pb-16">
            <Downloadcvbutton />
          </div>
        </div>
        <div className="pl- -2">
          <img
            src={my1}
            alt="Kavinda Karunanayaka"
            className="w-96 h-96 rounded-xl opacity-75 border border-transparent shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
