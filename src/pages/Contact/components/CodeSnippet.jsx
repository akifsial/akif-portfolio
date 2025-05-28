import React from "react";
import useContactStore from "../../../store/useContactStore";

export default function CodeSnippet() {
const name = useContactStore((state) => state.name);
const email = useContactStore((state) => state.email);
const message = useContactStore((state) => state.message);



  return (
    <div className="overflow-auto text-[15px] font-normal text-white ">
      {/* Line 1 */}
      <div className="flex">
        <p className="w-8 text-right pr-[43px] text-[15px] text-[#85A5C4]">1</p>
        <p>
          <span className="text-[#C98BDF] ">const</span>{" "}
          <span className="text-[#819BFF]">button</span> ={" "}
          <span className="text-[#819BFF]">document.querySelector</span>{" "}
          <span className="text-[#85A5C4]">(</span>
        </p>
      </div>

      {/* Line 2 */}
      <div className="flex">
        <p className="w-8 text-right pr-[43px] text-[15px] text-[#85A5C4]">2</p>
        <p className="text-[#E99287]">'#sendBtn'</p>
        <p className="text-[#85A5C4]">);</p>
      </div>

      {/* Lines 3 empty */}
      <div className="flex">
        <p className="w-8 text-right pr-[43px] text-[15px] text-[#85A5C4]">3</p>
        <p></p>
      </div>

      {/* Line 4 */}
      <div className="flex">
        <p className="w-8 text-right pr-[43px] text-[15px] text-[#85A5C4]">4</p>
        <p>
          <span className="text-[#C98BDF]">const</span>{" "}
          <span className="text-[#819BFF]">message</span>{" "}
          <span className="text-[#85A5C4]">= &#123;</span>
        </p>
      </div>

      {/* Line 5 - name */}
      <div className="flex">
        <p className="w-8 text-right pr-[43px] text-[15px] text-[#85A5C4]">5</p>
        <p className="pl-4">
          <span className="text-[#819BFF]">name</span>{" "}
          <span className="text-[#85A5C4]">:</span>{" "}
          <span className="text-[#E99287]">"{name}"</span>{" "}
          <span className="text-[#85A5C4]">,</span>
        </p>
      </div>

      {/* Line 6 - email */}
      <div className="flex">
        <p className="w-8 text-right pr-[43px] text-[15px] text-[#85A5C4]">6</p>
        <p className="pl-4">
          <span className="text-[#819BFF]">email</span>{" "}
          <span className="text-[#85A5C4]">:</span>{" "}
          <span className="text-[#E99287]">"{email}"</span>{" "}
          <span className="text-[#85A5C4]">,</span>
        </p>
      </div>

      {/* Line 7 - message */}
      <div className="flex">
        <p className="w-8 text-right pr-[43px] text-[15px] text-[#85A5C4]">7</p>
        <p className="pl-4">
          <span className="text-[#819BFF]">message</span>{" "}
          <span className="text-[#85A5C4]">:</span>{" "}
          <span className="text-[#E99287]">"{message}"</span>{" "}
          <span className="text-[#85A5C4]">,</span>
        </p>
      </div>

      {/* Line 8 - static date */}
      <div className="flex">
        <p className="w-8 text-right pr-[43px] text-[15px] text-[#85A5C4]">8</p>
        <p className="pl-4">
          <span className="text-[#85A5C4]">date</span>
          <span className="text-[#85A5C4]">:</span>{" "}
          <span className="text-[#E99287]">"Sun May 18 2025"</span>
        </p>
      </div>

      {/* Line 9 */}
      <div className="flex">
        <p className="w-8 text-right pr-[43px] text-[15px] text-[#85A5C4]">9</p>
        <p className="text-[#85A5C4]">&#125;</p>
      </div>

      {/* Lines 10 to 14 empty or with existing code */}
      <div className="flex">
        <p className="w-8 text-right pr-[43px] text-[15px] text-[#85A5C4]">10</p>
        <p></p>
      </div>

      <div className="flex">
        <p className="w-8 text-right pr-[43px] text-[15px] text-[#85A5C4]">11</p>
        <p>
          <span className="text-[#819BFF]">button.addEventListener</span>{" "}
          <span className="text-[#85A5C4]">(</span>{" "}
          <span className="text-[#E99287">'click'</span>{" "}
          <span className="text-[#85A5C4]">)</span>{" "}
          <span className="text-[#85A5C4]">,</span>{" "}
          <span className="text-[#85A5C4]">()</span>{" "}
          <span className="text-[#C98BDF]">=&gt;</span>{" "}
          <span className="text-[#85A5C4]">&#123;</span>{" "}
        </p>
      </div>

      <div className="flex">
        <p className="w-8 text-right pr-[43px] text-[15px] text-[#85A5C4]">12</p>
        <p className="pl-4">
          <span className="text-[#819BFF]">form.send</span>{" "}
          <span className="text-[#85A5C4]">(</span>{" "}
          <span className="text-[#819BFF]">message</span>{" "}
          <span className="text-[#85A5C4]">);</span>{" "}
        </p>
      </div>

      <div className="flex">
        <p className="w-8 text-right pr-[43px] text-[15px] text-[#85A5C4]">13</p>
        <p className="text-[#85A5C4]">&#125;)</p>
      </div>

      <div className="flex">
        <p className="w-8 text-right pr-[43px] text-[15px] text-[#85A5C4]">14</p>
        <p></p>
      </div>
    </div>
  );
}
