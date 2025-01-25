import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0a0f1b] via-[#0a0f1b] to-[#144e3890] text-white py-16">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-8 text-center sm:text-left">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#00dc89]">
              About Us
            </h3>
            <p className="text-sm text-gray-400">
              Discover all your streaming needs in one place. Explore, watch,
              and enjoy TV shows and movies from over 300 services.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#00dc89]">
              Quick Links
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="#" className="hover:text-[#00dc89]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00dc89]">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00dc89]">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00dc89]">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 pt-8">
          <div className="text-center sm:text-left">
            <p className="text-sm text-gray-400">
              © 2025 Reelgood, All Rights Reserved.
            </p>
          </div>

          <div className="mt-4 sm:mt-0 flex justify-center">
            <button className="bg-gradient-to-r from-[#00ffb3] via-[#00dc89] to-[#008e5d] text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transform transition-all shadow-lg">
              Join the Community
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
