import { React, useState } from "react";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";


function Header() {
  const [activeNav, setActiveNav] = useState("-hello");
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const handleNavClick = (nav) => {
    setActiveNav(nav);
    setHamburgerOpen(false); 
  };

  return (
    <div className="w-full h-[56px] mb-7 border-b border-[#1E2D3D] relative z-50 bg-[#011627]">
      <div className="flex justify-between items-center h-full">
        <div className="flex text-[#607B96] items-center h-full">
          <div className="ps-[22px] pe-[20px] lg:pe-[154px] py-[17px] hover:bg-[#0E2030] cursor-pointer h-full flex items-center">
            <h1 className="text-[16px]">Akif Sial</h1>
          </div>
          <div className="lg:border-r lg:border-[#1E2D3D] h-full hidden md:block"></div>

          <ul className="hidden lg:flex items-center h-full">
            <Link to="/">
              <li
                className={`px-[32px] text-[16px] hover:bg-[#0E2030] py-[17px] cursor-pointer h-full flex items-center 
                ${
                  activeNav === "-hello"
                    ? "border-b-2 border-[#FEA55F] text-[#FFFFFF]"
                    : "text-[#607B96]"
                }`}
                onClick={() => handleNavClick("-hello")}
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
                onClick={() => handleNavClick("_about-me")}
              >
                _about-me
              </li>
            </Link>
            <div className="border-r border-[#1E2D3D] h-full"></div>

            <Link to="projects">
              <li
                className={`px-[32px] py-[17px] hover:bg-[#0E2030] text-[16px] cursor-pointer h-full flex items-center 
                ${
                  activeNav === "_projects"
                    ? "border-b-2 border-[#FEA55F] text-[#FFFFFF]"
                    : "text-[#607B96]"
                }`}
                onClick={() => handleNavClick("_projects")}
              >
                _projects
              </li>
            </Link>
            <div className="border-r border-[#1E2D3D] h-full"></div>
          </ul>

        <div className="hidden lg:flex text-[#ffffff] items-center h-full">
          <div className=" h-full"></div>
          <Link to="contact">
            <div
              className={`px-[23px] text-[16px] hover:bg-[#0E2030] py-[17px] cursor-pointer h-full flex items-center 
              ${
                activeNav === "_contact-me"
                  ? "border-b-2 border-[#FEA55F] text-[#e9e9e9]"
                  : "text-[#ffffff]"
              }`}
              onClick={() => handleNavClick("_contact-me")}
            >
              _contact-me
            </div>
          </Link>
            <div className="border-r border-[#1E2D3D] h-full"></div>

        </div>
        </div>


        <div className="lg:hidden pr-4">
          <button onClick={toggleHamburger} className="text-[#607B96] text-[24px]">
            {hamburgerOpen ? <RxCross1  /> : <RxHamburgerMenu  />}
          </button>
        </div>
      </div>

      {hamburgerOpen && (
        <div className="absolute top-[56px] left-0 w-full bg-[#011627] border-t border-[#1E2D3D] lg:hidden flex flex-col z-40">
          <Link to="/">
            <div
              className={`px-6 py-4 text-[16px] ${
                activeNav === "-hello"
                  ? "text-[#FFFFFF]"
                  : "text-[#607B96]"
              } hover:bg-[#0E2030]`}
              onClick={() => handleNavClick("-hello")}
            >
              _hello
            </div>
          </Link>
          <Link to="about-me">
            <div
              className={`px-6 py-4 text-[16px] ${
                activeNav === "_about-me"
                  ? "text-[#FFFFFF]"
                  : "text-[#607B96]"
              } hover:bg-[#0E2030]`}
              onClick={() => handleNavClick("_about-me")}
            >
              _about-me
            </div>
          </Link>
          <Link to="projects">
            <div
              className={`px-6 py-4 text-[16px] ${
                activeNav === "_projects"
                  ? "text-[#FFFFFF]"
                  : "text-[#607B96]"
              } hover:bg-[#0E2030]`}
              onClick={() => handleNavClick("_projects")}
            >
              _projects
            </div>
          </Link>
          <Link to="contact">
            <div
              className={`px-6 py-4 text-[16px] ${
                activeNav === "_contact-me"
                  ? "text-[#FFFFFF]"
                  : "text-[#607B96]"
              } hover:bg-[#0E2030]`}
              onClick={() => handleNavClick("_contact-me")}
            >
              _contact-me
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
