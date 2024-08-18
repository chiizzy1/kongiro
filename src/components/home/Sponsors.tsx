"use client";

import { sponsors } from "@/constants";
import Image from "next/image";
import { FC } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { A11y, Autoplay } from "swiper/modules";

interface SponsorsProps {}

const Sponsors: FC<SponsorsProps> = ({}) => {
  return (
    <section className="pt-[41px]">
      <div className="container mx-auto max-w-[1267px] w-full">
        <div className="relative h-[126px] flex items-center">
          {/* Fading top border */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

          <Swiper
            spaceBetween={42}
            slidesPerView={8}
            loop={true}
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: true,
            }}
            grabCursor={true}
            breakpoints={{
              500: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 8,
                spaceBetween: 17,
              },
            }}
            modules={[A11y, Autoplay]}
            className=""
          >
            {sponsors.map(({ id, logo, name }) => (
              <SwiperSlide key={id}>
                <div className="w-[130px] h-[40px] flex items-center">
                  <Image src={logo} alt={`${name} logo`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Fading bottom border */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
