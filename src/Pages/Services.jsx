import React from 'react'

import { Factory, Sparkles, Package, Truck, ShieldCheck, Shirt } from "lucide-react";


const services = [
  {
    title: "Fabric Manufacturing",
    desc: "Premium quality fabrics crafted with modern textile technology.",
    icon: <Factory size={26} />,
  },
  {
    title: "Custom Designs",
    desc: "Tailor-made textile patterns designed for your brand identity.",
    icon: <Sparkles size={26} />,
  },
  {
    title: "Bulk Supply",
    desc: "Large-scale textile supply for wholesalers & retailers.",
    icon: <Package size={26} />,
  },
  {
    title: "Garment Production",
    desc: "End-to-end garment manufacturing with fine detailing.",
    icon: <Shirt size={26} />,
  },
  {
    title: "Logistics",
    desc: "Fast & reliable delivery services across multiple regions.",
    icon: <Truck size={26} />,
  },
  {
    title: "Quality Assurance",
    desc: "Strict quality checks ensuring durability & excellence.",
    icon: <ShieldCheck size={26} />,
  },
];


function Services() {



  return (
  <>
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
        
        {/* SERVICES TAG */}
        <div className="bg-[#0d2b57] text-white text-sm px-5 py-2 rounded-md mb-5 font-medium tracking-wide">
          SERVICES
        </div>

        {/* HEADING */}
        <h1 className="text-white text-[32px] md:text-[44px] font-bold">
        Our Chamber Service
        </h1>

      </div>
    </section>

 <section className="bg-[#f4f4f4] py-[70px] px-4 md:px-10">
      <div className="max-w-[1300px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h4 className="text-[#0d2b57] font-semibold tracking-widest text-sm mb-3">
            OUR SERVICES
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Parekh Chamber of Textile
          </h2>
        </div>

        {/* FUNCTIONS */}
    <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm mb-10">
  
  <div className="grid md:grid-cols-2 gap-8 items-center">

    {/* LEFT CONTENT */}
    <div>
      <h3 className="text-2xl font-semibold text-[#0d2b57] mb-6">
        Functions
      </h3>

      <ul className="space-y-4 text-gray-600 text-[15px] leading-relaxed">
        <li>• To assist and facilitate growth and development of the textile industry.</li>
        <li>• To promote textile consumption in India and abroad.</li>
        <li>• To organize exporters' delegations and assist inbound textile trade delegations.</li>
        <li>• To collect, analyze and circulate textile industry information.</li>
        <li>• To promote knowledge via seminars, exhibitions, trade fairs & campaigns.</li>
        <li>• To undertake Research & Development in textiles.</li>
        <li>• To represent textile industry interests to Government & authorities.</li>
        <li>• To collaborate with trade bodies in India & globally.</li>
        <li>• To undertake CSR and public welfare projects.</li>
        <li>• To publish newsletters and industry documentation.</li>
        <li>• Represent members in trade union conciliations.</li>
        <li>• Advise members on legal & compliance matters.</li>
      </ul>
    </div>

    {/* RIGHT IMAGE */}
    <div className="w-full h-full">
      <img
        src="https://img.freepik.com/premium-photo/person-working-embroidery-workshop_862994-169809.jpg?ga=GA1.1.124606815.1772781809&semt=ais_incoming&w=740&q=80"
        alt="Textile Industry"
        className="w-full h-full object-cover rounded-xl shadow-md"
      />
    </div>

  </div>
</div>

        {/* TAXATION + CSR GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* TAXATION */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#0d2b57] mb-4">
              Taxation
            </h3>

            <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <li>• Coordinating with Government for better tax policies.</li>
              <li>• Providing tax advice to members.</li>
              <li>• Monitoring Central & State Budgets.</li>
              <li>• Handling GST & Income-Tax matters with authorities.</li>
            </ul>
          </div>

          {/* CSR */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#0d2b57] mb-4">
              Corporate Social Responsibility
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              Undertaking social and community development programs focused on welfare and public benefit initiatives.
            </p>
          </div>

        </div>

        {/* DOWNLOAD BUTTON */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-[#0d2b57] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#092044] transition"
          >
            Download Initiation of Arbitral Proceedings Form
          </a>
        </div>

      </div>
    </section>
  
  </>
  )
}

export default Services