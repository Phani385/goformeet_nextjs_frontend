import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar custom-container">
      <Link href="/">
        <Image
          src="/assets/images/goformeetNavLogo.svg"
          alt="logo"
          width={190}
          height={40}
        />
      </Link>
      <ul className="flex gap-10">
        {navLinks.map((link, index) => (
          <li className="text-black" key={index}>
            <a href={link.route}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
