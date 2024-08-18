import { FC } from "react";
import Image from "next/image";
import { Button } from "../ui/Button";
import { HeroImage, UsersIcon } from "@/assets";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <section className="pt-[180px] pb-[26px]">
      <div className="container mx-auto max-w-[1270px] w-full relative">
        <div className="flex flex-col items-center gap-[64px] lg:flex-row smooth">
          <div
            className="flex flex-col items-center lg:items-start gap-[43px] pt-[70px] w-full"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            <div className="flex flex-col gap-[30px]">
              <h1 className="text-[67px] font-bold font-satoshi leading-[90.45px] text-center lg:text-left text-white max-w-[650px]">
                <span className="text-primary">Trade the Future:</span> Buy, Sell, and Own Unique NFT Arts and other Digital
                Assets.
              </h1>
              <span className="text-[20px] leading-[27px] font-bold text-center lg:text-left font-satoshi text-white">
                Empowering Trades. Elevating Collectors.
              </span>
            </div>

            <div className="flex flex-col items-center lg:items-start gap-[36px]">
              <Button>Explore</Button>
              <Image src={UsersIcon} alt="users icon group" />
            </div>
          </div>

          <Image
            src={HeroImage}
            width={535}
            height={613}
            alt="hero image"
            className="block lg:absolute lg:bottom-0 lg:right-[2%] max-w-[535px] max-h-[613px]"
            data-aos="zoom-in"
            data-aos-delay="150"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
