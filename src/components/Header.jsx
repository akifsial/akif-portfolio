import { React,  useState } from "react";
import { Link } from "react-router-dom";

function Header(){
  const [activeNav, setActiveNav] = useState("-hello");

  return (
    <div className="w-[100%] h-[56px] mb-7 border-b border-[#1E2D3D]">
      <div className="flex justify-between items-center h-full">
        {/* Left Header */}
        <div className="flex text-[#607B96] items-center h-full">
          <div className="ps-[22px] pe-[154px] py-[17px] hover:bg-[#0E2030] cursor-pointer h-full flex items-center">
            <h1 className="text-[16px]">micheal-weaver</h1>
          </div>

          <div className="border-r border-[#1E2D3D] h-full"></div>

          <ul className="flex items-center h-full">
            <Link to="/">
            <li
              className={`px-[32px] text-[16px] hover:bg-[#0E2030] py-[17px] cursor-pointer h-full flex items-center 
                ${
                  activeNav === "-hello"
                    ? "border-b-2 border-[#FEA55F] text-[#FFFFFF]"
                    : "text-[#607B96]"
                }`}
              onClick={() => setActiveNav("-hello")}
            >
              _hello
            </li>
            </Link>
            <div className="border-r border-[#1E2D3D] h-full"></div>

            <Link to="about-me">    
            <li
              className={`px-[32px] py-[17px] hover:bg-[#0E2030] text-[16px] cursor-pointer h-full flex items-center 
                ${
                  activeNav === "_about-me"
                    ? "border-b-2 border-[#FEA55F] text-[#FFFFFF]"
                    : "text-[#607B96]"
                }`}
              onClick={() => setActiveNav("_about-me")}
            >
              _about-me
            </li>
            </Link>
            <div className="border-r border-[#1E2D3D] h-full"></div>
            <Link to="projects" >
            <li
              className={`px-[32px] py-[17px] hover:bg-[#0E2030] text-[16px] cursor-pointer h-full flex items-center 
                ${
                  activeNav === "_projects"
                    ? "border-b-2 border-[#FEA55F] text-[#FFFFFF]"
                    : "text-[#607B96]"
                }`}
              onClick={() => setActiveNav("_projects")}
            >
              _projects
            </li>
            </Link>
            <div className="border-r border-[#1E2D3D] h-full"></div>
          </ul>
        </div>

        <div className="flex text-[#607B96] items-center h-full">
          <div className="border-r border-[#1E2D3D] h-full"></div>

          <div
            className={`px-[23px] text-[16px] hover:bg-[#0E2030] py-[17px] cursor-pointer h-full flex items-center 
              ${
                activeNav === "_contact-me"
                  ? "border-b-2 border-[#FEA55F] text-[#FFFFFF]"
                  : "text-[#607B96]"
              }`}
            onClick={() => setActiveNav("_contact-me")}
          >
            _contact-me
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
