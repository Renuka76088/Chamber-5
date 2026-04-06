import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="relative bg-[#f3f5f8] py-20 overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-50 rounded-full blur-3xl opacity-40 translate-x-1/3 translate-y-1/3"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-2">
            <div className="w-10 h-[2px] bg-[#f26522]"></div>
            <p className="text-sm font-bold text-gray-600 tracking-widest uppercase">
              Get In Touch
            </p>
            <div className="w-10 h-[2px] bg-[#f26522]"></div>
          </div>
          <h2 className="text-[34px] md:text-[45px] font-extrabold text-[#4a86d4]">
            Connect With Our Experts
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
            Have questions about our textile services or global reach? We're here to help you grow your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* LEFT COLUMN: CONTACT INFO CARDS */}
          <div className="lg:col-span-1 space-y-6">
            {[
              {
                icon: <Phone className="text-white" size={24} />,
                title: "Call Us",
                detail: "+91 98765 43210",
                bg: "bg-[#4a86d4]",
              },
              {
                icon: <Mail className="text-white" size={24} />,
                title: "Email Us",
                detail: "info@parekhchamber.com",
                bg: "bg-[#f26522]",
              },
              {
                icon: <MapPin className="text-white" size={24} />,
                title: "Visit Us",
                detail: "BENGALURU, KA, INDIA",
                bg: "bg-gray-800",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5 transition-all duration-300 hover:shadow-md"
              >
                <div className={`p-4 ${item.bg} rounded-xl shadow-lg`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.detail}</p>
                </div>
              </motion.div>
            ))}
            
            {/* Working Hours Card */}
            <div className="bg-[#4a86d4] p-8 rounded-2xl text-white relative overflow-hidden group shadow-xl">
               <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <MessageSquare size={20} /> Office Hours
                  </h4>
                  <ul className="space-y-2 opacity-90 text-sm">
                    <li className="flex justify-between"><span>Mon - Fri:</span> <span>9:00 AM - 7:00 PM</span></li>
                    <li className="flex justify-between"><span>Saturday:</span> <span>10:00 AM - 4:00 PM</span></li>
                    <li className="flex justify-between border-t border-white/20 pt-2 mt-2"><span>Sunday:</span> <span className="font-bold">Closed</span></li>
                  </ul>
               </div>
               <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM (Glassmorphism) */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white/70 backdrop-blur-xl p-8 md:p-12 rounded-[30px] shadow-2xl border border-white relative"
            >
              <form className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#4a86d4] focus:ring-2 focus:ring-[#4a86d4]/20 outline-none transition-all duration-300 bg-white/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#4a86d4] focus:ring-2 focus:ring-[#4a86d4]/20 outline-none transition-all duration-300 bg-white/50"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                  <select className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#4a86d4] focus:ring-2 focus:ring-[#4a86d4]/20 outline-none transition-all duration-300 bg-white/50 appearance-none">
                    <option>Business Enquiry</option>
                    <option>Membership Support</option>
                    <option>E-Auction Help</option>
                    <option>Others</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Your Message</label>
                  <textarea 
                    rows="5" 
                    placeholder="How can we help you today?" 
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#4a86d4] focus:ring-2 focus:ring-[#4a86d4]/20 outline-none transition-all duration-300 bg-white/50 resize-none"
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <motion.button 
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#f26522] hover:bg-[#d9561a] text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-200 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    Send Message <Send size={20} />
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}