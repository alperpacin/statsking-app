import Header from "@/components/Header/header";
import React from "react";

function GenericLayout({ children, className }) {
  return (
    <main className={`${className}`}>
      <Header />
      {children}
    </main>
  );
}

export default GenericLayout;
