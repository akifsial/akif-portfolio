import { useState, useEffect } from "react";
import CrossIcon from "/src/assets/svg/crossArrow.svg";
import TabContent from "./TabsContent";

const Tabs = ({ openTabs, onClose }) => {
  const [activeTab, setActiveTab] = useState(openTabs[0]);
  useEffect(() => {
    if (openTabs.length > 0) {
      setActiveTab(openTabs[openTabs.length - 1]);
    }
  }, [openTabs]);
  return (
    <div className="flex-1 flex mt-[1px] flex-col border-l w-[100vw] border-[#1E2D3D]">
      <div className="hidden lg:flex h-13 items-center overflow-x-auto border-b border-[#1E2D3D]">
        {openTabs.map((tab) => (
          <div
            key={tab}
            className={`p-4 h-13 border-r border-[#1E2D3D] flex justify-between items-center gap-2 min-w-[150px] cursor-pointer ${
              activeTab === tab ? "bg-[#1E2D3D] text-white" : "text-[#607B96]"
            }`}
            onClick={() => {
              setActiveTab(tab);
            }}
          >
            <h2>{tab}</h2>
            <img
              src={CrossIcon}
              alt="Close"
              onClick={() => onClose(tab)}
              className="cursor-pointer p-1 hover:bg-[#314152]"
            />
            
          </div>
        ))}
      </div>

      <div className="flex-1">
        {openTabs.includes(activeTab) && <TabContent tabName={activeTab} />}
      </div>
    </div>
  );
};

export default Tabs;
