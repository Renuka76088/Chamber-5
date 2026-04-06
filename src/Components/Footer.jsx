import { ArrowUpRight, Mail, Phone, MapPin, ChevronRight, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#176a96] text-white overflow-hidden relative">
      {/* Decorative Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Head Office */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold tracking-tight border-b-2 border-white/30 pb-2 inline-block">
              HEAD OFFICE
            </h2>

            <div className="space-y-3 text-sm text-white leading-relaxed">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-white" />
                <p>
                  PAREKH CHAMBER OF TEXTILE <br />
                BENGALURU, KA, INDIA - 560001   
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-white" />
                <p>+91-33-22303242-44</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-white" />
                <p className="hover:text-gray-200 transition-colors cursor-pointer">
                  ceo@parekhchamber.com
                </p>
              </div>
            </div>
          </div>

          {/* Map - Mobile me Head Office ke niche */}
          <div className="space-y-4 order-2 md:order-4 lg:order-none">
       

            <div className="rounded-xl overflow-hidden border-2 border-white/20 shadow-xl">
              <iframe
                src="https://www.google.com/maps?q=Indian%20Chamber%20of%20Commerce%20Kolkata&output=embed"
                className="w-full h-[200px]"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold mb-6 tracking-tight">QUICK LINKS</h2>

            <ul className="space-y-3 text-sm flex flex-col items-center md:items-start">
              {["Career", "Facilities", "Useful Links", "Membership", "FAQs"].map((item) => (
                <li
                  key={item}
                  className="group flex items-center gap-2 cursor-pointer text-white hover:text-gray-200 transition-all"
                >
                  <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold mb-6 tracking-tight">EXPLORE</h2>

            <ul className="space-y-3 text-sm flex flex-col items-center md:items-start">
              {["The Chamber", "Services", "Sectors Links", "PAREKH CHAMBER OF TEXTILE Chapters", "International"].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 cursor-pointer text-white hover:text-gray-200 transition-all group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/50 group-hover:bg-white transition-colors" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-wrap justify-center gap-6 text-[13px] font-medium text-white">
            <span className="hover:text-gray-200 cursor-pointer transition-colors">TERMS & CONDITIONS</span>
            <span className="hover:text-gray-200 cursor-pointer transition-colors">PRIVACY POLICY</span>
            <span className="hover:text-gray-200 cursor-pointer transition-colors">SITE MAP</span>
          </div>

          <div className="text-[13px] text-white flex items-center gap-1">
            Developed by 
            <span className="font-semibold flex items-center gap-1">
              DSS <ArrowUpRight size={14}/>
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Top */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-white text-[#176a96] p-3 rounded-full shadow-lg hover:scale-110 transition-all active:scale-95 group"
      >
        <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
}