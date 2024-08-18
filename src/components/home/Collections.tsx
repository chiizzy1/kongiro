import { BigLogo, EthIcon, SmallCardBg, UsersIcon } from "@/assets";
import { trending } from "@/constants";
import Image from "next/image";
import { FC } from "react";
import NFTCard from "./NFTCard";
import { Button } from "../ui/Button";

interface CollectionsProps {}

const Collections: FC<CollectionsProps> = ({}) => {
  let delay = 0;
  return (
    <section className="pt-[89px]">
      <div className="container mx-auto max-w-[1154px] w-full">
        <div className="flex flex-col items-center gap-[67px]">
          <div className="flex flex-col items-center">
            <h2 className="text-[55px] leading-[74.25px] font-bold font-satoshi text-center text-primary">
              Discover The Collection
            </h2>
            <p className="text-[16px] leading-[21.6px] text-center font-bold font-satoshi max-w-[363px] text-secondary">
              Our Collection is the best so far you can click on button below to see more of <br /> out collections..
            </p>
            <Image src={BigLogo} alt="logo" />
          </div>

          <div className="grid grid-cols-12 gap-[24px]">
            {trending.map(({ id, image, name, price }) => {
              delay += 150;
              return (
                <div
                  className="relative col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3 bg-center bg-cover bg-no-repeat h-[298px] w-[236.2px]"
                  style={{ backgroundImage: `url(${SmallCardBg.src})` }}
                  key={id}
                  data-aos="zoom-in-up"
                  data-aos-delay={delay}
                >
                  <div className={`flex flex-col items-center rounded-[40px] p-[10px]`}>
                    <Image
                      src={image}
                      width={273}
                      height={273}
                      className="rounded-[40px] overflow-hidden"
                      alt={`${name} thumbnail`}
                    />
                    <div className="flex flex-col gap-[9px] relative w-full mt-[6px] pl-[11px]">
                      <h3 className="font-bold text-[24px] leading-[32.5px] font-satoshi gradientText">{name}</h3>
                      <div className="flex items-center gap-[2px]">
                        <Image src={EthIcon} alt="Ethereum icon" />
                        <h4 className="font-bold text-[15px] leading-[20.3px] font-satoshi text-white">{`${price} Eth`}</h4>
                      </div>
                    </div>
                    <div className="flex gap-[20px] mt-[16.5px] items-center">
                      <Button size="xs">Buy Now</Button>
                      <Button variant="outline" size="xs">
                        Make Offer
                      </Button>
                    </div>
                  </div>
                  <Image src={UsersIcon} width={74} className="absolute top-[70%] right-[7%]" alt="users icon group" />
                </div>
              );
            })}
          </div>

          <Button>See More</Button>
        </div>
      </div>
    </section>
  );
};

export default Collections;
