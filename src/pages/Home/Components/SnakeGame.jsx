import React, { useState, useEffect, useRef } from "react";
import UpArrow from "/src/assets/svg/up-arrow.svg";
import DownArrow from "/src/assets/svg/down-arrow.svg";
import LeftArrow from "/src/assets/svg/left-arrow.svg";
import RightArrow from "/src/assets/svg/right-arrow.svg";
import CrossArrow from "/src/assets/svg/cross-arrow.svg";
import { Link } from "react-router-dom";

const CELL_SIZE = 20;
const WIDTH = 238;
const HEIGHT = 400;

const getRandomFood = () => {
  const maxX = Math.floor(WIDTH / CELL_SIZE);
  const maxY = Math.floor(HEIGHT / CELL_SIZE);
  return [
    Math.floor(Math.random() * maxX) * CELL_SIZE,
    Math.floor(Math.random() * maxY) * CELL_SIZE,
  ];
};

function GameUI() {
  const [activeKey, setActiveKey] = useState(null);
  const [snake, setSnake] = useState([[60, 60]]);
  const [food, setFood] = useState(getRandomFood());
  const [direction, setDirection] = useState("right");
  const [isRunning, setIsRunning] = useState(false);
  const [foodLeft, setFoodLeft] = useState(8); // ✅ Added state
  const gameRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowUp") {
        setDirection("up");
        setActiveKey("up");
      }
      if (event.key === "ArrowDown") {
        setDirection("down");
        setActiveKey("down");
      }
      if (event.key === "ArrowLeft") {
        setDirection("left");
        setActiveKey("left");
      }
      if (event.key === "ArrowRight") {
        setDirection("right");
        setActiveKey("right");
      }
    };

    const handleKeyUp = () => setActiveKey(null);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        moveSnake();
      }, 150);
      return () => clearInterval(interval);
    }
  }, [snake, direction, isRunning]);

  const moveSnake = () => {
    const newSnake = [...snake];
    const head = newSnake[newSnake.length - 1];
    let newHead;

    switch (direction) {
      case "up":
        newHead = [head[0], head[1] - CELL_SIZE];
        break;
      case "down":
        newHead = [head[0], head[1] + CELL_SIZE];
        break;
      case "left":
        newHead = [head[0] - CELL_SIZE, head[1]];
        break;
      case "right":
      default:
        newHead = [head[0] + CELL_SIZE, head[1]];
        break;
    }

    if (
      newHead[0] < 0 ||
      newHead[0] >= WIDTH ||
      newHead[1] < 0 ||
      newHead[1] >= HEIGHT ||
      snake.some(
        (segment) => segment[0] === newHead[0] && segment[1] === newHead[1]
      )
    ) {
      setIsRunning(false);
      alert("Game Over");
      setSnake([[60, 60]]);
      setFood(getRandomFood());
      setFoodLeft(8); // ✅ Reset foodLeft on Game Over
      return;
    }

    newSnake.push(newHead);

    if (newHead[0] === food[0] && newHead[1] === food[1]) {
      setFood(getRandomFood());
      setFoodLeft((prev) => Math.max(prev - 1, 0)); // ✅ Decrease foodLeft
      // Don't shift tail — snake grows
    } else {
      newSnake.shift(); // Normal movement
    }

    setSnake(newSnake);
  };

  return (
    <div className="flex justify-center snakeGame me-[10px] rounded-[18px] items-center bg-transparent">
      <div className="relative rounded-[18px] snake-game-main w-[510px] h-[475px] ps-[30px] pt-[35px] shadow-lg shadow-[#0C1616]/50 border border-[#1E2D3D] backdrop-blur-md bg-transparent">
        {/* Cross Arrows in Four Corners */}
        <img src={CrossArrow} className="absolute w-[8px] h-[8px] top-[10px] left-[10px] shadow-lg shadow-[#0C1616]/50" />
        <img src={CrossArrow} className="absolute w-[8px] h-[8px] top-[10px] right-[10px] shadow-lg shadow-[#0C1616]/50" />
        <img src={CrossArrow} className="absolute w-[8px] h-[8px] bottom-[10px] left-[10px] shadow-lg shadow-[#0C1616]/50" />
        <img src={CrossArrow} className="absolute w-[8px] h-[8px] bottom-[10px] right-[10px] shadow-lg shadow-[#0C1616]/50" />

        {/* Snake Screen */}
        <div ref={gameRef} className="bg-[#0B253A] game-screen w-[238px] h-[405px] rounded-md shadow-lg p-3 flex items-end justify-center relative overflow-hidden">
          {snake.map((segment, i) => (
            <div
              key={i}
              className="absolute bg-[#4FE4C1] rounded-sm"
              style={{
                width: CELL_SIZE - 2,
                height: CELL_SIZE - 2,
                left: segment[0],
                top: segment[1],
              }}
            />
          ))}

          <div
            className="absolute bg-[#FF9E64] rounded-sm shadow-md"
            style={{
              width: CELL_SIZE - 2,
              height: CELL_SIZE - 2,
              left: food[0],
              top: food[1],
            }}
          />

          {!isRunning && (
            <button
              className="bg-[#FF9E64] snake-game-btn mb-[55px] cursor-pointer text-[#01080E] px-3.5 py-2.5 rounded-md text-[14px] font-medium shadow-md hover:shadow-lg"
              onClick={() => {
                setIsRunning(true);
                setFoodLeft(8); // ✅ Reset foodLeft when starting
              }}
            >
              start-game
            </button>
          )}
        </div>

        {/* Keyboard Arrows UI */}
        <div className="absolute top-[35px] right-[35px] snake-game-keyboard w-[181px] rounded-[10px] bg-[#01142390]/50 px-[13px] pt-[15px] pb-[13px]">
          <p className="text-[#FFFFFF] text-[14px]">// use keyboard</p>
          <p className="text-[#FFFFFF] text-[14px]">// arrows to play</p>
          <div className="mt-[15px] flex flex-col items-center space-y-1">
            <div className={`w-[49px] h-[28px] snake-game-arrows cursor-pointer flex items-center hover:bg-[#04181F] hover:shadow-[0px_0px_12px_1px_#4FE4C1] justify-center border border-[#1E2D3D] rounded-[10px] ${activeKey === "up" ? "bg-[#FF9E64]" : "bg-[#010C15]"}`}>
              <img src={UpArrow} alt="" />
            </div>
            <div className="flex space-x-1">
              <div className={`w-[49px] h-[28px] snake-game-arrows cursor-pointer flex items-center hover:bg-[#04181F] hover:shadow-[0px_0px_12px_1px_#4FE4C1] justify-center border border-[#1E2D3D] rounded-[10px] ${activeKey === "left" ? "bg-[#FF9E64]" : "bg-[#010C15]"}`}>
                <img src={LeftArrow} alt="" />
              </div>
              <div className={`w-[49px] h-[28px] snake-game-arrows cursor-pointer flex items-center hover:bg-[#04181F] hover:shadow-[0px_0px_12px_1px_#4FE4C1] justify-center border border-[#1E2D3D] rounded-[10px] ${activeKey === "down" ? "bg-[#FF9E64]" : "bg-[#010C15]"}`}>
                <img src={DownArrow} alt="" />
              </div>
              <div className={`w-[49px] h-[28px] snake-game-arrows cursor-pointer flex items-center hover:bg-[#04181F] hover:shadow-[0px_0px_12px_1px_#4FE4C1] justify-center border border-[#1E2D3D] rounded-[10px] ${activeKey === "right" ? "bg-[#FF9E64]" : "bg-[#010C15]"}`}>
                <img src={RightArrow} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Food Left Indicator */}
        <div className="absolute bottom-50 snake-game-food right-20">
          <p className="text-[#FFFFFF] mb-6 text-[16px]">// food left</p>
          <div className="grid grid-cols-4 gap-3 snake-game-food-balls mt-2.5">
            {[...Array(foodLeft)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-[#43D9AD] shadow-[0px_0px_8px_3px_#427F75] rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Skip Button */}
        <div className="absolute bottom-[34px] right-[35px]">
          <Link to="about-me">
            <button
              className="border border-[#FFFFFF] snake-game-skip-btn cursor-pointer text-[#FFFFFF] px-3.5 py-2.5 rounded-md text-[14px] hover:bg-[#41646F] hover:text-[#FFFFFF] transition"
              onClick={() => {
                setIsRunning(false);
                setSnake([[60, 60]]);
                setFood(getRandomFood());
                setFoodLeft(8); // ✅ Reset foodLeft on skip
              }}
            >
              skip
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GameUI;
