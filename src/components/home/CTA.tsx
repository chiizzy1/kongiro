import { FC } from "react";
import { Button } from "../ui/Button";
import Image from "next/image";
import { CtaImage } from "@/assets";

interface CTAProps {}

const CTA: FC<CTAProps> = ({}) => {
  return (
    <section className="pt-[185px]">
      <div className="container mx-auto max-w-[1109px] w-full relative">
        <div
          className="flex flex-col gap-[42px] items-center lg:items-start w-full rounded-[30px] pt-[76px] pb-[46px] pl-[50px] cta-bg"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <h3 className="text-[40px] font-normal leading-[48px] text-center lg:text-left font-monumentExtended max-w-[660px] text-white">
            GET FREE COLLECTION FOR YOUR FIRST TRANSACTION
          </h3>

          <Button variant="secondary" size="md">
            JOIN US
          </Button>
        </div>

        <Image
          src={CtaImage}
          width={461}
          height={535}
          alt="hero image"
          className="hidden lg:block absolute bottom-0 -right-[2%]"
          data-aos="zoom-in"
          data-aos-delay="150"
        />
      </div>
    </section>
  );
};

export default CTA;
