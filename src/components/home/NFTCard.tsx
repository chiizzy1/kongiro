import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import { Button } from "../ui/Button";
import { EthIcon } from "@/assets";

interface NFTCardProps {
  size: string;
  id: number;
  image: StaticImageData;
  name: string;
  price: number;
}

const NFTCard: FC<NFTCardProps> = ({ size, id, image, name, price }) => {
  return (
    <div className="col-span-6 md:col-span-3">
      <div className={`flex flex-col items-center rounded-[40px] border-4 border-white card ${size == "large" ? "pt-[8px]" : ""}`}>
        <div className="rounded-[40px] h-[273px] w-[273px] bg-green-300 relative">
        <Image
          src={image}
          fill
          className="rounded-[40px] overflow-hidden"
          alt={`${name} thumbnail`}
        />
        </div>
        {size == "large" ? (
          <div className="w-full pl-[10px]">
            <div className="flex items-center">
              <h3 className="font-bold text-[48px] leading-[65px] card-name">{name}</h3>
              <span className="font-bold text-[24px] leading-[32.5px] text-white">{`#${id}`}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[14px] leading-[19px] text-secondary">Current Price</span>
              <div className="flex">
                <h4 className="font-bold text-[24px] leading-[34.5px] text-white">{`${price} Eth`}</h4>
                <span className="font-bold text-[15px] leading-[20.3px] text-secondary ml-[5px]">($600.2)</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-[9px] relative w-full">
            <h3 className="font-bold text-[24px] leading-[32.5px] card-name">{name}</h3>
            <div className="flex">
              <Image src={EthIcon} alt="Ethereum icon" />
              <h4 className="font-bold text-[15px] leading-[20.3px] text-white">{`${price} Eth`}</h4>
            </div>
          </div>
        )}

        <div className="flex gap-[25px] items-center">
          <Button size={size === "large" ? "sm" : "xs"}>Buy Now</Button>
          <Button variant="outline" size={size === "large" ? "sm" : "xs"}>
            Make Offer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
