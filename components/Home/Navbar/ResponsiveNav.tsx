"use client";
import React, { use, useState } from "react";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const handleNavShow = () => setShowNav(true);
  const handleCloseNav = () => setShowNav(false);
  return (
    <div>
      <Navbar openNav={handleNavShow} />
      <MobileNav showNav={showNav} closeNav={handleCloseNav} />
    </div>
  );
};

export default ResponsiveNav;
