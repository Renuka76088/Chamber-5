import React from "react";

export default function CorporateMembers() {
  const logos = [
    "https://source.unsplash.com/200x100/?brand,logo",
    "https://source.unsplash.com/200x100/?company,logo",
    "https://source.unsplash.com/200x100/?tech,logo",
    "https://source.unsplash.com/200x100/?startup,logo",
    "https://source.unsplash.com/200x100/?business,logo",
    "https://source.unsplash.com/200x100/?corporate,logo",
    "https://source.unsplash.com/200x100/?finance,logo",
    "https://source.unsplash.com/200x100/?industry,logo",
  ];

  return (
    <div className="bg-[#efefef] py-10 px-4 md:px-12 overflow-hidden">

      {/* TITLE */}
      <div className="border border-gray-400 inline-block px-6 py-2 mb-10">
        <h2 className="font-bold text-[#0c2d57] text-lg tracking-wide">
          CORPORATE MEMBERS
        </h2>
      </div>

      {/* SLIDER */}
      <div className="relative w-full overflow-hidden">
        
        {/* Track */}
        <div className="flex animate-[scroll_20s_linear_infinite]">
          
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <img
                src={logo}
                alt="logo"
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}

        </div>

        {/* Fade Left */}
        <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-[#efefef] to-transparent pointer-events-none"></div>

        {/* Fade Right */}
        <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-[#efefef] to-transparent pointer-events-none"></div>

      </div>

      {/* Custom Animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

    </div>
  );
}
