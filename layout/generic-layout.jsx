import Header from "@/components/Header/header";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

function GenericLayout({ children, className }) {
  return (
    <main className={`${className} flex`}>
      <Sidebar />
      <div className="sm:pl-8 flex flex-1">{children}</div>
    </main>
  );
}

export default GenericLayout;
