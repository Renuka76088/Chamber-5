import React from "react";

export default function NewsSection() {
  return (
    <div className="bg-[#e6e6e6] px-4 sm:px-6 md:px-10 py-6 md:py-10">
      
      {/* Heading */}
      <div className="mb-6">
        <div className="inline-block border border-[#1e3a5f] px-4 py-2 text-sm font-semibold text-[#1e3a5f] bg-white shadow-sm">
          PAREKH CHAMBER OF TEXTILE NEWS, LEGACY AND OUTREACH
        </div>
      </div>

      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
        
        {/* Left Card */}
        <div className="bg-white flex flex-col sm:flex-row shadow-md hover:shadow-lg transition">
          <div className="sm:w-1/2">
            <img
              src="https://img.freepik.com/premium-photo/conference-table-with-sign-that-says-name-state-america_984237-66029.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="sm:w-1/2 p-4 flex flex-col justify-center">
            <p className="text-xs text-blue-600 mb-2 font-medium">
              Press Release
            </p>
            <h3 className="text-sm font-semibold mb-3 leading-snug">
              PAREKH CHAMBER OF TEXTILE PSE Conclave & PSE Excellence Awards
            </h3>

            <button className="bg-[#0c2d57] hover:bg-[#15457a] transition text-white text-xs px-3 py-1 w-fit rounded">
              READ MORE
            </button>
          </div>
        </div>

        {/* Right Green Box */}
        <div className="lg:col-span-2 bg-gradient-to-br from-[#0f766e] to-[#115e59] text-white flex items-start p-4 text-sm shadow-md min-h-[120px]">
          Failed to fetch RSS feed.
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        
        {/* Legacy Card */}
        <div className="bg-white p-3 shadow-md hover:shadow-lg transition">
          <img
            src="https://img.freepik.com/premium-photo/group-people-sit-around-table-conference-room_1298309-36716.jpg"
            alt=""
            className="w-full h-full object-cover rounded"
          />
        </div>

        {/* Video Card */}
        <div className="bg-white relative shadow-md hover:shadow-lg transition overflow-hidden rounded">
          <img
            src="https://img.freepik.com/premium-photo/group-people-sit-conference-table-with-sign-them-that-says-garden_1206963-27825.jpg"
            alt=""
            className="w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-red-600 hover:scale-110 transition w-14 h-14 flex items-center justify-center rounded-full shadow-lg cursor-pointer">
              ▶
            </div>
          </div>

          {/* Bottom Caption */}
          <div className="absolute bottom-0 left-0 right-0 bg-[#0c2d57]/90 text-white text-xs px-3 py-2">
            PAREKH CHAMBER OF TEXTILE Global Business Summit
          </div>
        </div>
      </div>

      {/* PAREKH CHAMBER OF TEXTILE Partner */}
      <div className="mb-6">
        <div className="inline-block border border-[#1e3a5f] px-4 py-2 text-sm font-semibold text-[#1e3a5f] bg-white shadow-sm">
          PAREKH CHAMBER OF TEXTILE PARTNER
        </div>
      </div>

      {/* Partner Logos */}
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="min-w-[160px] sm:min-w-[180px] text-center group"
            >
              <div className="bg-white p-4 flex items-center justify-center h-[90px] sm:h-[100px] shadow-md group-hover:shadow-lg transition rounded">
                <img
                  src="https://img.freepik.com/free-vector/logo-icon-colorfuel_125964-538.jpg"
                  alt=""
                  className="object-contain h-full"
                />
              </div>

              <div className="bg-[#0c2d57] text-white text-[10px] px-2 py-2 mt-1 group-hover:bg-[#15457a] transition rounded">
                MoU between PAREKH CHAMBER OF TEXTILE and Industry Partner
              </div>
            </div>
          ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-3">
        <div className="w-2 h-2 bg-[#0c2d57] rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
}