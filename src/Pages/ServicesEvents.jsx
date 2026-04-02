import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ServicesEvents() {
  const services = [
    "B2B Matchmaking",
    "PAREKH CHAMBER OF TEXTILE Council of Arbitration",
    "Certificate of Origin",
    "Business Information Services",
    "Visa Recommendation",
    "International Business Support",
    "PAREKH CHAMBER OF TEXTILE Publications",
    "B2B Leads & Enquiry",
    "Investment Matchmaking",
    "Venue Booking",
  ];

   const slides = [
    {
      img: "https://img.freepik.com/free-photo/business-event_53876-138077.jpg",
      title: "18th PAREKH CHAMBER OF TEXTILE Capital Markets Summit",
      date: "23/05/2026 - 23/05/2026",
    },
    {
      img: "https://img.freepik.com/free-photo/business-people-meeting_53876-104515.jpg",
      title: "Global Business Meet 2026",
      date: "10/06/2026 - 12/06/2026",
    },
    {
      img: "https://img.freepik.com/free-photo/group-business-people-working-office_1303-22863.jpg",
      title: "International Trade Summit",
      date: "01/07/2026 - 03/07/2026",
    },
  ];

    const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-gray-100 py-12 px-4 md:px-12">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* ================= LEFT: SERVICES ================= */}
        <div>
          {/* TITLE */}
          <div className="border border-gray-400 inline-block px-6 py-2 mb-6">
            <h2 className="font-bold text-[#0c2d57] text-lg tracking-wide">
              SERVICES
            </h2>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {services.map((item, i) => (
              <div
                key={i}
                className="h-28 flex items-center justify-center text-center text-white text-sm font-medium px-3
                bg-gradient-to-r from-cyan-400 to-blue-700 hover:scale-105 transition"
              >
                {item}
              </div>
            ))}

          </div>
        </div>

        {/* ================= RIGHT: EVENTS ================= */}
    <div>
      {/* TITLE */}
      <div className="border border-gray-400 inline-block px-6 py-2 mb-6">
        <h2 className="font-bold text-[#0c2d57] text-lg tracking-wide">
          UPCOMING EVENTS
        </h2>
      </div>

      {/* SLIDER */}
      <div className="relative bg-[#0c2d57] text-white overflow-hidden h-[300px] md:h-[350px]">

        {/* LEFT ARROW */}
        <div
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-md p-2 rounded-full cursor-pointer hover:bg-white/40 transition"
        >
          <ChevronLeft />
        </div>

        {/* RIGHT ARROW */}
        <div
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-md p-2 rounded-full cursor-pointer hover:bg-white/40 transition"
        >
          <ChevronRight />
        </div>

        {/* SLIDES */}
        <div
          className="flex h-full transition-transform duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="min-w-full flex flex-col md:flex-row h-full"
            >
              {/* IMAGE */}
              <div className="md:w-1/2 h-1/2 md:h-full">
                <img
                  src={slide.img}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="md:w-1/2 p-6 flex flex-col justify-center">
                <h3 className="text-lg md:text-xl font-semibold mb-3">
                  {slide.title}
                </h3>

                <p className="text-orange-400 mb-4">
                  {slide.date}
                </p>

                <button className="bg-orange-500 px-5 py-2 rounded-md font-medium w-fit hover:bg-orange-600 transition">
                  VIEW DETAIL
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

      </div>
    </div>
  );
}
