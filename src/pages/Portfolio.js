import React, { useState } from "react";

import wrestling from "./photos/wrestling.jpg";
import iot2 from "./photos/IOT2.jpg";
import baseball from "./photos/baseball.jpg";
import robarosiya from "./photos/robarosiya.jpg";
import stat2 from "./photos/stat2.jpg";
import stat from "./photos/stat.jpg";
import sciReporter from "./photos/scieReporter.jpg";


function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="h-max bg-blue-950 px-40 py-24">
      <div className="flex flex-col items-center mb-8">
        <div className="text-4xl font-bold flex items-center mb-4">
          <span className="text-white">My</span>
          <span className="text-yellow-400 ml-2">Portfolio</span>
        </div>
        <p className="text-gray-500 text-center text-sm px-72">
          I thrive on learning and growing through various extracurricular
          activities. From leadership roles in clubs to creative pursuits in the
          arts, I've developed key skills like teamwork, time management, and
          effective communication. Explore my journey and see how these
          experiences shape who I am today!
        </p>
      </div>
      <div className="columns-2 sm:columns-5 lg:columns-3 gap-2 h-screen overflow-x-scroll custom-scrollbar  ">
        {[wrestling,iot2, baseball,sciReporter,robarosiya,stat,stat2].map((src, index) => (
          <div key={index} className="mb-2 break-inside-avoid">
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-auto rounded cursor-pointer"
              onClick={() => openModal(src)}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center mb-8  ">
          <div className="relative rounded shadow-lg max-w-4xl max-h-full ">
            <img
              src={selectedImage}
              alt="Selected"
              className="h-screen w-auto"
            />
            <button
              className="absolute top-2 right-2 text-yellow-400 text-3xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
