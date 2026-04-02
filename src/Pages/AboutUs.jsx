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

export default function AboutUs() {

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

   
    </>
  );
}