import React, { useState } from "react";
import Sidebar from "./components/ProjectSidebar";
import SelectedTabs from "./components/ProjectTabs";
import ProjectList from "./components/ProjectList";
import projectsData from "./components/ProjectData";

export default function Project() {
  const [selectedTabs, setSelectedTabs] = useState([]);

  const filteredProjects =
    selectedTabs.length === 0
      ? projectsData
      : projectsData.filter((project) =>
          selectedTabs.includes(project.category)
        );

  return (
    <div className="flex lg:flex-row lg:overflow-hidden overflow-y-auto flex-col h-screen"> 
      <div className="w-[100%] lg:w-[20.3%] ">
      <Sidebar selectedTabs={selectedTabs} setSelectedTabs={setSelectedTabs} />
      </div>
      <div className="flex-1 w-[100%] lg:w-[79.7%] lg:overflow-y-auto"> {/* scroll prob is solved but go to projectList and solve it properly */}
        <SelectedTabs selectedTabs={selectedTabs} />
        <ProjectList projects={filteredProjects} />
      </div>
    </div>
  );
}
