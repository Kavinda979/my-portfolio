import React from "react";
import my4 from "./photos/my4.jpg";

function About() {
  return (
    <div className="h-max bg-blue-950  pl-40 pr-40 py-24 grid grid-cols-2 gap-4">
      <div className="relative">
        <div className="pt-14">
          <div className="w-80 h-80 bg-yellow-400 p-4 m-4 rounded-lg">
            <div className="w-72 h-72 inset-0 rounded-lg bg-blue-950"></div>
          </div>
        </div>
        <img
          src={my4}
          alt="Kavinda Karunanayaka"
          className="w-80 h-80 rounded-xl absolute left-[2.5rem] top-52 transform -translate-y-1/2"
        />
      </div>
      <div>
        <div className="grid grid-row-4">
          <div className="text-4xl font-bold flex items-center mb-4">
            <span className="text-white">About</span>
            <span className="text-yellow-400 ml-2">Me</span>
          </div>
          <div className="text-white">
            <h3 className="text-1xl font-semibold mb-1 text-yellow-400">
              EDUCATION
            </h3>
            <p className="mb-0">
              BSc. Majoring in Computer Science, Statistic, Mathematics
            </p>
            <p className="mb-3 font-thin  text-gray-500">
              University of Peradeniya 2020 - 2024
            </p>
            <p className="mb-0">Department of Technical Education & Training</p>
            <p className="mb-3 font-thin  text-gray-500">
              Advancing Career Skill NVQ Level 4 2019 -2020
            </p>
            <p className="mb-0">Secondary Education</p>
            <p className="font-thin mb-4  text-gray-500">
              Dudley Senanayake Central College Tholangamuwa 2008 - 2016
            </p>
          </div>
          <div>
            <h3 className="text-1xl font-semibold mb-1 text-yellow-400">SOFT SKILLS</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white text-blue-950 py-1 px-3 rounded-full">
                Leadership
              </span>
              <span className="bg-white text-blue-950 py-1 px-3 rounded-full">
                Problem Solving
              </span>
              <span className="bg-white text-blue-950 py-1 px-3 rounded-full">
                Critical Thinking
              </span>
              <span className="bg-white text-blue-950 py-1 px-3 rounded-full">
                Creativity
              </span>
              <span className="bg-white text-blue-950 py-1 px-3 rounded-full">
                Fast Learner
              </span>
              <span className="bg-white text-blue-950 py-1 px-3 rounded-full">
                Time Management
              </span>
              <span className="bg-white text-blue-950 py-1 px-3 rounded-full">
                Active Listening
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
