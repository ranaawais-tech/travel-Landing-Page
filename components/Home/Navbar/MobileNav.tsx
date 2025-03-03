import { navLinks } from "@/constant/constan";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
  return (
    <div
      className={`fixed inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen ${
        showNav ? "translate-x-0" : "translate-x-[-100%]"
      }`}
      onClick={closeNav} // Close when clicking outside
    >
      <div
        className={`text-white fixed flex flex-col justify-center h-full transition-transform duration-500 delay-300 w-[80%] sm:w-[60%] bg-rose-900 space-y-6 z-[1050] ${
          showNav ? "translate-x-0" : "translate-x-[-100%]"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
      >
        {navLinks.map((link) => (
          <Link href={link.url} key={link.id}>
            <p className="text-white w-fit text-[20px] ml-12 pb-1 border-b-[1.5px] border-white sm:text-[30px]">
              {link.label}
            </p>
          </Link>
        ))}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 h-6 w-6 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MobileNav;
