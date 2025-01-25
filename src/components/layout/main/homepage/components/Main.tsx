import Image from "next/image";
import Link from "next/link";
import React from "react";

function Main() {
  return (
    <main
      className="relative bg-cover bg-center bg-no-repeat px-6 sm:px-16 py-14 sm:py-24 text-white min-h-screen flex flex-col justify-center"
      style={{
        backgroundImage: "url('/images/home/hero/hero_img.svg')",
      }}
    >
      <div className="relative z-10 max-w-xl mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
          All your streaming services in one place.
        </h1>
        <div className="my-8">
          <p className="mt-4 text-sm sm:text-xl text-gray-400">
            Browse, search, and watch TV & Movies from over 300+ services across
            many regions.{" "}
            <Link
              className="mt-6 font-semibold text-[14px] text-gray-400 underline"
              href={""}
            >
              Learn More
            </Link>
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-6 mt-10">
        <button className="bg-gradient-to-r from-[#00ffb3] via-[#00dc89] to-[#008e5d] px-6 py-3 rounded-full font-semibold text-black hover:shadow-lg hover:scale-105 transition-transform text-sm sm:text-base">
          ADD YOUR SERVICES
        </button>

        <div className="flex items-center space-x-4 mt-3">
          <a href="#" aria-label="App Store">
            <Image
              src="/images/home/hero/appstore.svg"
              alt="App Store"
              width={120}
              height={40}
              className="hover:scale-105 transition-transform"
            />
          </a>
          <a href="#" aria-label="Google Play Store">
            <Image
              src="/images/home/hero/googleplay.png"
              alt="Google Play Store"
              width={120}
              height={40}
              className="hover:scale-105 transition-transform"
            />
          </a>
        </div>
      </div>
    </main>
  );
}

export default Main;
