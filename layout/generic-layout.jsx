import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

function GenericLayout({ children, className }) {
  return (
    <main className={`${className} flex`}>
      <Sidebar />
      <div className="flex flex-1">{children}</div>
    </main>
  );
}

export default GenericLayout;
