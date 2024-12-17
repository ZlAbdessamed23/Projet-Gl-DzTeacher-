import React from "react";
import logo from "../../assets/logo.png";

const Header: React.FC = () => {
  return (
    <header className="bg-main-color font-poppins relative z-30 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex">
          <img src={logo} alt="Logo" className="h-8 w-8" />{" "}
          {/* Adjust height and width as needed */}{" "}
          <div className="text-xl text-[#77E0DF]">Dz Teacher</div>
        </div>
        {/* Navigation Buttons with Dropdown Menus */}
        <nav>
          <ul className="flex space-x-16 text-xl text-nowrap">
            <li className="relative group">
              <button className="flex items-center hover:text-gray-300">
                Primaire{" "}
                <span className="ml-2 text-2xl font-mono transform rotate-90">
                  &gt;
                </span>
              </button>
              <ul className="absolute left-0 mt-2 hidden group-hover:block text-main-color shadow-md">
                <li className="p-2 hover:bg-gray-200 bg-secondary-color font-light">
                  <a href="#primaire-1">Primaire 1</a>
                </li>
                <li className="p-2 hover:bg-gray-200 bg-secondary-color font-light">
                  <a href="#primaire-2">Primaire 2</a>
                </li>
                <li className="p-2 hover:bg-gray-200 bg-secondary-color font-light">
                  <a href="#primaire-1">Primaire 3</a>
                </li>
                <li className="p-2 hover:bg-gray-200 bg-secondary-color font-light">
                  <a href="#primaire-2">Primaire 4</a>
                </li>
                <li className="p-2 hover:bg-gray-200 bg-secondary-color font-light">
                  <a href="#primaire-2">Primaire 5</a>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <button className="flex items-center hover:text-gray-300">
                Collège
                <span className="ml-2 text-2xl font-mono transform rotate-90">
                  &gt;
                </span>
              </button>
              <ul className="absolute left-0 mt-2 hidden group-hover:block text-main-color shadow-md">
                <li className="p-2 hover:bg-gray-200 bg-secondary-color font-light">
                  <a href="#college-1">Collège 1</a>
                </li>
                <li className="p-2 hover:bg-gray-200 bg-secondary-color font-light">
                  <a href="#college-2">Collège 2</a>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <button className="flex items-center hover:text-gray-300">
                Lycée{" "}
                <span className="ml-2 text-2xl font-mono transform rotate-90">
                  &gt;
                </span>
              </button>
              <ul className="absolute left-0 mt-2 hidden group-hover:block text-main-color shadow-md">
                <li className="p-2 hover:bg-gray-200 bg-secondary-color font-light">
                  <a href="#lycee-1">Lycée 1</a>
                </li>
                <li className="p-2 hover:bg-gray-200 bg-secondary-color font-light">
                  <a href="#lycee-2">Lycée 2</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {/* Login Button */}
        <div>
          <button className="bg-light text-white text-xl mr-4 ml-52 px-8 py-1 rounded-xl hover:bg-gray-200 hover:text-light">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
