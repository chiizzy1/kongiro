import { FC } from "react";
import { trending } from "@/constants";
import NFTCard from "./NFTCard";
import Image from "next/image";
import { Button } from "../ui/Button";
import { BigCardBg } from "@/assets";

interface TrendingProps {}

const Trending: FC<TrendingProps> = ({}) => {
  let delay = 0;
  return (
    <section className="pt-[60px]">
      <div className="container mx-auto max-w-[1290px] w-full">
        <div className="flex flex-col items-center gap-[63px]">
          <div className="flex flex-col items-center">
            <h2 className="text-[55px] leading-[74.25px] font-bold font-satoshi text-center text-primary">Trending This Week</h2>
            <p className="text-[16px] leading-[21.6px] text-center font-bold font-satoshi max-w-[377px] text-secondary">
              Different types of trending categories this week, the trend will reset every week. Don’t miss the best artwork every
              week.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-[24px]">
            {trending.slice(1, 5).map(({ id, image, name, price, bigImg }) => {
              delay += 150;
              return (
                <div
                  className="col-span-12 md:col-span-6 lg:col-span-3 bg-center bg-cover bg-no-repeat h-[492px] w-[292px]"
                  style={{ backgroundImage: `url(${BigCardBg.src})` }}
                  key={id}
                  data-aos="zoom-in-up"
                  data-aos-delay={delay}
                >
                  <div className={`flex flex-col items-center rounded-[40px] p-[10px]`}>
                    <Image
                      src={bigImg}
                      width={273}
                      height={273}
                      className="rounded-[40px] overflow-hidden"
                      alt={`${name} thumbnail`}
                    />
                    <div className="w-full pl-[10px]">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-[48px] leading-[65px] font-satoshi gradientText">{name}</h3>
                        <span className="font-bold text-[24px] leading-[32.5px] font-satoshi text-white">{`#${id}`}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-[14px] leading-[19px] font-satoshi text-secondary">Current Price</span>
                        <div className="flex items-center">
                          <h4 className="font-bold text-[24px] leading-[34.5px] font-satoshi text-white">{`${price} Eth`}</h4>
                          <span className="font-bold text-[15px] leading-[20.3px] font-satoshi text-secondary ml-[5px]">
                            ($600.2)
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-[25px] items-center mt-[20px]">
                      <Button size={"sm"}>Buy Now</Button>
                      <Button variant="outline" size={"sm"}>
                        Make Offer
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
