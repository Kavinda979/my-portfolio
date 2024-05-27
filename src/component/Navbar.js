import React from "react";

function Navbar() {
  return (
    <div>
      <header className="h-12 max-w-full  pl-40 pr-48 bg-blue-950 flex flex-wrap items-center py-0 shadow-md">
        <div className="flex-1 flex justify-between items-center font-Roboto">
          <a href="#" className="text-md  text-yellow-400">
            KAVINDA
          </a>
        </div>
        <div
          className="hidden md:flex md:items-center md:w-auto w-full"
          id="menu"
        >
          <nav>
            <ul className="md:flex items-center justify-between text-sm text-slate-100 pt-4 md:pt-0 font-serif">
              <li>
                <a className="md:p-4 py-3 px-0 block hover:text-yellow-400" href="#">
                  HOME
                </a>
              </li>
              <li>
                <a className="md:p-4 py-3 px-0 block hover:text-yellow-400" href="#">
                  ABOUT
                </a>
              </li>
              <li>
                <a className="md:p-4 py-3 px-0 block hover:text-yellow-400" href="#">
                  PROJECTS
                </a>
              </li>
              <li>
                <a className="md:p-4 py-3 px-0 block hover:text-yellow-400" href="#">
                  PORTFOLIO
                </a>
              </li>
              <li>
                <a className="md:p-4 py-3 px-0 block md:mb-0 mb-2 hover:text-yellow-400" href="#">
                  CONTACTS
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
