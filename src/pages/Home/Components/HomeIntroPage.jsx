import { useState, useEffect } from "react";
import SnakeGame from "./SnakeGame";


const HeroSection = () => {
  const [text, setText] = useState("Frontend Developer");
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prevndex) => prevndex + 1);
        console.log(index)
      } else {
        setIsTypingComplete(true);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="flex justify-between gap-6 items-center w-[100%] h-[100%]">

    <div className="flex flex-col justify-center ps-[311px] items-start">
      {/* Greeting */}
      <p className="text-[#E5E9F0] greetings font-light text-[18px]">
        Hi all. I am
      </p>

      {/* Name */}
      <h1 className="text-[#E5E9F0] text-[62px] heading font-light">
        Micheal Weaver
      </h1>

      {/* Typing Effect Job Title */}
      <h2 className="text-[#4D5BCE] mb-[81px] work-title text-[32px] font-semibold">
        &gt; {displayedText}
        <span className={isTypingComplete ? "animate-blink" : ""}>|</span>
      </h2>

      {/* Code Snippet */}
      <div className="text-[#607B96] code-snippet text-[16px]">
        <p className="mb-2.5">// complete the game to continue</p>
        <p className="mb-2.5">// you can also see it on my Github page</p>

        {/* GitHub Link */}
        <p className="text-[#4D5BCE] github-link text-[16px]">
          const <span className="text-[#43D9AD] text-[16px]">githubLink</span>{" "}
          <span className="text-[16px] text-[#fff] pe-2">=</span>
          <span className="text-[#E99287] text-[16px]">
            “<span className="underline">https://github.com/example/url</span>”
          </span>
        </p>
      </div>

    </div>
    <div className="items-end">
      <SnakeGame />
    </div>
    </div>
  );
};

export default HeroSection;
