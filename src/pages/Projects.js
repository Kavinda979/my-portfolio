import React, { useState } from "react";
import Popup from "../component/Popup";
import { TbBrandPython ,TbBrandReactNative,TbRobotFace} from "react-icons/tb";

function Projects() {
  const [isPopupOpen, setIsPopupOpen] = useState([false, false, false]);

  const openPopup = (index) => {
    setIsPopupOpen(isPopupOpen.map((open, i) => (i === index ? true : open)));
  };

  const closePopup = (index) => {
    setIsPopupOpen(isPopupOpen.map((open, i) => (i === index ? false : open)));
  };

  const projects = [
    {
      title: "Bubble Answer Sheets Marking Tool",
      description: "Python, OpenCV (cv2), NumPy, imutils.",
      addDescription:"This individual project showcases efficient data processing and result generation. Developed an automated system to grade bubble answer sheets, significantly reducing manual effort and increasing accuracy in counting marks. Utilized Python along with libraries such as OpenCV for image processing,NumPy for numerical operations, and imutils for image manipulation and contour detection.",
      icon: <TbBrandPython className="text-yellow-400 w-12 h-12 mx-auto mb-4" />,
      downloadLink: "/path/to/project1.zip",
    },
    {
      title: "Initiative Management and Tracking System",
      description: "React, Vite, Bootstrap, Tailwind CSS, Node.js, MongoDB.",
      addDescription:"Collaboratively developed a comprehensive Initiative Management and Tracking System, aimed at enhancing organizational efficiency, transparency, and decision-making. Leveraged React and Vite for building a fast and responsive user interface, and utilized Bootstrap and Tailwind CSS to ensure a modern and user-friendly design. Implemented server-side functionalities using Node.js, and managed data storage and retrieval with MongoDB. This system facilitates initiative planning, progress tracking, and performance assessment while promoting accountability, effective resource allocation, and informed decision-making.",
      icon: <TbBrandReactNative className="text-yellow-400 w-12 h-12 mx-auto mb-4" />,
      downloadLink: "/path/to/project2.zip",
    },
    {
      title: "Automated Pill Dispenser",
      description: "Arduino,Raspberry Pi",
      addDescription:"Developed a system that reminds users to take their medicine on time and automatically dispenses the correct dosage. Users can turn off the alarm using a sensor or a mobile phone interface, enhancing medication adherence and simplifying management.",
      icon: <TbRobotFace className="text-yellow-400 w-12 h-12 mx-auto mb-4" />,
      downloadLink: "/path/to/project3.zip",
    },
  ];



  return (
    <div className="h-max bg-gray-900 pl-40 pr-40 py-24 grid grid-rows-[auto,auto,1fr] gap-y-8">
      <div className="row-span-1">
        <div className="text-4xl font-bold flex items-center mb-4">
          <span className="text-white">My</span>
          <span className="text-yellow-400 ml-2">Projects</span>
        </div>
      </div>
      <div className="row-span-1">
        <div className="text-sm text-gray-500 text-justify w-96">
          Experienced in developing projects using Python, C, C++, Java, HTML,
          CSS, Tailwind CSS, TypeScript, and JavaScript.
        </div>
      </div>
      <div className="row-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-blue-950 p-6 rounded-lg shadow-lg text-center h-64 overflow-hidden"
          >
            <div>{project.icon}</div>
            <h2 className="text-lg font-bold mb-2 text-white">{project.title}</h2>
            <p className="mb-3 text-gray-500">{project.description}</p>
            <button
              onClick={() => openPopup(index)}
              className=" text-gray-500 py-2 px-4 rounded hover:text-white"
            >
              Read More
            </button>
            <Popup
              title={project.title}
              addDescription={project.addDescription}
              downloadLink={project.downloadLink}
              isOpen={isPopupOpen[index]}
              onClose={() => closePopup(index)}
            />
          </div>
    
        ))}
      </div>
    </div>
  );
}
export default Projects;
