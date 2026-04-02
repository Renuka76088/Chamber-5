import React from 'react';
import Vedio from "../assets/1600 (3).mp4";

function Associates() {
  return (
    <div className="bg-white"> {/* Pure White Background for the whole page */}
      
      {/* HERO SECTION */}
      <section className="relative w-full h-[320px] md:h-[360px] overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <img
          src="https://img.freepik.com/free-photo/stack-fabric-with-spools-thread_23-2148739441.jpg?ga=GA1.1.124606815.1772781809&semt=ais_incoming&w=740&q=80"
          alt="business"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* CONTENT */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <div className="bg-[#0d2b57] text-white text-sm px-5 py-2 rounded-md mb-5 font-medium tracking-wide">
          Associates
          </div>
          <h1 className="text-white text-[32px] md:text-[44px] font-bold uppercase tracking-tight">
          Our Textile Associates
          </h1>
        </div>
      </section>

      {/* MAP VIDEO SECTION */}
      <section className="bg-white py-12 md:py-20 flex flex-col items-center justify-center px-4">
        
        {/* Optional: Choti si heading map ke liye */}
        <div className="mb-10 text-center">
            <h2 className="text-[#0d2b57] text-2xl md:text-3xl font-semibold">Our Presence Across India</h2>
            <div className="w-20 h-1 bg-[#0d2b57] mx-auto mt-2"></div>
        </div>

        {/* VIDEO CONTAINER: Isse map ek fixed frame mein rahega */}
        <div className="w-full max-w-[1000px] bg-white shadow-sm rounded-lg overflow-hidden">
          <video
            src={Vedio}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto block"
          />
        </div>

      </section>

    </div>
  );
}

export default Associates;