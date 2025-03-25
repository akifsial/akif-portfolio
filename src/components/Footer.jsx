import { React,  useState } from "react";
import FacebookSvg from "/src/assets/svg/facebook.svg"
import GithubSvg from "/src/assets/svg/github.svg"
import TwitterSvg from "/src/assets/svg/twitter.svg"

function Footer() {

  return (
    <footer className="w-[100%] h-[49px] flex items-center justify-between border-t border-[#1E2D3D]">
      {/* Left Section */}
      <div className="text-[#607B96] text-sm flex">
        <span className="ps-[22px] flex items-center pe-[18px] ">find me in:</span>

        {/* Border */}
        <div className="border-r border-[#1E2D3D] h-12 "></div>

        <div href="#" className="text-[#607B96] ps-3.5 pe-3 flex hover:bg-[#0E2030] cursor-pointer hover:text-white">
          <img src={TwitterSvg} alt="" />
        </div>
        <div className="border-r border-[#1E2D3D] h-12 "></div>

        <div href="#" className=" ps-2.5 pe-2 text-[#607B96] flex hover:bg-[#0E2030] cursor-pointer hover:text-white">
          <img src={FacebookSvg} alt="" />
        </div>
        <div className="border-r border-[#1E2D3D] h-12 "></div>
      </div>

      {/* Right Section */}
      <div className="text-[#607B96] text-sm flex">
      <div className="border-r border-[#1E2D3D] h-12 "></div>

        <div href="#" className="px-[23px]  hover:bg-[#0E2030] cursor-pointer flex items-center">
          username
          <img className="ps-1" src={GithubSvg} alt="" /> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
