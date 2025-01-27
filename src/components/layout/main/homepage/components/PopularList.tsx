"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const actorsAndDirectors = [
  { name: "Leonardo DiCaprio" },
  { name: "Quentin Tarantino" },
  { name: "Robert Downey Jr." },
  { name: "Christopher Nolan" },
  { name: "Emma Stone" },
  { name: "Steven Spielberg" },
  { name: "Meryl Streep" },
  { name: "Martin Scorsese" },
  { name: "Tom Hanks" },
  { name: "Scarlett Johansson" },
  { name: "Leonardo DiCaprio" },
  { name: "Quentin Tarantino" },
  { name: "Robert Downey Jr." },
  { name: "Christopher Nolan" },
  { name: "Emma Stone" },
  { name: "Steven Spielberg" },
  { name: "Meryl Streep" },
  { name: "Martin Scorsese" },
  { name: "Tom Hanks" },
  { name: "Scarlett Johansson" },
];

const getRandomHexColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const getRandomGradient = () => {
  const color1 = getRandomHexColor();
  const color2 = getRandomHexColor();
  return `linear-gradient(to right, ${color1}, ${color2})`;
};

const getInitials = (name: string) => {
  const [firstName, lastName] = name.split(" ");
  return `${firstName[0]}${lastName ? lastName[0] : ""}`;
};

const Card = ({ name }: { name: string }) => {
  const initials = getInitials(name);
  const gradient = getRandomGradient();

  return (
    <div className="flex items-center justify-center m-4 py-2 bg-[#1f1f1f] rounded-lg shadow-lg transition-all hover:shadow-xl">
      <div
        className="w-14 h-14 flex items-center justify-center rounded-full"
        style={{ background: gradient }}
      >
        <span className="text-white text-md font-bold">{initials}</span>
      </div>
      <div className="ml-4">
        <h3 className="text-white text-xl font-semibold">{name}</h3>
      </div>
    </div>
  );
};

function PopularList() {
  return (
    <div className="p-6 px-4 sm:px-6 lg:px-[64px]">
      <h2 className="text-3xl font-bold text-center text-white mb-4">
        POPULAR ACTORS AND DIRECTORS
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
        {actorsAndDirectors.map((movie, index) => (
          <SwiperSlide key={index}>
            <Card name={movie.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PopularList;
