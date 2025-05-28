import React from "react";

const ProjectList = ({ projects }) => {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 mb-38 gap-4 py-[30px] px-[15px] sm:px-[40px]">  {/* mb-38 is not correct -- you have to change it and solve the scroll prob in a correct way */}
      {projects.map((project) => (
        <div key={project.id} className="bg-[#011221] border-[#1E2D3D] border rounded-[20px] mb-4">
          <img src={project.image} alt={project.name} className="w-full rounded-t-[20px] h-[140px] object-cover" />
          {/* <h3 className="text-blue-400 pt-[25px] px-[25px] mt-2">{project.name}</h3> */}
          <p className="text-gray-300 px-[25px] mb-3 pt-[25px] border-t border-[#1E2D3D] ">{project.description}</p>
          <button className="bg-gray-700 ml-[25px] text-[12px] mb-[25px] hover:bg-gray-800 text-white px-3 cursor-pointer py-1.5 mt-2 rounded-[10px]">
            View-Project
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;