import React from "react";

function Downloadcvbutton() {
  return (
    <div>
      <button class="shiny-button relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-yellow-400 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-yellow-400 hover:shadow-yellow-400 hover:before:border-[25px] rounded">
        <svg
          class="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        <span>Download cv</span>
      </button>
    </div>
  );
}

export default Downloadcvbutton;
