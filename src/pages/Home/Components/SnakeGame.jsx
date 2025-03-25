import React, { useState, useEffect } from "react";
import UpArrow from "/src/assets/svg/up-arrow.svg";
import DownArrow from "/src/assets/svg/down-arrow.svg";
import LeftArrow from "/src/assets/svg/left-arrow.svg";
import RightArrow from "/src/assets/svg/right-arrow.svg";
import CrossArrow from "/src/assets/svg/cross-arrow.svg";

function GameUI() {
  const [activeKey, setActiveKey] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowUp") setActiveKey("up");
      if (event.key === "ArrowDown") setActiveKey("down");
      if (event.key === "ArrowLeft") setActiveKey("left");
      if (event.key === "ArrowRight") setActiveKey("right");
    };

    const handleKeyUp = () => {
      setActiveKey(null);
    };

    addEventListener("keydown", handleKeyDown);
    addEventListener("keyup", handleKeyUp);

    return () => {
      removeEventListener("keydown", handleKeyDown);
      removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div className="flex justify-center me-[100px] snakeGame rounded-[18px] items-center bg-transparent">
      {/* Main Game Container */}
      <div className="relative rounded-[18px] w-[510px] h-[475px] ps-[30px] pt-[35px] shadow-lg shadow-[#0C1616]/50 border border-[#1E2D3D] backdrop-blur-md bg-transparent">
        {/* Cross Arrows in Four Corners */}
        <img
          src={CrossArrow}
          alt=""
          className="absolute w-[8px] h-[8px] top-[10px] left-[10px] shadow-lg shadow-[#0C1616]/50"
        />
        <img
          src={CrossArrow}
          alt=""
          className="absolute w-[8px] h-[8px] top-[10px] right-[10px] shadow-lg shadow-[#0C1616]/50"
        />
        <img
          src={CrossArrow}
          alt=""
          className="absolute w-[8px] h-[8px] bottom-[10px] left-[10px] shadow-lg shadow-[#0C1616]/50"
        />
        <img
          src={CrossArrow}
          alt=""
          className="absolute w-[8px] h-[8px] bottom-[10px] right-[10px] shadow-lg shadow-[#0C1616]/50"
        />

        {/* Screen & Snake Preview */}
        <div className="bg-[#0B253A]/80 w-[238px] h-[405px] rounded-md shadow-lg p-3 flex items-end justify-center relative">
          {/* Start Button inside snake screen */}
          <button className="bg-[#FF9E64] mb-[55px] cursor-pointer text-[#01080E] px-3.5 py-2.5 rounded-md text-[14px] font-medium shadow-md hover:shadow-lg">
            start-game
          </button>
        </div>

        {/* Instructions & Arrows */}
        <div className="absolute top-[35px] right-[35px] w-[181px] rounded-[10px] bg-[#01142390]/50 px-[13px] pt-[15px] pb-[13px]">
          <p className="text-[#FFFFFF] text-[14px]">// use keyboard</p>
          <p className="text-[#FFFFFF] text-[14px]">// arrows to play</p>
          <div className="mt-[15px] flex flex-col items-center space-y-1">
            <div
              className={`w-[49px] h-[28px] cursor-pointer flex items-center hover:bg-[#04181F] hover:shadow-[0px_0px_12px_1px_#4FE4C1] justify-center border border-[#1E2D3D] rounded-[10px] ${
                activeKey === "up" ? "bg-[#FF9E64]" : "bg-[#010C15]"
              }`}
            >
              <img src={UpArrow} alt="" />
            </div>
            <div className="flex space-x-1">
              <div
                className={`w-[49px] h-[28px] cursor-pointer flex items-center hover:bg-[#04181F] hover:shadow-[0px_0px_12px_1px_#4FE4C1] justify-center border border-[#1E2D3D] rounded-[10px] ${
                  activeKey === "left" ? "bg-[#FF9E64]" : "bg-[#010C15]"
                }`}
              >
                <img src={LeftArrow} alt="" />
              </div>
              <div
                className={`w-[49px] h-[28px] cursor-pointer flex items-center hover:bg-[#04181F] hover:shadow-[0px_0px_12px_1px_#4FE4C1] justify-center border border-[#1E2D3D] rounded-[10px] ${
                  activeKey === "down" ? "bg-[#FF9E64]" : "bg-[#010C15]"
                }`}
              >
                <img src={DownArrow} alt="" />
              </div>
              <div
                className={`w-[49px] h-[28px] cursor-pointer flex items-center hover:bg-[#04181F] hover:shadow-[0px_0px_12px_1px_#4FE4C1] justify-center border border-[#1E2D3D] rounded-[10px] ${
                  activeKey === "right" ? "bg-[#FF9E64]" : "bg-[#010C15]"
                }`}
              >
                <img src={RightArrow} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Food Left Indicator */}
        <div className="absolute bottom-52 right-15">
          <p className="text-[#FFFFFF] text-[14px]">// food left</p>
          <div className="grid grid-cols-4 gap-1 mt-2.5">
            <div className="w-2 h-2 mb-4 me-6 bg-[#43D9AD] shadow-[0px_0px_8px_3px_#427F75] rounded-full"></div>
            <div className="w-2 h-2 bg-[#43D9AD] shadow-[0px_0px_8px_3px_#427F75] rounded-full"></div>
            <div className="w-2 h-2 bg-[#43D9AD] shadow-[0px_0px_8px_3px_#427F75] rounded-full"></div>
            <div className="w-2 h-2 bg-[#43D9AD] shadow-[0px_0px_8px_3px_#427F75] rounded-full"></div>
            <div className="w-2 h-2 bg-[#43D9AD] shadow-[0px_0px_8px_3px_#427F75] rounded-full"></div>
            <div className="w-2 h-2 bg-[#43D9AD] shadow-[0px_0px_8px_3px_#427F75] rounded-full"></div>
            <div className="w-2 h-2 bg-[#43D9AD] shadow-[0px_0px_8px_3px_#427F75] rounded-full"></div>
            <div className="w-2 h-2 bg-[#43D9AD] shadow-[0px_0px_8px_3px_#427F75] rounded-full"></div>
          </div>
        </div>

        {/* Skip Button */}
        <div className="absolute bottom-[34px] right-[35px]">
          <button className="border border-[#FFFFFF] cursor-pointer text-[#FFFFFF] px-3.5 py-2.5 rounded-md text-[14px] hover:bg-[#41646F] hover:text-[#FFFFFF] transition">
            skip
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameUI;
