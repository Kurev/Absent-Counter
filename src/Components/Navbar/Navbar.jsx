import React from "react";
import { MdLightMode } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { FaPenAlt } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";

const Navbar = ({ toggleTheme, isLightMode }) => {
  return (
    <nav className="relative z-10 flex w-full justify-between items-center pt-3 select-none">
      <div className="cursor-pointer" onClick={toggleTheme}>
        <h1
          className={`text-2xl ${isLightMode} ${
            isLightMode ? "text-[#060610]" : "text-[#f0fa97]"
          }`}
        >
          {isLightMode ? <IoMdMoon /> : <MdLightMode /> }
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <h1
          className={`text-xl font-normal mr-2 ${
            isLightMode ? "text-[#6a39f3]" : "text-[#584295]"
          }`}
        >
          <FaPenAlt />
        </h1>
        <h1
          className={`text-xl font-light ${
            isLightMode ? "text-[#060610]" : "text-[#bdbcbe]"
          }`}
        >
          Absence Counter
        </h1>
      </div>
      <div className="cursor-pointer">
        <h1
          className={`text-2xl ${
            isLightMode ? "text-[#060610]" : "text-[#bdbcbe]"
          }`}
        >
          <CiLogin />
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
