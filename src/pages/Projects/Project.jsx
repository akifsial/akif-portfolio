import React, { useState } from "react";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedTabs from "./components/ProjectTabs";

function Project() {
  const [selectedTabs, setSelectedTabs] = useState([]);

  return (
    <div className="w-[100%] h-[100%]">
      <div className="flex">
      <div className="w-[26.9%] ">
      <ProjectSidebar selectedTabs={selectedTabs} setSelectedTabs={setSelectedTabs} />
      </div>
      <div className="w-[100%]">
      <SelectedTabs selectedTabs={selectedTabs} />
      </div>
      </div>
    </div>
  );
}

export default Project;
