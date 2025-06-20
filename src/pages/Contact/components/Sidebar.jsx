import { useState } from "react";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { RxUpload } from "react-icons/rx";
import ArrowDown from "/src/assets/svg/down-arrow.svg";
import ArrowRight from "/src/assets/svg/right-arrow.svg";

const Sidebar = () => {
  const [showContacts, setShowContacts] = useState(true);
  const [showSocials, setShowSocials] = useState(true);

  const socials = [
    { name: "YouTube channel" },
    { name: "GuruShots profile" },
    { name: "Instagram account" },
    { name: "Twitch profile" },
  ];

  return (
    <div className="border-r border-[#1E2D3D] h-full">
    <div className="bg-[#011627] text-[#9caec2] ">
      {/* Contacts */}
      <div className="p-4 lg:hidden flex">
        <h1 className="text-white">_contact-me</h1>
      </div>
      <div>
        <button
          onClick={() => setShowContacts(!showContacts)}
          className="w-full text-white lg:bg-[#011627] bg-[#1e2d3d] mb-1 border-b border-[#1E2D3D] py-2.5 px-5 text-[14px] cursor-pointer text-left font-normal flex items-center gap-1.5"
        >
          <img
            src={showContacts ? ArrowDown : ArrowRight}
            alt="arrow"
            className="w-2.5 h-2.5"
          />
          <span>contacts</span>
        </button>
        {showContacts && (
          <div className="mt-2 border-b border-[#1E2D3D]">
            <div className="flex items-center gap-1.5 group py-2.5 px-5">
              <IoMail className="group-hover:text-white" />
              <span className="cursor-pointer group-hover:text-white transition duration-200">
                user@gmail.com
              </span>
            </div>

            <div className="flex items-center mb-2.5 px-5 group gap-1.5">
              <FaPhoneAlt className="group-hover:text-white" />
              <span className="cursor-pointer group-hover:text-white transition duration-200">
                Contact
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Find me also in */}
      <div>
        <button
          onClick={() => setShowSocials(!showSocials)}
          className="w-full cursor-pointer lg:bg-[#011627] bg-[#1e2d3d] mb-3 text-white border-b border-[#1E2D3D] py-2.5 px-5 text-[14px] text-left font-normal flex items-center gap-1.5"
        >
          <img
            src={showSocials ? ArrowDown : ArrowRight}
            alt="arrow"
            className="w-2.5 h-2.5"
          />
          <span className="cursor-pointer">find-me-also-in</span>
        </button>
        {showSocials && (
          <div className="">
            {socials.map((social, index) => (
              <div
                key={index}
                className="flex mb-2 px-5 items-center gap-1.5 group"
              >
                <RxUpload className="text-lg group-hover:text-[#fff] transition duration-200" />
                <p
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-sm group-hover:text-white transition duration-200"
                >
                  {social.name}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
