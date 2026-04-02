import React from 'react';

const Enquiry = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* FORM HEADER */}
        <div className="mb-8 border-l-4 border-[#0d2b57] pl-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0d2b57] underline decoration-1 underline-offset-8">
            Apply for Membership (e- Form)
          </h2>
        </div>

        {/* FORM CONTAINER */}
        <form className="bg-[#fcfcfc] border border-gray-100 rounded-2xl p-6 md:p-10 shadow-sm space-y-6">
          
          {/* Section 1: Official Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 mb-2">Name of our Authorized Official of the Chamber</label>
              <input type="text" className="border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-[#0d2b57] outline-none transition" placeholder="Official Name" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 mb-2">Code No.</label>
              <input type="text" className="border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-[#0d2b57] outline-none transition" placeholder="Code Number" />
            </div>
          </div>

          {/* Section 2: Applicant Details */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 mb-2">Name of the Applicant</label>
              <input type="text" className="border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-[#0d2b57] outline-none transition" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-2">Title of the Textile Business</label>
                <input type="text" className="border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-[#0d2b57] outline-none transition" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-2">URL (if any)</label>
                <input type="url" className="border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-[#0d2b57] outline-none transition" placeholder="https://" />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 mb-2">Address of the Business</label>
              <textarea rows="2" className="border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-[#0d2b57] outline-none transition"></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-2">Mob. No.</label>
                <input type="tel" className="border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-[#0d2b57] outline-none transition" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-2">Email Id</label>
                <input type="email" className="border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-[#0d2b57] outline-none transition" />
              </div>
            </div>
          </div>

          {/* Section 3: Select Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 mb-2">Nature of the Business</label>
              <select className="border border-gray-300 p-2.5 rounded-lg bg-white outline-none focus:ring-2 focus:ring-[#0d2b57]">
                <option>Retailer</option>
                <option>Wholesaler</option>
                <option>Manufacturers</option>
                <option>Others</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 mb-2">Category of the Business</label>
              <select className="border border-gray-300 p-2.5 rounded-lg bg-white outline-none focus:ring-2 focus:ring-[#0d2b57]">
                <option>Proprietorship</option>
                <option>Partnership</option>
                <option>LLP</option>
                <option>Private Limited</option>
                <option>Ltd.</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* Section 4: File Upload */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-2">Upload Document (GST, MSME, Trade License, etc.)</label>
            <input type="file" className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#eef2f8] file:text-[#0d2b57] hover:file:bg-[#dce4f0] cursor-pointer" />
          </div>

          {/* Section 5: Undertaking */}
          <div className="pt-6 border-t border-gray-200">
            <h3 className="font-bold text-gray-800 underline mb-3">Undertaking</h3>
            <div className="flex items-start gap-3">
              <input type="checkbox" id="undertaking" className="mt-1 w-4 h-4 accent-[#0d2b57]" required />
              <label htmlFor="undertaking" className="text-[14px] text-gray-600 leading-relaxed italic">
                "I have read the Terms & Conditions of subscription for the membership in the Chamber of Textile. All the information provided by me and the documents uploaded thereof are true and authentic to the best of my knowledge and belief"
              </label>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 pt-6">
            <button type="button" className="flex-1 bg-gray-100 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-200 transition">
              Preview
            </button>
            <button type="submit" className="flex-1 bg-[#0d2b57] text-white font-bold py-3 rounded-lg hover:bg-[#0a2347] transition shadow-md">
              Submit
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default Enquiry;