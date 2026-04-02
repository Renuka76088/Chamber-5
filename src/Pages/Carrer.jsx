import React from "react";
import { Briefcase, Globe, Layers, Send } from "lucide-react";

function Carrer() {
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
            Carrers
        </div>

        {/* HEADING */}
        <h1 className="text-white text-[32px] md:text-[44px] font-bold">
        Careers
        </h1>

      </div>
    </section>

 <section className="bg-gradient-to-b from-[#f8f8f8] to-[#eaeaea] py-[80px] px-4 md:px-10">
      <div className="max-w-[1300px] mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h4 className="text-[#0d2b57] tracking-[4px] text-sm font-semibold mb-3">
            CAREERS
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Join Our Team
          </h2>
          <p className="text-gray-500 mt-4">
            Work with us & grow in the evolving business ecosystem
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {/* JOB CARD */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-md hover:shadow-xl transition">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-[#0d2b57]" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Social Media Campaign & Brand Promotion
                </h3>
              </div>

              <p className="text-gray-600 leading-relaxed text-sm">
                We are looking for experienced Social Media Influencers across 
                all locations for long-term online business advertisements on 
                their own platforms for our products.
              </p>
            </div>

            {/* TARGET SECTORS */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Layers className="text-[#0d2b57]" />
                <h3 className="text-lg font-semibold text-gray-800">
                  Target Sectors
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                {[
                  "Textile & Garments",
                  "Pulp & Paper",
                  "Healthcare",
                  "FMCG",
                  "Corporate Projects",
                  "Tenders & MOU",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-[#0d2b57]/5 text-[#0d2b57] px-3 py-2 rounded-xl hover:bg-[#0d2b57] hover:text-white transition cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* PLATFORMS */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="text-[#0d2b57]" />
                <h3 className="text-lg font-semibold text-gray-800">
                  Required Platforms
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {["LinkedIn", "Facebook", "Instagram", "Youtube", "Other"].map(
                  (item, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full border border-gray-300 text-sm hover:bg-[#0d2b57] hover:text-white transition"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - APPLY CARD */}
          <div className="sticky top-24">

            <div className="bg-[#0d2b57] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">

              {/* Glow Effect */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Send size={20} /> Apply Now
              </h3>

              <p className="text-gray-200 mb-6 text-sm">
                Submit your quotation in PDF format with payment details.
              </p>

              <ul className="space-y-2 text-sm text-gray-200 mb-6">
                <li>• PDF format only</li>
                <li>• Excluding GST & third-party costs</li>
                <li>• Include payment terms</li>
              </ul>

              {/* EMAIL BOX */}
              <div className="bg-white text-[#0d2b57] p-4 rounded-xl mb-6">
                <p className="text-sm mb-1">Send to:</p>
                <p className="font-semibold break-all">
                  hemant.parekh2012@gmail.com
                </p>
              </div>

              {/* NOTE */}
              <div className="text-xs text-gray-300 space-y-1">
                <p>• Influencers are not responsible for marketing</p>
                <p>• Ready creatives will be provided</p>
              </div>

              {/* BUTTON */}
              <button className="mt-6 w-full bg-white text-[#0d2b57] py-3 rounded-xl font-medium hover:bg-gray-200 transition">
                Submit Quotation
              </button>

            </div>
          </div>
        </div>

      </div>
    </section>

    </>
  );
}

export default Carrer;