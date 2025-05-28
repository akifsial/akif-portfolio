import React from 'react'
import CrossIcon from "/src/assets/svg/crossArrow.svg"


export default function SidebarTab() {
  return (
    <div className='border-b lg:flex hidden border-[#1E2D3D]'>
        <div className='border-r p-[9.8px] flex gap-6 border-[#1E2D3D] w-[140px]'>
        <span className="text-[14px] text-[#607B96]">Contacts</span>
        <img src={CrossIcon} alt="" />
        </div>
        
    </div>
  )
}
