import React from "react";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    url: "https://img.freepik.com/premium-photo/full-frame-shot-crumpled-red-satin_1627186-281.jpg?ga=GA1.1.124606815.1772781809&semt=ais_incoming&w=740&q=80",
    title: "Premium Silk Collection",
    category: "Fabrics",
  },
  {
    id: 2,
    url: "https://img.freepik.com/premium-photo/colorful-fabric-rainbow-is-popular-choice_1106493-249267.jpg?ga=GA1.1.124606815.1772781809&semt=ais_incoming&w=740&q=80",
    title: "Global Export Hub",
    category: "Logistics",
  },
  {
    id: 3,
    url: "https://media.istockphoto.com/id/2168710375/photo/hand-weaving-silk-and-handloom-sarees-saree-with-golden-details-woman-wear-on-festival.webp?a=1&b=1&s=612x612&w=0&k=20&c=6p5ZJtzLZkKXNaJHpcWXsKJ4E_euN8aRv3IqShk51HA=",
    title: "Textile Exhibition 2026",
    category: "Events",
  },
  {
    id: 4,
    url: "https://media.istockphoto.com/id/131399882/photo/sewing-background.jpg?s=612x612&w=0&k=20&c=LB0OtfNMK6IJxblacckKDkpSbLvtMCk_MCS7kmqYLkI=",
    title: "Production Unit",
    category: "Manufacturing",
  },
  {
    id: 5,
    url: "https://media.istockphoto.com/id/493626860/photo/colorful-saree-background.jpg?s=612x612&w=0&k=20&c=3buwZCcNoW-nZITKAAEonZBD6onlrOPq1yDH_lAuegc=",
    title: "B2B Meeting Center",
    category: "Business",
  },
  {
    id: 6,
    url: "https://media.istockphoto.com/id/1367258726/photo/bride-pattu-saree-close-up-texture.jpg?s=612x612&w=0&k=20&c=JrKWem0JRQRYmdV5PhubMZ6qYY1k1_noIHrp74MU6Ag=",
    title: "Quality Assurance",
    category: "Inspection",
  },
];

export default function Gallery() {
  return (
    <section className="relative bg-[#f8fafc] py-24 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-[2px] bg-[#f26522]"></div>
            <p className="text-sm font-bold text-gray-500 tracking-widest uppercase">
              Visual Showcase
            </p>
            <div className="w-10 h-[2px] bg-[#f26522]"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#4a86d4] text-center">
            Our Business Portfolio
          </h2>
          <div className="mt-4 w-20 h-1.5 bg-gray-200 rounded-full overflow-hidden">
             <div className="w-1/2 h-full bg-[#f26522]"></div>
          </div>
        </div>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[350px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white"
            >
              {/* IMAGE */}
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* GLASS OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#4a86d4]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="inline-block px-3 py-1 bg-[#f26522] text-white text-[10px] font-bold uppercase tracking-wider rounded-md mb-3">
                      {img.category}
                    </span>
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {img.title}
                    </h3>
                  </div>
                  <div className="bg-white/20 p-2 rounded-full backdrop-blur-md border border-white/30">
                    <Maximize2 size={20} className="text-white" />
                  </div>
                </div>
              </div>

              {/* BORDER GLOW EFFECT */}
              <div className="absolute inset-0 border-[0px] group-hover:border-[8px] border-white/10 transition-all duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
        
        {/* VIEW ALL BUTTON */}
        <div className="mt-16 text-center">
            <button className="px-8 py-4 bg-white border-2 border-[#4a86d4] text-[#4a86d4] font-bold rounded-xl hover:bg-[#4a86d4] hover:text-white transition-all duration-300 shadow-md">
                Explore Full Gallery
            </button>
        </div>
      </div>
    </section>
  );
}