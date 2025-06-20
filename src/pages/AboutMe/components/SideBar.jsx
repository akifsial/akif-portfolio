import { useState, useEffect } from "react";
import Tabs from "./Tabs";
import InfoSidebar from "./InfoSidebar";
import TerminalSvg from "/src/assets/svg/sidebar-1.svg";
import UseCircleSvg from "/src/assets/svg/sidebar-2.svg";
import PlusSvg from "/src/assets/svg/sidebar-3.svg";
import MArrowFolder from "/src/assets/svg/m-down-with-arrow.svg";
import peachFolder from "/src/assets/svg/peach-folder.svg"
import greenFolder from "/src/assets/svg/green-folder.svg"
import purpleFolder from "/src/assets/svg/purple-folder.svg"
import mailIcon from "/src/assets/svg/mail-icon.svg"
import phoneIcon from "/src/assets/svg/phone-icon.svg"


const section1 = [
  {
    name: "professional-info",
    items: [
      { name: "experience", icon: peachFolder },
      { name: "hard-skills", icon: greenFolder },
      { name: "soft-skills", icon: purpleFolder },
    ],
  },
  {
    name: "contacts",
    items: [
      { name: "user@gmail.com", icon: mailIcon },
      { name: "Contact", icon: phoneIcon },
    ],
  },
];

const section2 = [
  {
    name: "personal-info",
    items: [
      { name: "bio", icon: peachFolder },
      { name: "interests", icon: greenFolder },
      { name: "education", icon: purpleFolder },
      { name: "high-school", icon: MArrowFolder },
      { name: "university", icon: MArrowFolder },
    ],
  },
  {
    name: "contacts",
    items: [
      { name: "user@gmail.com", icon: mailIcon },
      { name: "Contact", icon: phoneIcon },
    ],
  },
];

const section3 = [
  {
    name: "hobbies-info",
    items: [
      { name: "sports", icon: peachFolder },
      { name: "favorite-games", icon: greenFolder },
    ],
  },
  {
    name: "contacts",
    items: [
      { name: "user@gmail.com", icon: mailIcon },
      { name: "Contact", icon: phoneIcon },
    ],
  },
];

const Sidebar = () => {
  const [sections, setSections] = useState(section1);
  const [openTabs, setOpenTabs] = useState([]);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    if (sections == section1) {
      setOpenTabs(["experience"]);
    } else if (sections == section2) {
      setOpenTabs(["bio"]);
    } else if (sections == section3) {
      setOpenTabs(["sports"]);
    }
  }, [sections]);

  const addTab = (tabName) => {
    setOpenTabs((prevTabs) => {
      if (prevTabs.includes(tabName)) return prevTabs;
      if (prevTabs.length >= 1) {
        return [...prevTabs.slice(1), tabName];
      }
      return [...prevTabs, tabName];
    });
    setActiveTab(tabName);
  };

  const closeTab = (tabName) => {
    setOpenTabs(openTabs.filter((tab) => tab !== tabName));
  };

  return (
    <div className="flex lg:flex-row flex-col h-full ">
      <div className="lg:w-[68px] w-[95%] !px-6 lg:h-full h-[50px] border-b border-[#1E2D3D] lg:border-r lg:justify-start justify-between flex lg:border-[#1E2D3D] flex-row lg:flex-col items-center py-4 space-y-6">
        <img
          src={TerminalSvg}
          onClick={() => setSections(section1)}
          className={`cursor-pointer lg:mt-0 mt-5.5 ${sections === section1 ? "opacity-100" : "opacity-50"}`}
        />
        <img
          src={UseCircleSvg}
          onClick={() => setSections(section2)}
          className={`cursor-pointer lg:mt-0 mt-5.5 ${sections === section2 ? "opacity-100" : "opacity-50"}`}
        />
        <img
          src={PlusSvg}
          onClick={() => setSections(section3)}
          className={`cursor-pointer ${sections === section3 ? "opacity-100" : "opacity-50"}`}
        />
      </div>


      <div className="">
      <InfoSidebar sections={sections} onSelectTab={addTab} activeTab={activeTab} />
      </div>

      
      <div className="flex flex-1  overflow-x-auto">
        <Tabs openTabs={openTabs} onClose={closeTab} activeTab={activeTab} />
      </div>
    </div>
  );
};

export default Sidebar;
