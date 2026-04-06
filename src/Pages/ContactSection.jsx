import React from "react";

export default function ContactSection() {
  return (
    <div className="relative w-full min-h-screen text-white">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://img.freepik.com/free-photo/texture-orange-red-crumpled-fabric_23-2148516009.jpg?ga=GA1.1.124606815.1772781809&semt=ais_incoming&w=740&q=80"
          alt="bg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0b2c4a]/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* LEFT SIDE */}
        <div>
          {/* Small Title */}
          <p className="text-sm tracking-widest text-orange-400 mb-2 flex items-center gap-2">
            <span className="w-6 h-[2px] bg-orange-400"></span>
            CONTACT US
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
            Do You Have any <br />
            <span className="text-orange-500">Questions?</span>
          </h2>

          {/* FORM */}
          <form className="space-y-4 max-w-xl">
            
            {/* Name */}
            <input
              type="text"
              placeholder="Your Name *"
              className="w-full bg-transparent border border-white/40 px-4 py-3 text-sm focus:outline-none focus:border-white"
            />

            {/* Phone + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              
              {/* Country Code */}
              <select className="bg-white text-black px-2 py-3 text-sm rounded">
                <option>+91</option>
              </select>

              {/* Phone */}
              <input
                type="text"
                placeholder="Phone Number *"
                className="col-span-2 sm:col-span-1 bg-transparent border border-white/40 px-4 py-3 text-sm focus:outline-none"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Your Email *"
                className="col-span-3 sm:col-span-1 bg-transparent border border-white/40 px-4 py-3 text-sm focus:outline-none"
              />
            </div>

            {/* Message */}
            <textarea
              rows="4"
              placeholder="Message *"
              className="w-full bg-transparent border border-white/40 px-4 py-3 text-sm focus:outline-none"
            ></textarea>

            {/* Info Row */}
            <div className="flex justify-between text-xs text-white/70">
              <span>Maximum 200 characters.</span>
              <span>0 / 200</span>
            </div>

            {/* CAPTCHA */}
            <div>
              <p className="text-sm mb-2">Verification *</p>

              <div className="flex items-center gap-3 mb-2">
                <div className="bg-white text-black px-4 py-2 text-sm rounded">
                  2b7k
                </div>
                <button type="button" className="text-xs underline">
                  Refresh
                </button>
              </div>

              <input
                type="text"
                placeholder="Enter Answer"
                className="w-full bg-transparent border border-white/40 px-4 py-3 text-sm focus:outline-none"
              />
            </div>

            {/* Button */}
            <button className="mt-4 bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full text-sm font-semibold">
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-center">
          
          <h3 className="text-xl md:text-2xl font-semibold mb-6">
            Are You Going to <br /> Implement Project?
          </h3>

          {/* Address */}
          <div className="mb-6 text-sm leading-relaxed text-white/90">
            <p className="uppercase text-xs text-white/60 mb-2">
              Head Office
            </p>
      
BENGALURU, KA, INDIA - 560001,<br />
            
          </div>

          {/* Info Text */}
          <p className="text-sm leading-relaxed text-white/90">
            If you have specific Trade / B2B Query/Requirement, please{" "}
            <span className="text-orange-400 font-semibold">
              Login or Register
            </span>{" "}
            and place your 'Service Request'. <br />
            You will get prompt service from our team.
          </p>
        </div>
      </div>
    </div>
  );
}