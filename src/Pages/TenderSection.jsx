import React from 'react';

const TenderSection = () => {
  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER: TITLE & BADGES */}
        <div className="bg-white border-b-4 border-[#0d2b57] p-8 rounded-t-3xl shadow-sm">
          <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
            <div>
              <span className="bg-blue-100 text-[#0d2b57] text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                Expression of Interest (EOI)
              </span>
              <h1 className="text-3xl font-extrabold text-gray-900 mt-3 tracking-tight">
                CORPORATE TENDERS
              </h1>
              <p className="text-[#0d2b57] font-semibold text-lg">Textile Sector | Rate Contract</p>
            </div>
            <div className="text-right">
              <div className="bg-red-50 text-red-600 border border-red-100 px-4 py-2 rounded-lg text-sm font-medium">
                Sealed Tenders Invited
              </div>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed italic border-l-4 border-gray-200 pl-4">
            "Sealed Tenders are invited from reputed and registered <strong>Tailoring Agencies</strong> for the work as detailed below under the Rate Contract."
          </p>
        </div>

        {/* MAIN DETAILS GRID */}
        <div className="bg-white p-8 shadow-md grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-1">
            <p className="text-xs text-gray-400 uppercase font-bold">Name of Work</p>
            <p className="text-gray-800 font-medium">Double Bedsheets, Pillowcover Stitching & Packing</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-gray-400 uppercase font-bold">Total Quantity</p>
            <p className="text-gray-800 font-medium">30,000 Sets per EOI</p>
            <p className="text-[11px] text-gray-500">(1 Set = 1 Double Bedsheet + 2 Pillowcovers)</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-gray-400 uppercase font-bold">Tenure</p>
            <p className="text-gray-800 font-medium underline decoration-[#0d2b57] decoration-2">01 Year Contract</p>
          </div>
        </div>

        {/* SPECIFICATIONS TABLE SECTION */}
        <div className="bg-white p-8 border-t border-gray-100">
          <h3 className="text-lg font-bold text-[#0d2b57] mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-[#0d2b57] rounded-full"></span>
            Technical Specifications & Dimensions
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 border-b font-bold text-gray-700 text-sm">Category</th>
                  <th className="p-4 border-b font-bold text-gray-700 text-sm">Specifications</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="p-4 border-b font-semibold text-gray-600">Dimensions</td>
                  <td className="p-4 border-b text-gray-700">
                    Bedsheets: 90” x 100” | Pillowcover: 18” x 24” (Inner Lid: 6”)
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-b font-semibold text-gray-600">Stitching Quality</td>
                  <td className="p-4 border-b text-gray-700">Double lined Simple stitch OR Single lined zigzag Stitch</td>
                </tr>
                <tr>
                  <td className="p-4 border-b font-semibold text-gray-600">Material (Thread/Fabric)</td>
                  <td className="p-4 border-b text-gray-700">
                    Thread: Moon Brand | Fabric: Pure Fine Cotton, Printed, 144 TC+
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-b font-semibold text-gray-600">Packing</td>
                  <td className="p-4 border-b text-gray-700">Corrugated Box, 3-Ply, Laminated (14” x 11” x 1.5“)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* COMMERCIAL & DATES SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-gray-100">
          {/* Commercial Terms */}
          <div className="bg-blue-50/50 p-8">
            <h4 className="font-bold text-gray-800 mb-4 uppercase text-xs tracking-widest">Commercial Terms</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="text-[#0d2b57] font-bold">●</span>
                <p><strong>Transportation:</strong> Company (upto Transporters) | Agency (Local Transport)</p>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0d2b57] font-bold">●</span>
                <p><strong>Payment:</strong> 50% Advance with W.O. | 50% on Inspection & L.R.</p>
              </li>
            </ul>
          </div>
          
          {/* Important Dates Placeholder */}
          <div className="bg-gray-900 p-8 text-white">
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-blue-400">Important Dates</h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Submission Deadline</span>
                <span className="font-mono text-yellow-400">TBA</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Bid Opening Date</span>
                <span className="font-mono text-yellow-400">TBA</span>
              </div>
              <p className="text-[11px] text-gray-400 mt-4 leading-tight">
                * Tender Documents can be obtained <strong>In-person</strong> on payment of prescribed fee (Non-refundable).
              </p>
            </div>
          </div>
        </div>

        {/* FOOTER ACTION */}
        <div className="bg-white p-6 rounded-b-3xl border-t border-gray-100 text-center">
          <button className="bg-[#0d2b57] text-white px-10 py-3 rounded-full font-bold hover:bg-blue-900 transition-all shadow-lg shadow-blue-900/20">
            Download Full Tender Details
          </button>
        </div>

      </div>
    </section>
  );
};

export default TenderSection;