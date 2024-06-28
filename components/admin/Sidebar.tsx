"use client";

import { adminSidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="py-8 px-10">
      <div>
        <Image
          src="/assets/images/goformeetNavLogo.svg"
          alt="logo"
          width={190}
          height={40}
        />
      </div>
      <ul className="mt-8">
        {adminSidebarLinks.map((link, index) => (
          <li
            key={index}
            className={`my-5 ${
              pathname === link.pathName ? "text-[#E03320] font-bold" : ""
            }`}
          >
            <Link href={link.pathName}>{link.displayName}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
