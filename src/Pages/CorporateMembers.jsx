import React from "react";

export default function CorporateMembers() {
  const logos = [
    "https://img.freepik.com/premium-vector/indigo-craft-woman-weaving-action-shot-vector-illustration_149225-67.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80",
    "https://img.freepik.com/free-vector/fashion-repair-service-logo-design_23-2150253054.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80",
    "https://img.freepik.com/free-vector/yellow-badge-design_1314-4.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80",
    "https://img.freepik.com/free-vector/flat-hand-drawn-sustainable-fashion-illustration_23-2148829724.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80",
    "https://img.freepik.com/premium-photo/3d-fashion-sewing-studio-icon-with-colorful-swirl_1058338-49185.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80",
    "https://img.freepik.com/free-vector/human-service-icon-logo-design_474888-2396.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80",
    "https://img.freepik.com/free-vector/isometric-colorful-concept-with-textile-factory-worker-standing-near-big-weaver-loom-3d_1284-27763.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80",
    "https://img.freepik.com/free-vector/circular-fashion-logo-template_23-2150225786.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80",
  ];

  return (
    <div className=" py-10 px-4 md:px-12 overflow-hidden">

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
        className="flex-shrink-0 mx-10 flex items-center justify-center"
      >
        <img
          src={logo}
          alt="logo"
          className="h-16 w-auto object-contain transition duration-300 hover:scale-110"
        />
      </div>
    ))}

  </div>

  {/* Fade Left */}
  <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>

  {/* Fade Right */}
  <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

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
