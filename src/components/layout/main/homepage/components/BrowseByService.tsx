"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const services = [
  {
    name: "Best of What's Free",
    icon: "/images/home/browsebyservice/free.svg",
    images: [
      "/images/home/browsebyservice/1.webp",
      "/images/home/browsebyservice/11.webp",
    ],
  },
  {
    name: "Best of Netflix",
    icon: "/images/home/browsebyservice/netflix.svg",
    images: [
      "/images/home/browsebyservice/2.webp",
      "/images/home/browsebyservice/22.webp",
    ],
  },
  {
    name: "Best of Hulu",
    icon: "/images/home/browsebyservice/hulu.svg",
    images: [
      "/images/home/browsebyservice/3.webp",
      "/images/home/browsebyservice/33.webp",
    ],
  },
  {
    name: "Best of Prime Video",
    icon: "/images/home/browsebyservice/amazon_prime.svg",
    images: [
      "/images/home/browsebyservice/4.webp",
      "/images/home/browsebyservice/44.webp",
    ],
  },
  {
    name: "Best of DIRECTV STREAM",
    icon: "/images/home/browsebyservice/directv.svg",
    images: [
      "/images/home/browsebyservice/5.webp",
      "/images/home/browsebyservice/55.webp",
    ],
  },
  {
    name: "Best of Disney+",
    icon: "/images/home/browsebyservice/disney_plus.svg",
    images: [
      "/images/home/browsebyservice/6.webp",
      "/images/home/browsebyservice/66.webp",
    ],
  },
  {
    name: "Best of MAX",
    icon: "/images/home/browsebyservice/max.svg",
    images: [
      "/images/home/browsebyservice/7.webp",
      "/images/home/browsebyservice/77.webp",
    ],
  },
  {
    name: "Best of Peacock Premium",
    icon: "/images/home/browsebyservice/peacock.svg",
    images: [
      "/images/home/browsebyservice/8.webp",
      "/images/home/browsebyservice/88.webp",
    ],
  },
  {
    name: "Best of APPLE TV+",
    icon: "/images/home/browsebyservice/apple_tv_plus.svg",
    images: [
      "/images/home/browsebyservice/9.webp",
      "/images/home/browsebyservice/99.webp",
    ],
  },
  {
    name: "Best of fuboTV",
    icon: "/images/home/browsebyservice/fubo_tv.svg",
    images: [
      "/images/home/browsebyservice/5.webp",
      "/images/home/browsebyservice/55.webp",
    ],
  },
];

type CardProps = {
  movie: {
    name: string;
    icon: string;
    images: string[];
  };
};

const Card = ({ movie }: CardProps) => {
  return (
    <div className=" m-4 py-2 bg-[#1f1f1f] rounded-lg shadow-lg transition-all hover:shadow-xl">
      <div className="ml-4 flex items-center justify-center">
        <Image src={movie.icon} alt="icon" width={50} height={50} />
        <h3 className="text-white text-xl font-semibold">{movie.name}</h3>
      </div>

      <div className="ml-4 flex items-center justify-center space-x-3">
        {movie.images.map((image, index) => (
          <Image key={index} src={image} alt="icon" width={120} height={150} />
        ))}
      </div>
    </div>
  );
};

function BrowseByService() {
  return (
    <div className="p-6 px-4 sm:px-6 lg:px-[64px]">
      <h2 className="text-3xl font-bold text-center text-white mb-4">
        BROWSE BY SERVICE
      </h2>

      <Swiper
        spaceBetween={5}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        modules={[Navigation, Pagination]}
        className="flex justify-center"
      >
        {services.map((movie, index) => (
          <SwiperSlide key={index}>
            <Card movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BrowseByService;
