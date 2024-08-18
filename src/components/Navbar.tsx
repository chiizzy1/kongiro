"use client";

import Link from "next/link";
import { navLinks } from "@/constants";
import { Button } from "./ui/Button";
import Image from "next/image";
import { Logo } from "@/assets";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Trade");
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 mt-[27px]`}>
      <div className="container mx-auto max-w-[1295px] w-full">
        <div className="flex justify-between items-center transition h-[85px] rounded-[50px] px-[32px] nav-gradient">
          <Link href="/">
            <Image src={Logo} alt="logo" />
          </Link>

          <div className="hidden lg:flex items-center gap-[37px]">
            {navLinks.map(({ id, title, link }) => (
              <ul key={id}>
                <Link href={link} onClick={() => setActive(title)}>
                  <span className={`text-[20px] leading-[27px] font-bold font-satoshi hover:text-white/70 bouncing-text ${active === title ? "text-white" : "text-secondary"}`}>
                    {title}
                  </span>
                </Link>
              </ul>
            ))}
          </div>

          <Button>Connect</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
