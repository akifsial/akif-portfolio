import { useState, useEffect } from "react";
import ArrowDown from "/src/assets/svg/down-arrow.svg";
import ArrowRight from "/src/assets/svg/right-arrow.svg";
import FolderArrowDown from "/src/assets/svg/folder-arrow-right.svg";
import FolderArrowRightBlack from "../../../assets/svg/folder-arrow-right-black.svg";

const InfoSidebar = ({ sections = [], onSelectTab }) => {
  const [openSection, setOpenSection] = useState({});
  const [openItem, setOpenItem] = useState("");

  useEffect(() => {
    if (sections.length > 0) {
      const defaultSection = sections[0]; 
      setOpenSection((prev) => ({
        ...prev,
        [defaultSection.name]: true,
      }));

      if (defaultSection.items.length > 0) {
        setOpenItem(defaultSection.items[0].name); 
      }
    }
  }, [sections]);

  const toggleSection = (sectionName) => {
    setOpenSection((prev) => ({
      ...prev,
      [sectionName]: !prev[sectionName],
    }));
  };

  const toggleItem = (itemName) => {
    setOpenItem((prev) => (prev === itemName ? "" : itemName));
  };

  return (
    <div className="bg-[#011627] border-r mb-[30px] border-[#1E2D3D] lg:w-[243px] lg:h-screen w-full  text-gray-300 text-sm">
      {sections.map((section) => (
        <div key={section.name}>
          <div className="ps-[14px] pt-3 lg:bg-[#011627] bg-[#1e2d3d] lg:mb-0 mb-0.5 pb-1.5 border-[#1E2D3D] pe-[83px] border-b">
            <button
              onClick={() => toggleSection(section.name)}
              className="flex cursor-pointer items-center w-full text-left font-light py-2"
            >
              <img
                src={openSection[section.name] ? ArrowDown : ArrowRight}
                alt="arrow"
                className="mr-2 w-2.5"
              />
              {section.name}
            </button>
          </div>

          {openSection[section.name] && (
            <div className="space-y-1 pt-[17px]">
              {section.items.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    toggleItem(item.name);
                    onSelectTab(item.name);
                  }}
                  className="flex mb-2.5 ps-4 cursor-pointer items-center gap-2 w-full text-left"
                >
                  <img
                    src={openItem === item.name ? FolderArrowDown : FolderArrowRightBlack}
                    alt="arrow"
                  />
                  <img src={item.icon} alt={item.name} className="w-4 h-4" />
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default InfoSidebar;
