import Header from "@/components/Header/header";

import React from "react";

function GenericLayout({ children, className }) {
  return (
    <main className={`${className} flex`}>
      <Header />
      <div className="flex flex-1">{children}</div>
    </main>
  );
}

export default GenericLayout;
