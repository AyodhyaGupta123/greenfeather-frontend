import React from "react";
import Navbar from "../components/layout/Navbar";

const Header = () => {
  return (
    <header>
      <Navbar />
      {/* Spacer to offset fixed navbar height */}
      <div className="pt-14 md:pt-15" />
    </header>
  );
};

export default Header;
