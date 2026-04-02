import React, { useEffect, useRef, useState } from "react";

const features = [
  {
    id: "1",
    title: "Long-Standing Reputation",
    desc: " PAREKH CHAMBER OF TEXTILE has a long-standing reputation as a premier business facilitator, leveraging its extensive network, industry expertise, and strong collaborations with government bodies and trade associations. Through the B2B Desk,...",
  },
  {
    id: "2",
    title: "Global Reach",
    desc: " PAREKH CHAMBER OF TEXTILE’s global reach and partnerships with international trade organizations, embassies, and investment promotion agencies allow businesses to access exclusive networking opportunities and expand into new markets. Our deep...",
  },
  {
    id: "3",
    title: "Fosters Long-Term Business Growth",
    desc: "By choosing  PAREKH CHAMBER OF TEXTILE’s B2B Desk, businesses benefit from a structured and reliable platform that goes beyond just connecting contacts – we offer a complete ecosystem that fosters long-term business growth, investment...",
  },
];

export default function About() {

const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);


  return (

    <>
    
    <section className="w-full">

      {/* TOP GREEN BAR */}
      <div className="bg-[#b7d86f] text-center text-[#0c2d57] text-sm py-2 font-medium">
        Have a B2B or Trade query? Simply{" "}
        <span className="font-semibold underline cursor-pointer">
          REGISTER HERE
        </span>{" "}
        or{" "}
        <span className="font-semibold underline cursor-pointer">
          LOGIN
        </span>
        , and place your request. We’ll get back to you soon.
      </div>

      {/* HERO */}
      <div className="relative h-[420px] md:h-[460px] overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
          alt="logistics"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* ORANGE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f26522]/95 via-[#f26522]/85 to-[#f26522]/60" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 h-full flex flex-col justify-center">

          {/* SMALL HEADING LINE */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-white" />
            <p className="text-white text-sm tracking-wide font-semibold">
              Parekh Chamber Of Textile BUSINESS DESK – YOUR GATEWAY TO GLOBAL BUSINESS CONNECTIONS
            </p>
          </div>

          {/* MAIN TEXT */}
          <p className="text-white text-lg md:text-xl leading-9 max-w-3xl font-medium">
            The Business Desk of the Indian Chamber of Commerce (Parekh Chamber Of Textile) is a
            one-stop solution for expanding your businesses reach, find potential
            partners and explore new markets. Whether you are seeking business
            associates, market intelligence or regulatory insights, Parekh Chamber Of Textile’s B2B
            Desk offers seamless facilitation to connect you with the right
            stakeholders across industries in India and abroad.
          </p>

          {/* BUTTON */}
          <button className="mt-8 bg-[#1e2a33] hover:bg-black text-white px-8 py-3 rounded-full text-lg font-medium w-fit shadow-lg">
            Consult Now
          </button>
        </div>

        {/* CHAT ICON */}
        <div className="absolute bottom-6 left-6 bg-blue-600 w-14 h-14 rounded-full flex items-center justify-center shadow-lg cursor-pointer">
          💬
        </div>

      </div>
    </section>

      <section
      ref={sectionRef}
      className="relative bg-[#f3f5f8] py-20 overflow-hidden"
    >
      {/* WORLD MAP BG */}
      <div className="absolute inset-0 opacity-[0.15]">
        <img
          src="https://img.freepik.com/premium-vector/india-map-futuristic-line-vector-illustration_312502-74.jpg?w=1060"
          alt="map"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">

        {/* TOP */}
        <div className="text-center mb-14">
          <div className="flex justify-center items-center gap-3 mb-2">
            <div className="w-10 h-[2px] bg-blue-500"></div>
            <p className="text-sm font-semibold text-gray-600 tracking-wide">
              ABOUT US
            </p>
          </div>

          <h2 className="text-[34px] md:text-[40px] font-bold text-[#4a86d4]">
            About Parekh Chamber Of Textile Business Desk
          </h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
        <div className="flex flex-col items-center md:items-right text-center md:text-right">
            
            <div className="text-[130px] md:text-[180px] font-extrabold leading-none bg-clip-text text-transparent bg-[url('https://images.unsplash.com/photo-1505761671935-60b3a7427bad')] bg-cover bg-center">
  20+
</div>

            <p className="mt-4 text-xl font-medium text-gray-800">
              Years In The Industry
            </p>
          </div>

          {/* RIGHT */}
          <div
            className={`relative transform transition-all duration-1000 delay-200 ${
              visible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            }`}
          >
            {/* ORANGE LINE */}
            <div className="hidden md:block absolute right-0 top-0 h-full w-[4px] bg-[#f26522] rounded-full"></div>

            <div className="space-y-5 text-[15.5px] text-gray-700 leading-7 pr-6">

              <p>
                Leveraging its extensive network of 26 overseas Representative Offices and 12 offices across India, the Indian Chamber of Commerce (Parekh Chamber Of Textile) dynamically facilitates exclusive business meetings and seamless networking opportunities:
              </p>

              <p className="font-semibold">Our Services:</p>

              <ul className="space-y-4">
                {[
                  "Exclusive B2B Arrangements – Organizing site visits, facilitating buy/sell assets, and exploring equity stakes.",
                  "Business Matchmaking – Connecting buyers and sellers, facilitating meetings, and enabling collaborations.",
                  "Economic & Market Research – Providing insights on industry trends, trade policies, and investment opportunities.",
                  "Trade Rules & Regulations – Assisting businesses in understanding global trade compliance and procedures.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">

                    {/* BULLET */}
                    <span className="mt-[6px] w-[14px] h-[14px] border-2 border-[#f26522] rounded-full flex-shrink-0"></span>

                    <span>{item}</span>
                  </li>
                ))}
              </ul>

            </div>
          </div>

        </div>
      </div>
    </section>

      <section className="bg-[#f3f5f8] py-16 px-6 md:px-12">
      
      {/* TOP HEADING */}
      <div className="max-w-7xl mx-auto mb-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-[2px] bg-blue-500"></div>
          <p className="text-xs tracking-widest text-gray-600 font-semibold">
            WHY CHOOSE US
          </p>
        </div>

        <h2 className="text-[32px] md:text-[38px] font-bold text-gray-900">
          What Makes Us{" "}
          <span className="text-blue-500">Different</span>
        </h2>
      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 border border-gray-300">

        {features.map((item, i) => (
          <div
            key={i}
            className={`relative p-8 bg-white ${
              i !== 2 ? "md:border-r border-gray-300" : ""
            }`}
          >
            {/* BACKGROUND NUMBER */}
            <div className="absolute right-6 top-6 text-[90px] font-bold text-gray-200">
              {item.id}
            </div>

            {/* ICON */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/4341/4341139.png"
              alt="icon"
              className="w-10 h-10 mb-6"
            />

            {/* ORANGE LINE */}
            <div className="w-8 h-[3px] bg-orange-500 mb-4"></div>

            {/* TITLE */}
            <h3 className="text-[18px] font-semibold text-gray-900 mb-3">
              {item.title}
            </h3>

            {/* DESC */}
            <p className="text-[14.5px] text-gray-600 leading-7 mb-4">
              {item.desc}
            </p>

            {/* READ MORE */}
            <a
              href="#"
              className="text-blue-500 text-sm font-medium hover:underline"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}