import { ChevronLeft, ChevronRight } from "lucide-react";

const sectors = [
  "Mineral and Metals",
  "Occupational Health and Safety",
  "Railways",
  "Startup and Entrepreneurship",
  "Technology ,Innovation and Advancement",
  "Urban Infrastructure",
  "MSME Skill Development",
  "Oil and Gas",
  "Sports",
  "Tea",
  "Textile and Jute",
  "Water",
];

export default function SectorsSection() {
  return (
    <div className="bg-[#2a76a8] py-16 px-6 relative">
      
      {/* Title */}
      <div className="mb-12">
        <div className="bg-gray-200 inline-block px-6 py-3 font-bold text-[#0c2d57] text-lg tracking-wide">
          SECTORS
        </div>
      </div>

      {/* Left Arrow */}
      <button className="absolute left-2 top-1/2 -translate-y-1/2 text-white">
        <ChevronLeft size={28} />
      </button>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 border-t border-white/40">
        {sectors.map((sector, index) => (
          <div
            key={index}
            className="border-r border-b border-white/40 flex flex-col items-center justify-center text-center px-4 py-10 min-h-[160px]"
          >
            {/* Icon Placeholder */}
            <div className="w-10 h-8 bg-gray-300 mb-4"></div>

            {/* Text */}
            <p className="text-white text-sm font-medium leading-snug">
              {sector}
            </p>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white">
        <ChevronRight size={28} />
      </button>
    </div>
  );
}