import React from 'react';

const AuctionSection = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b57] mb-4">Live Textile Auction</h2>
          <p className="text-gray-500 max-w-2xl mx-auto italic">
            Participate in our exclusive auction for premium fabric lots. Submit your best quotation to win the bid.
          </p>
          <div className="w-24 h-1 bg-[#0d2b57] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: AUCTION ITEM DISPLAY (5 Columns) */}
          <div className="lg:col-span-5 bg-[#f8fafc] rounded-3xl overflow-hidden border border-gray-100 shadow-sm flex flex-col">
            <div className="relative h-64 md:h-80">
              <img 
                src="https://img.freepik.com/free-photo/vibrant-silk-fabrics-shining-with-color-pattern-generated-by-ai_188544-15582.jpg" 
                alt="Auction Item" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                LIVE AUCTION
              </div>
            </div>
            
            <div className="p-6 space-y-4 flex-grow">
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Lot ID: #TX-9920</span>
                <span className="text-[#0d2b57] font-bold">Category: Premium Silk</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 uppercase">Premium Mulberry Silk Batch</h3>
              
              {/* Stats Box */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-3 rounded-xl border border-gray-200">
                  <p className="text-xs text-gray-400 uppercase">Current High Quote</p>
                  <p className="text-xl font-bold text-[#0d2b57]">₹4,50,000</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-gray-200">
                  <p className="text-xs text-gray-400 uppercase">Time Left</p>
                  <p className="text-xl font-bold text-red-600 uppercase">04h : 22m</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: BIDDING/QUOTATION FORM (7 Columns) */}
          <div className="lg:col-span-7 bg-[#0d2b57] rounded-3xl p-8 md:p-10 shadow-2xl text-white">
            <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-blue-300">📝</span>
              Submit Your Quotation / Bid
            </h4>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-blue-200">Bidder Name</label>
                  <input type="text" className="w-full bg-white/10 border border-white/20 p-3 rounded-xl focus:bg-white/20 outline-none transition placeholder:text-white/30" placeholder="Your Name" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-blue-200">Mobile Number</label>
                  <input type="tel" className="w-full bg-white/10 border border-white/20 p-3 rounded-xl focus:bg-white/20 outline-none transition placeholder:text-white/30" placeholder="+91" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-blue-200">Your Quote Amount (INR)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 font-bold">₹</span>
                  <input type="number" className="w-full bg-white/10 border border-white/20 p-3 pl-8 rounded-xl focus:bg-white/20 outline-none transition text-xl font-bold text-yellow-400" placeholder="0.00" />
                </div>
                <p className="text-[10px] text-blue-300 mt-1">*Must be higher than current quote</p>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-blue-200">Payment Terms / Comments</label>
                <textarea rows="3" className="w-full bg-white/10 border border-white/20 p-3 rounded-xl focus:bg-white/20 outline-none transition placeholder:text-white/30" placeholder="E.g. 50% Advance, 50% on Delivery..."></textarea>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full bg-white text-[#0d2b57] font-bold py-4 rounded-xl hover:bg-blue-50 transition-all shadow-lg flex items-center justify-center gap-3 group">
                  PLACE OFFICIAL BID
                  <span className="group-hover:scale-125 transition-transform">🔨</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-blue-300/60 mt-4">
                By clicking "Place Official Bid", you agree to the auction terms and conditions of Chamber India.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AuctionSection;