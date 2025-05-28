import React from "react";

const SelectedTabs = ({ selectedTabs }) => {
  return (
    <div className="lg:flex hidden p-[8px] border-b border-[#1E2D3D]">
      {selectedTabs.length == 0 ? (
        <span className="text-white p-[3.5px]">All;</span>
      ) : (
        selectedTabs.map((tab, index) => (
          <span key={index} className="text-white px-3 py-1 rounded">
            {tab};
          </span>
        ))
      )}
    </div>
  )
}

export default SelectedTabs;
