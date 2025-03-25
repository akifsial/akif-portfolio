import { useState } from "react";
import ArrowDown from "/src/assets/svg/arrow-down-bold.svg";
import ReactDLogo from "/src/assets/svg/react-logo.svg";
import HTMLLogo from "/src/assets/svg/html-logo.svg";
import CSSLogo from "/src/assets/svg/css-logo.svg";
import VueLogo from "/src/assets/svg/vue-logo.svg";
import AngularLogo from "/src/assets/svg/angular-logo.svg";
import GatsbyLogo from "/src/assets/svg/gatsby-logo.svg";
import FlutterLogo from "/src/assets/svg/flutter-logo.svg";

const Sidebar = ({ selectedTabs, setSelectedTabs }) => {
  const projects = [
    { name: "React", logo: ReactDLogo },
    { name: "HTML", logo: HTMLLogo },
    { name: "CSS", logo: CSSLogo },
    { name: "Vue", logo: VueLogo },
    { name: "Angular", logo: AngularLogo },
    { name: "Gatsby", logo: GatsbyLogo },
    { name: "Flutter", logo: FlutterLogo },
  ];

  const handleCheckboxChange = (projectName) => {
    setSelectedTabs((prev) => {
      const newTabs = [...prev];
      const index = newTabs.indexOf(projectName);
  
      if (index != -1) {
        newTabs.splice(index, 1);
      } else {
        newTabs.push(projectName);
      }
  
      return newTabs;
    });
  };
  
  return (
    <div className=" text-white border-[#1E2D3D] border-r">
      <div> 
        <div className="border-b h-[100%] border-[#1E2D3D] px-[20px] pb-[10px] pt-[13px] mb-[20px]">
          <button className="text-lg font-bold flex items-center">
            <img src={ArrowDown} className="pe-3 w-[23px]" /> projects
          </button>
        </div>
        <div className="ps-[22px]">
          <ul className="mt-2 space-y-2">
            {projects.map((project, index) => (
              <li key={index} className="flex items-center mb-5">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedTabs.includes(project.name)}
                  onChange={() => handleCheckboxChange(project.name)}
                />
                <img src={project.logo} alt={project.name} className="w-5 h-5 mr-2" />
                {project.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
