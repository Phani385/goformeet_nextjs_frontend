import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

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
      <ul className="flex items-center gap-10">
        {navLinks.map((link, index) => (
          <li className="text-black" key={index}>
            <a href={link.route}>{link.label}</a>
          </li>
        ))}
        <li>
          <Button className="bg-[#E03300] hover:bg-[#E03300]">Sign In</Button>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;
