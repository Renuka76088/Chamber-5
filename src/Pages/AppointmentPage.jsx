import React from 'react';

const AppointmentPage = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-[#0d2b57] mb-4">Book an Appointment</h1>
          <p className="text-gray-500 max-w-2xl mx-auto italic">
            Schedule a meeting with our experts for business consultation, membership queries, or tender discussions.
          </p>
          <div className="w-20 h-1.5 bg-[#0d2b57] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT SIDE: CONTACT INFO (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0d2b57] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="font-bold">Our Office</p>
                      <p className="text-blue-100 text-sm">Chamber of Textile, BENGALURU, KA, INDIA</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">📞</span>
                    <div>
                      <p className="font-bold">Call Us</p>
                      <p className="text-blue-100 text-sm">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">✉️</span>
                    <div>
                      <p className="font-bold">Email Us</p>
                      <p className="text-blue-100 text-sm">contact@chamberindia.com</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative Circle */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            </div>

            {/* Quick Note */}
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <p className="text-sm text-[#0d2b57] font-medium leading-relaxed">
                <strong>Note:</strong> Appointments are subject to availability. You will receive a confirmation email once your request is approved.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: APPOINTMENT FORM (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100">
              <form className="space-y-6">
                
                {/* Personal Details Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Your Full Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-[#0d2b57] outline-none transition-all" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Phone Number</label>
                    <input type="tel" className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-[#0d2b57] outline-none transition-all" placeholder="+91" required />
                  </div>
                </div>

                {/* Purpose of Meeting */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Purpose of Appointment</label>
                  <select className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-[#0d2b57] outline-none transition-all cursor-pointer">
                    <option>Membership Consultation</option>
                    <option>Tender & Bidding Query</option>
                    <option>Business Partnership</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                {/* Date and Time Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Preferred Date</label>
                    <input type="date" className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-[#0d2b57] outline-none transition-all" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Preferred Time Slot</label>
                    <select className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-[#0d2b57] outline-none transition-all cursor-pointer">
                      <option>10:00 AM - 12:00 PM</option>
                      <option>12:00 PM - 02:00 PM</option>
                      <option>03:00 PM - 05:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Additional Message */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Any Specific Requirements?</label>
                  <textarea rows="3" className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-[#0d2b57] outline-none transition-all" placeholder="Briefly describe your requirements..."></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full bg-[#0d2b57] text-white font-bold py-4 rounded-xl hover:bg-blue-900 transition-all shadow-lg hover:shadow-[#0d2b57]/20 flex items-center justify-center gap-2">
                  Confirm Appointment Request
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppointmentPage;