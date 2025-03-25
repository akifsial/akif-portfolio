import { useState, useEffect } from "react";
import Tabs from "./Tabs";
import InfoSidebar from "./InfoSidebar";
import TerminalSvg from "/src/assets/svg/sidebar-1.svg";
import UseCircleSvg from "/src/assets/svg/sidebar-2.svg";
import PlusSvg from "/src/assets/svg/sidebar-3.svg";
import MArrowFolder from "/src/assets/svg/m-down-with-arrow.svg";

const section1 = [
  {
    name: "professional-info",
    items: [
      { name: "experience", icon: "/src/assets/svg/peach-folder.svg" },
      { name: "hard-skills", icon: "/src/assets/svg/green-folder.svg" },
      { name: "soft-skills", icon: "/src/assets/svg/purple-folder.svg" },
    ],
  },
  {
    name: "contacts",
    items: [
      { name: "user@gmail.com", icon: "/src/assets/svg/mail-icon.svg" },
      { name: "+3598246359", icon: "/src/assets/svg/phone-icon.svg" },
    ],
  },
];

const section2 = [
  {
    name: "personal-info",
    items: [
      { name: "bio", icon: "/src/assets/svg/peach-folder.svg" },
      { name: "interests", icon: "/src/assets/svg/green-folder.svg" },
      { name: "education", icon: "/src/assets/svg/purple-folder.svg" },
      { name: "high-school", icon: MArrowFolder },
      { name: "university", icon: MArrowFolder },
    ],
  },
  {
    name: "contacts",
    items: [
      { name: "user@gmail.com", icon: "/src/assets/svg/mail-icon.svg" },
      { name: "+3598246359", icon: "/src/assets/svg/phone-icon.svg" },
    ],
  },
];

const section3 = [
  {
    name: "hobbies-info",
    items: [
      { name: "sports", icon: "/src/assets/svg/peach-folder.svg" },
      { name: "favorite-games", icon: "/src/assets/svg/green-folder.svg" },
    ],
  },
  {
    name: "contacts",
    items: [
      { name: "user@gmail.com", icon: "/src/assets/svg/mail-icon.svg" },
      { name: "+3598246359", icon: "/src/assets/svg/phone-icon.svg" },
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
    <div className="flex h-full">
      <div className="w-[68px] flex border-r border-[#1E2D3D] flex-col items-center py-4 space-y-6">
        <img
          src={TerminalSvg}
          onClick={() => setSections(section1)}
          className={`cursor-pointer ${sections === section1 ? "opacity-100" : "opacity-50"}`}
        />
        <img
          src={UseCircleSvg}
          onClick={() => setSections(section2)}
          className={`cursor-pointer ${sections === section2 ? "opacity-100" : "opacity-50"}`}
        />
        <img
          src={PlusSvg}
          onClick={() => setSections(section3)}
          className={`cursor-pointer ${sections === section3 ? "opacity-100" : "opacity-50"}`}
        />
      </div>

      <InfoSidebar sections={sections} onSelectTab={addTab} activeTab={activeTab} />
      <div className="flex flex-1 overflow-x-auto">
        <Tabs openTabs={openTabs} onClose={closeTab} activeTab={activeTab} />
      </div>
    </div>
  );
};

export default Sidebar;
