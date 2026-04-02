import React from 'react';

const CircularPage = () => {
  // Sample Data for Circulars
  const circulars = [
    {
      id: "CIR-2024-001",
      date: "12 March 2026",
      title: "New Membership Guidelines for Textile Manufacturers",
      category: "Membership",
      isNew: true
    },
    {
      id: "CIR-2024-002",
      date: "05 March 2026",
      title: "Revised GST Rates on Raw Cotton & Synthetic Yarn",
      category: "Taxation",
      isNew: true
    },
    {
      id: "CIR-2024-003",
      date: "28 Feb 2026",
      title: "Upcoming International Business Delegation to Uzbekistan",
      category: "Events",
      isNew: false
    },
    {
      id: "CIR-2024-004",
      date: "15 Feb 2026",
      title: "Annual General Meeting (AGM) Postponement Notice",
      category: "General",
      isNew: false
    }
  ];

  return (
    <section className="bg-[#f8fafc] min-h-screen py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-[#0d2b57] tracking-tight">Circulars & Notices</h1>
            <p className="text-gray-500 mt-2">Stay updated with the latest official announcements from the Chamber.</p>
          </div>
          
          {/* SEARCH BAR (Visual Only) */}
          <div className="relative w-full md:w-72">
            <input 
              type="text" 
              placeholder="Search circulars..." 
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-[#0d2b57] outline-none transition-all text-sm"
            />
            <span className="absolute left-3 top-3 text-gray-400">🔍</span>
          </div>
        </div>

        {/* CIRCULAR LIST */}
        <div className="space-y-4">
          {circulars.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white border border-gray-100 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-[#0d2b57]/20 transition-all flex flex-col md:flex-row md:items-center gap-4"
            >
              {/* DATE BLOCK */}
              <div className="flex-shrink-0 w-24 h-24 bg-blue-50 rounded-xl flex flex-col items-center justify-center text-[#0d2b57] border border-blue-100">
                <span className="text-sm font-bold uppercase">{item.date.split(' ')[1]}</span>
                <span className="text-2xl font-black">{item.date.split(' ')[0]}</span>
                <span className="text-[10px] font-bold opacity-60">{item.date.split(' ')[2]}</span>
              </div>

              {/* CONTENT BLOCK */}
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.id}</span>
                  {item.isNew && (
                    <span className="bg-red-500 text-white text-[9px] px-2 py-0.5 rounded-full font-bold animate-pulse">NEW</span>
                  )}
                  <span className="bg-[#0d2b57]/5 text-[#0d2b57] text-[10px] px-2 py-0.5 rounded font-bold uppercase italic">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#0d2b57] transition-colors leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* ACTION BLOCK */}
              <div className="flex-shrink-0">
                <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-white border-2 border-[#0d2b57] text-[#0d2b57] px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#0d2b57] hover:text-white transition-all">
                  <span>PDF</span>
                  <span className="text-xs">⬇</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM PAGINATION PLACEHOLDER */}
        <div className="mt-12 flex justify-center gap-2">
          <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center bg-white hover:bg-gray-50 font-bold text-gray-600">1</button>
          <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center bg-white hover:bg-gray-50 text-gray-400">2</button>
          <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center bg-white hover:bg-gray-50 text-gray-400">→</button>
        </div>

      </div>
    </section>
  );
};

export default CircularPage;