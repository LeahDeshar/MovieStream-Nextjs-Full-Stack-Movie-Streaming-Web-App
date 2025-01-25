// "use client";
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// type CardProps = {
//   image: string;
//   title: string;
//   alt: string;
// };

// const Card = ({ image, title, alt }: CardProps) => {
//   return (
//     <div className="relative m-2 p-2 bg-[#1f1f1f] rounded-lg group hover:shadow-lg transition-all">
//       <img
//         className="rounded-lg w-full h-[320px] object-cover group-hover:opacity-80 transition-all"
//         src={image}
//         alt={alt}
//       />
//       <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all">
//         <p className="text-white text-lg font-semibold">{title}</p>
//       </div>
//     </div>
//   );
// };

// const FavPick = () => {
//   const movies = [
//     {
//       image:
//         "https://img.rgstatic.com/content/movie/2516246b-3157-49e8-b4a7-2cade0e84e51/poster-185.webp",
//       title: "My Old Ass",
//       alt: "My Old Ass",
//     },
//     {
//       image:
//         "https://img.rgstatic.com/content/movie/8261b2e1-704a-4274-b5ef-dc8f6284a0a6/poster-185.webp",
//       title: "The Tomorrow War",
//       alt: "The Tomorrow War",
//     },
//     {
//       image:
//         "https://img.rgstatic.com/content/movie/0573a7b7-0eab-4a78-9bb1-a3f4b4a1cda6/poster-185.webp",
//       title: "The Tomorrow War",
//       alt: "The Tomorrow War",
//     },
//     {
//       image:
//         "https://img.rgstatic.com/content/movie/3ac17510-81cf-49d7-872d-c05df0ede0ee/poster-185.webp",
//       title: "The Tomorrow War",
//       alt: "The Tomorrow War",
//     },
//     {
//       image:
//         "https://img.rgstatic.com/content/movie/0bbeb88f-fa9b-4c0a-b1ef-15c358a9a163/poster-185.webp",
//       title: "The Tomorrow War",
//       alt: "The Tomorrow War",
//     },
//   ];

//   return (
//     <div className="p-6 px-4 sm:px-6 lg:px-[64px]">
//       <h2 className="text-3xl font-bold text-center text-white mb-8">
//         Fave Picks on Prime Video
//       </h2>
//       <Swiper
//         spaceBetween={20}
//         slidesPerView={1}
//         breakpoints={{
//           640: {
//             slidesPerView: 2,
//           },
//           1024: {
//             slidesPerView: 3,
//           },
//         }}
//         className="flex justify-center"
//       >
//         {movies.map((movie, index) => (
//           <SwiperSlide key={index}>
//             <Card image={movie.image} title={movie.title} alt={movie.alt} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default FavPick;

"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type CardProps = {
  image: string;
  title: string;
  alt: string;
};
const Card = ({ image, title, alt }: CardProps) => {
  return (
    <div className="relative m-2 p-2 bg-[#1f1f1f] rounded-lg group hover:shadow-lg transition-all">
      <img
        className="rounded-lg w-full h-[320px] object-cover group-hover:opacity-80 transition-all"
        src={image}
        alt={alt}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all">
        <p className="text-white text-lg font-semibold">{title}</p>
      </div>
    </div>
  );
};

const FavPick = () => {
  const movies = [
    {
      image:
        "https://img.rgstatic.com/content/movie/2516246b-3157-49e8-b4a7-2cade0e84e51/poster-185.webp",
      title: "My Old Ass",
      alt: "My Old Ass",
    },
    {
      image:
        "https://img.rgstatic.com/content/movie/8261b2e1-704a-4274-b5ef-dc8f6284a0a6/poster-185.webp",
      title: "The Tomorrow War",
      alt: "The Tomorrow War",
    },
    {
      image:
        "https://img.rgstatic.com/content/movie/0573a7b7-0eab-4a78-9bb1-a3f4b4a1cda6/poster-185.webp",
      title: "The Tomorrow War",
      alt: "The Tomorrow War",
    },
    {
      image:
        "https://img.rgstatic.com/content/movie/3ac17510-81cf-49d7-872d-c05df0ede0ee/poster-185.webp",
      title: "The Tomorrow War",
      alt: "The Tomorrow War",
    },
    {
      image:
        "https://img.rgstatic.com/content/movie/0bbeb88f-fa9b-4c0a-b1ef-15c358a9a163/poster-185.webp",
      title: "The Tomorrow War",
      alt: "The Tomorrow War",
    },
  ];

  return (
    <div className="p-6 px-4 sm:px-6 lg:px-[64px]">
      <h2 className="text-3xl font-bold text-center text-white mb-4">
        Fave Picks on Prime Video
      </h2>
      {/* <p className="text-center text-sm text-gray-400 mb-8">
        Swipe or use arrows to see more
      </p> */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Navigation, Pagination]}
        className="flex justify-center"
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <Card image={movie.image} title={movie.title} alt={movie.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FavPick;
