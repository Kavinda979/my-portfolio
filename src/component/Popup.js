import React from 'react';

const Popup = ({ title, addDescription, downloadLink, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="mb-6 text-align: left">{addDescription}</p>
        <a
          href={downloadLink}
          download
          className="shiny-button relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-yellow-400 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-yellow-400 hover:shadow-yellow-400 hover:before:border-[25px] rounded"
        >
          Download
        </a>
        <button
          onClick={onClose}
          className="absolute top-0 right-0 mt-2 mr-2 text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Popup;
