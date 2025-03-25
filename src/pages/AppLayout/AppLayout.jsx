import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function AppLayout() {
  return (
    <div className="p-[2%] bg-[#010C15] w-full h-screen flex flex-col">
      <div className="bg-[#011627] w-full h-full rounded-[5px] border border-[#1E2D3D] flex flex-col">
        
        {/* Header Fixed at the Top */}
        <div className="h-[56px]">
          <Header />
        </div>

        {/* Main Content in Center */}
        <div className="flex flex-1 min-h-0 overflow-hidden">
          <Outlet />
        </div>

        {/* Footer Fixed at the Bottom */}
        <div>
          <Footer />
        </div>

      </div>
    </div>
  );
}

export default AppLayout;
