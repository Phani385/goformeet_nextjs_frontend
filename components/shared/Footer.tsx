"use client";

import { usePathname } from "next/navigation";
import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer
      className="footer"
    >
      <div className="w-1/4">
        <Image
          src="/assets/images/goformeetNavLogo.svg"
          alt="logo"
          width={200}
          height={200}
        />
        <p>
          Welcome to #Goformeet, your premier platform for guaranteed meetings
          with top professionals across various industries.
        </p>
        <div className="flex gap-3 mt-3">
          <Link href="/">
            <Image
              src="/assets/icons/facebook.svg"
              alt="Facebook"
              className="footer-social-link"
              width={26}
              height={26}
            />
          </Link>
          <Link href="/">
            <Image
              src="/assets/icons/twitter.svg"
              alt="Twitter"
              className="footer-social-link"
              width={30}
              height={30}
            />
          </Link>
          <Link href="/">
            <Image
              src="/assets/icons/instagram.svg"
              alt="Instagram"
              className="footer-social-link"
              width={30}
              height={30}
            />
          </Link>
          <Link href="/">
            <Image
              src="/assets/icons/linkedin.svg"
              alt="Linkedin"
              className="footer-social-link"
              width={30}
              height={30}
            />
          </Link>
          <Link href="/">
            <Image
              src="/assets/icons/youtube.svg"
              alt="Youtube"
              className="footer-social-link"
              width={30}
              height={30}
            />
          </Link>
        </div>
      </div>
      <ul>
        {footerLinks.map((link, index) => (
          <li>
            <Link
              href={link.route}
              key={index}
              className={`block mb-4 ${
                pathname === link.route ? "text-black font-bold" : ""
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <div className="flex flex-wrap lg:flex-row gap-4 lg:items-center">
          <div>
            <h2 className="font-bold text-xl">How can we help?</h2>
            <p className="text-xl text-[#E03300] font-semibold">Contact us anytime.</p>
          </div>
          <div className="bg-white px-6 py-3 rounded-md flex gap-8 w-fit">
            <div className="border-r-2 flex-1 pr-8">
              <p className="text-[#B3BABF] ">SEND US A MESSAGE</p>
              <p className="text-[#040C12] text-lg">info@goformeet.com</p>
            </div>
            <div className="flex-1">
              <p className="text-[#B3BABF] ">CALL US</p>
              <p className="text-[#040C12] text-lg">+91 123 456 7890</p>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 lg:pl-16">
        <Image src="/assets/images/goformeetFooter.svg" alt="Footer Image" width={450} height={200} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
