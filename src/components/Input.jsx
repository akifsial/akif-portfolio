import React from "react";

function Input({ className, placeholder, type, id, ...rest }) {
  return (
    <div className="mb-5">
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={`w-full px-3 py-2 text-[14px] text-[#85A5C4] bg-[#011221] border-2 border-[#1E2D3D] rounded-[8px] outline-none focus:ring-1 focus:ring-[#5d98d3] ${className}`}
        {...rest} // Spread register props here
      />
    </div>
  );
}

export default Input;

