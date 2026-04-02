import React from 'react';

const QuotationSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SIDE: INFO (4 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-block bg-[#0d2b57] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              Get a Estimate
            </div>
            <h2 className="text-4xl font-bold text-[#0d2b57] leading-tight">
              Request a Professional <br /> <span className="text-blue-600">Quotation</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              "Please share your business requirements with us. Our team will get back to you within 24 hours with a detailed plan and our most competitive pricing."
            </p>
            
            {/* Steps/Features */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 text-gray-700 font-medium">
                <div className="w-8 h-8 bg-white shadow-sm rounded-full flex items-center justify-center text-[#0d2b57]">✓</div>
                <span>Transparent Pricing</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700 font-medium">
                <div className="w-8 h-8 bg-white shadow-sm rounded-full flex items-center justify-center text-[#0d2b57]">✓</div>
                <span>Expert Consultation</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: QUOTATION FORM (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-blue-900/5 border border-gray-100">
              <form className="space-y-5">
                
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Full Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0d2b57] outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Company Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0d2b57] outline-none transition-all" placeholder="Textile Co." />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Work Email</label>
                    <input type="email" className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0d2b57] outline-none transition-all" placeholder="email@company.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Service Category</label>
                    <select className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0d2b57] outline-none transition-all cursor-pointer">
                      <option>Fabric Sourcing</option>
                      <option>Export Consultation</option>
                      <option>Logistics Support</option>
                      <option>Membership Services</option>
                    </select>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Project Details / Requirements</label>
                  <textarea rows="4" className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0d2b57] outline-none transition-all" placeholder="describe your project goals and requirements here..."></textarea>
                </div>

                {/* File Attachment (Optional) */}
                <div className="bg-blue-50/50 border-2 border-dashed border-blue-200 p-4 rounded-xl text-center">
                  <p className="text-xs text-gray-500 mb-2">Upload relevant documents or design (PDF, JPG)</p>
                  <input type="file" className="text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-[#0d2b57] file:text-white hover:file:bg-blue-800 cursor-pointer" />
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full bg-[#0d2b57] text-white font-bold py-4 rounded-xl hover:bg-blue-900 transition-all shadow-lg hover:shadow-[#0d2b57]/20 flex items-center justify-center gap-2 group">
                  Send Quote Request
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QuotationSection;