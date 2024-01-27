import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-400 p-10 mb-4 flex justify-between items-center text-black font-bold text-xl">
      <Link href={"/"}>Home</Link>
      <ul>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
