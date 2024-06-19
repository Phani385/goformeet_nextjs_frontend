import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import DownloadAppModal from "./DownloadAppModal";

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
      <ul className="flex items-center gap-4">
        {navLinks.map((link, index) => (
          <li className="text-black" key={index}>
            <a href={link.route}>{link.label}</a>
          </li>
        ))}
        <li>
          <DownloadAppModal>
            <div className="border-gradient">
              <Button className="login-button">Login</Button>
            </div>
          </DownloadAppModal>
        </li>
        <li>
          <DownloadAppModal>
            <Button className="sign-in-button">Sign Up</Button>
          </DownloadAppModal>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
