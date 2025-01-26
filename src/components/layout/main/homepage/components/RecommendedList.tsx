"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CardProps } from "@/types/home.types";
const Card = ({ image, title, alt }: CardProps) => {
  return (
    <div className="relative m-2  rounded-lg group hover:shadow-lg transition-all">
      <img
        className="rounded-lg w-full h-[150px] object-cover group-hover:opacity-80 transition-all"
        src={image}
        alt={alt}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all">
        <p className="text-white text-lg font-semibold">{title}</p>
      </div>
    </div>
  );
};

function RecommendedList() {
  const recommendList = [
    {
      image:
        "https://img.rgstatic.com/collections/genre/science-fiction/both/card@1x.jpg",
      title: "Best Sci-Fi",
      alt: "Best Sci-Fi",
    },
    {
      image:
        "https://img.rgstatic.com/collections/tag/woman-director/both/card@1x.jpg",
      title: "Female Directors",
      alt: "Female Directors",
    },
    {
      image:
        "https://img.rgstatic.com/collections/curated/1980s-action/movie/card@1x.jpg",
      title: "80s Action",
      alt: "80s Action",
    },
    {
      image: "https://img.rgstatic.com/collections/tag/disney/both/card@1x.jpg",
      title: "Disney Movies & TV",
      alt: "Disney Movies & TV",
    },
    {
      image:
        "https://img.rgstatic.com/collections/curated/a24-movies-shows/both/card@1x.jpg",
      title: "A24's Independent Essentials",
      alt: "A24's Independent Essentials",
    },
    {
      image:
        "https://img.rgstatic.com/collections/genre/comedy/both/card@1x.jpg",
      title: "Best Comedies",
      alt: "Best Comedies",
    },
    {
      image:
        "https://img.rgstatic.com/content/movie/8261b2e1-704a-4274-b5ef-dc8f6284a0a6/poster-185.webp",
      title: "Great Movies Under 90 Minutes",
      alt: "Great Movies Under 90 Minutes",
    },
    {
      image:
        "https://img.rgstatic.com/content/movie/0573a7b7-0eab-4a78-9bb1-a3f4b4a1cda6/poster-185.webp",
      title: "Best Korean Films",
      alt: "Best Korean Films",
    },
    {
      image:
        "https://img.rgstatic.com/content/movie/3ac17510-81cf-49d7-872d-c05df0ede0ee/poster-185.webp",
      title: "ReelGood's Best of the Decade",
      alt: "ReelGood's Best of the Decade",
    },
    {
      image:
        "https://img.rgstatic.com/content/movie/0bbeb88f-fa9b-4c0a-b1ef-15c358a9a163/poster-185.webp",
      title: "Detective Movies & Shows",
      alt: "Detective Movies & Shows",
    },
  ];

  return (
    <div className="p-6 px-4 sm:px-6 lg:px-[64px]">
      <h2 className="text-3xl font-bold text-center text-white mb-4">
        RECOMMENDED LIST
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
            slidesPerView: 6,
          },
        }}
        modules={[Navigation, Pagination]}
        className="flex justify-center"
      >
        {recommendList.map((movie, index) => (
          <SwiperSlide key={index}>
            <Card image={movie.image} title={movie.title} alt={movie.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default RecommendedList;
