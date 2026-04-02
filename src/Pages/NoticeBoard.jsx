import React from 'react';

const NoticeBoard = () => {
  const notices = [
    {
      id: 1,
      date: "15 March 2026",
      title: "Mandatory Quality Check for Export-Grade Cotton Batches",
      description: "All registered members are advised to submit their samples for the upcoming quality audit by the end of this week.",
      tag: "Urgent",
      color: "bg-red-500"
    },
    {
      id: 2,
      date: "10 March 2026",
      title: "Holiday Notice: Holi Festival Observation",
      description: "The Chamber's main office will remain closed on 17th and 18th March 2026 on account of Holi.",
      tag: "General",
      color: "bg-blue-500"
    },
    {
      id: 3,
      date: "02 March 2026",
      title: "New Subsidy Scheme for Small Scale Weaving Units",
      description: "Government of India has announced a new 10% subsidy on electricity for registered MSME weaving units. Click to learn more.",
      tag: "Update",
      color: "bg-green-500"
    }
  ];

  return (
    <section className="bg-[#f3f4f6] min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* BOARD HEADER */}
        <div className="flex items-center gap-4 mb-10 border-b-4 border-[#0d2b57] pb-4">
          <div className="bg-[#0d2b57] p-3 rounded-xl text-white text-3xl">
            📌
          </div>
          <div>
            <h2 className="text-3xl font-black text-[#0d2b57] uppercase tracking-tighter">Official Notice Board</h2>
            <p className="text-gray-500 font-medium">Important announcements and real-time updates</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT & CENTER: ACTIVE NOTICES (2 Columns) */}
          <div className="lg:col-span-2 space-y-6">
            {notices.map((notice) => (
              <div key={notice.id} className="bg-white rounded-2xl shadow-sm border-l-8 border-[#0d2b57] p-6 hover:shadow-md transition-all group">
                <div className="flex justify-between items-start mb-3">
                  <span className={`${notice.color} text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest`}>
                    {notice.tag}
                  </span>
                  <span className="text-sm font-bold text-gray-400">{notice.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#0d2b57] transition-colors mb-2">
                  {notice.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {notice.description}
                </p>
                <button className="text-[#0d2b57] font-bold text-sm flex items-center gap-2 hover:underline">
                  Read Full Document <span>→</span>
                </button>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: QUICK LINKS & ARCHIVE (1 Column) */}
          <div className="space-y-6">
            {/* Archive Box */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h4 className="text-lg font-bold text-[#0d2b57] mb-4 flex items-center gap-2">
                📂 Archive 2026
              </h4>
              <ul className="space-y-3">
                {["January Notices", "February Notices", "Yearly Report 2025"].map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 hover:text-[#0d2b57] cursor-pointer flex items-center gap-2 transition-all">
                    <span className="text-gray-300">●</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Helpline Box */}
            <div className="bg-gradient-to-br from-[#0d2b57] to-[#1a4b8f] rounded-2xl p-6 text-white shadow-lg">
              <h4 className="font-bold mb-2">Need Assistance?</h4>
              <p className="text-xs text-blue-100 mb-4 leading-relaxed">
                Notice board se judi kisi bhi jaankari ke liye hamare helpdesk par sampark karein.
              </p>
              <div className="bg-white/10 p-3 rounded-xl text-center font-bold text-sm backdrop-blur-md">
                📞 +91 11 2345 6789
              </div>
            </div>

            {/* Scrolling Ticker Concept (Visual Only) */}
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-2xl overflow-hidden">
                <p className="text-xs font-bold text-yellow-800 uppercase mb-2">⚡ Flash News</p>
                <div className="text-sm text-yellow-900 italic animate-pulse">
                    Tender #402 opening moved to Room 4B...
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NoticeBoard;