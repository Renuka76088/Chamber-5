import React, { useState } from 'react';

const MediaGallery = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Events', 'Workshops', 'Conferences'];

  const mediaItems = [
    { id: 1, type: 'image', category: 'Events', src: 'https://img.freepik.com/premium-photo/person-working-embroidery-workshop_862994-169809.jpg?ga=GA1.1.124606815.1772781809&semt=ais_incoming&w=740&q=80', title: 'Annual Expo 2025' },
    { id: 2, type: 'image', category: 'Workshops', src: 'https://img.freepik.com/free-photo/sewing-threads-many-colors-needle-thimble-placed-neatly_463209-36.jpg?ga=GA1.1.124606815.1772781809&semt=ais_incoming&w=740&q=80', title: 'Tailoring Workshop' },
    { id: 3, type: 'image', category: 'Conferences', src: 'https://img.freepik.com/free-photo/texture-orange-red-crumpled-fabric_23-2148516009.jpg?ga=GA1.1.124606815.1772781809&semt=ais_incoming&w=740&q=80', title: 'Global Textile Summit' },
    { id: 4, type: 'image', category: 'Events', src: 'https://img.freepik.com/premium-photo/full-frame-shot-crumpled-red-satin_1627186-281.jpg?ga=GA1.1.124606815.1772781809&semt=ais_incoming&w=740&q=80', title: 'Award Ceremony' },
    { id: 5, type: 'image', category: 'Workshops', src: 'https://img.freepik.com/premium-photo/row-colorful-fabrics-with-rainbow-colors-generative-ai-image_1146582-8900.jpg?ga=GA1.1.124606815.1772781809&semt=ais_incoming&w=740&q=80', title: 'Fabric Printing Class' },
    { id: 6, type: 'image', category: 'Conferences', src: 'https://img.freepik.com/premium-photo/beautiful-elegant-silk-concept_926199-384005.jpg?ga=GA1.1.124606815.1772781809&semt=ais_incoming&w=740&q=80', title: 'Stakeholder Meeting' },
  ];

  const filteredItems = filter === 'All' ? mediaItems : mediaItems.filter(item => item.category === filter);

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-[#0d2b57] uppercase tracking-tight">Media Gallery</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto italic">Visual glimpses of our chamber's journey, milestones, and high-impact events.</p>
          <div className="w-24 h-1.5 bg-[#0d2b57] mx-auto mt-5 rounded-full"></div>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 border-2 
                ${filter === cat 
                  ? 'bg-[#0d2b57] border-[#0d2b57] text-white shadow-lg' 
                  : 'bg-white border-gray-100 text-gray-500 hover:border-[#0d2b57] hover:text-[#0d2b57]'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* MASONRY-STYLE GRID */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="relative group overflow-hidden rounded-2xl shadow-md cursor-pointer break-inside-avoid"
            >
              {/* IMAGE */}
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* OVERLAY ON HOVER */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b57]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-blue-300 text-[10px] font-bold uppercase tracking-widest mb-1">{item.category}</span>
                <h4 className="text-white font-bold text-lg leading-tight">{item.title}</h4>
                
                {/* Search/View Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                  🔍
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LOAD MORE BUTTON (Optional) */}
        <div className="mt-16 text-center">
          <button className="bg-gray-100 text-[#0d2b57] px-8 py-3 rounded-xl font-bold hover:bg-[#0d2b57] hover:text-white transition-all shadow-sm">
            View All Media ➔
          </button>
        </div>

      </div>
    </section>
  );
};

export default MediaGallery;