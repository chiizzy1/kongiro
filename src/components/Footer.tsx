import { navLinks, socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="pt-[178px] pb-[41px]">
      <div className="container mx-auto max-w-[1157px] w-full">
        <div className="flex flex-col gap-[59px]">
          <div className="flex flex-col lg:flex-row items-center gap-[24px] lg:justify-between pb-[24px] border-b-[1px]">
            <div className="flex items-center gap-[37px]">
              {navLinks.map(({ id, title, link }) => (
                <ul key={id}>
                  <Link href="">
                    <span className={`text-[20px] leading-[27px] font-bold font-satoshi text-secondary hover:text-white/70 bouncing-text`}>{title}</span>
                  </Link>
                </ul>
              ))}
            </div>
            <div className="flex items-center gap-[20px]">
              {socials.map(({ icon, id, link }) => (
                <Image key={id} src={icon} alt="icon" className="cursor-pointer" />
              ))}
            </div>
          </div>

          <span className="text-[14px] leading-[17px] font-bold font-monumentExtended text-center text-secondary">
            Copyright © KONGIRO 2024 | Designed by{" "}
            <Link className="text-primary" href={"https://x.com/Davidoshconcept"}>
              David Osh
            </Link>{" "}
            - Built by{" "}
            <Link className="text-primary" href={"https://izzydev.vercel.app/"}>
              IzzyDev
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
