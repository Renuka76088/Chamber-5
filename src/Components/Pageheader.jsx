
import React, { useEffect,useState,useRef } from "react";
import { Menu, X, ChevronDown,ChevronLeft, ChevronRight, MessageCircle, Send, User, Bot } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
// import { MessageCircle } from "lucide-react";

function Pageheader() {

    
     const [open, setOpen] = useState(false);
      const [activeDropdown, setActiveDropdown] = useState(null);
      const navigate = useNavigate();
      const [chatOpen, setChatOpen] = useState(false);
const [messages, setMessages] = useState([
  { from: "bot", text: "Hello 👋 How can I help you?" }
]);
const [input, setInput] = useState("");

const handleSendMessage = () => {
  if (!input.trim()) return;

  const userMsg = { from: "user", text: input };

  // AI response logic (same as before)
  const botReply = {
    from: "bot",
    text: input.toLowerCase().includes("service")
      ? "We provide textile-related services, trade support, and industry guidance."
      : input.toLowerCase().includes("contact")
      ? "You can contact us via the Contact Us page or WhatsApp."
      : "Thank you for your query! Our team will assist you shortly.",
  };

  setMessages([...messages, userMsg, botReply]);
  setInput("");
};
 
      const menuItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Chamber Service", path: "/services" },
  { name: "Pages", path: "/services", hasDropdown: true },
  { name: "Blog", path: "/blog" },
  { name: "Career", path: "/career" },
   { name: "Contact Us", path: "/contact" },
  { name: "Our Textile Associates", path: "/textile" },
];

const dropdownItems = [
  "Our Chamber Management",
  "Trade Enquiry ",
  "e-Quotation ",
  "e-Auction ",
  "Tender & Contract",
   "Circular",
 "Visit with Appointment ",
  "Notice Board",
  "Media Gallery",
];
      const toggleDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
      };


  return (
    <>
    
    {/* ================= TOP HEADER ================= */}
          <div className="bg-[#0c2d57] text-white px-4 md:px-6 py-3 hidden md:block">
            <div className="flex justify-center md:justify-between items-center">
    
              {/* LOGO */}
              <div className="flex items-center gap-3">
               
    
                {/* HIDE TEXT ON MOBILE */}
                <div className="flex items-center gap-3 hidden md:flex">
  
  {/* 1. ORANGE ICON SQUARE (Sized down to w-12) */}
  <div className="w-12 h-12 bg-[#f15a24] rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
    <span className="text-2xl font-black text-white">
      P
    </span>
  </div>

  {/* 2. TEXT BLOCK (Responsive & Compact) */}
  <div className="flex flex-col justify-center leading-none">
    {/* LINE 1: PAREKH FABRICS */}
    <h1 className="text-xl md:text-2xl font-black uppercase tracking-tight flex gap-1.5">
      <span className="text-white">PAREKH</span>
      <span className="text-[#f15a24]">CHAMBER OF TEXTILE</span>
    </h1>
    
    {/* LINE 2: AHMEDABAD, INDIA (Letter spacing reduced for clarity) */}
    <p className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.15em] text-gray-400 mt-1">
     BENGALURU, KA, INDIA
    </p>
  </div>

</div>
              </div>
    
              {/* SOCIAL - DESKTOP ONLY */}
              <div className="hidden md:flex gap-3">
                {[FaFacebookF, FaYoutube, FaInstagram, FaXTwitter].map((Icon, i) => (
                  <div
                    key={i}
                    className="bg-white/20 p-2 rounded-full hover:bg-orange-500 transition"
                  >
                    <Icon className="text-white text-sm" />
                  </div>
                ))}
              </div>
    
            </div>
          </div>
    
          {/* ================= NAVBAR ================= */}
     <div className="bg-[#f26522] text-white flex items-center justify-between px-4 py-3 shadow-md md:px-6">
    
      {/* LEFT */}
      {/* Container: Mobile pe dikhega, Desktop pe hidden */}
<div className="flex items-center gap-3 md:hidden p-2">
  
  {/* 1. WHITE ICON SQUARE (Taki dark background par highlight ho) */}
  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
    <span className="text-xl font-black text-[#0c2d57]">
      P
    </span>
  </div>

  {/* 2. TEXT BLOCK */}
  <div className="flex flex-col justify-center gap-1 leading-none">
  {/* LINE 1: PAREKH (White) + CHAMBER OF TEXTILE (Orange/White) */}
  <h1 className="text-[13px] md:text-sm font-black uppercase tracking-tight flex flex-wrap gap-1">
    <span className="text-white">PAREKH</span>
    {/* Background agar Navy hai, toh Orange ya White hi best lagega */}
    <span className="text-[#0c2d57]">CHAMBER OF TEXTILE</span>
  </h1>
  
  {/* LINE 2: LOCATION - Slogan/Address styled subtle */}
  <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#0c2d57]/70">
    BENGALURU, KA, INDIA
  </p>
</div>

</div>
      {/* CENTER (Desktop Menu) */}
<nav className="hidden md:flex gap-6 text-sm font-medium mx-auto">
  {menuItems.map((item, i) => (
    <div key={i} className="relative">
      
      {/* MENU */}
      <div
        onClick={() =>
          item.hasDropdown
            ? toggleDropdown(i)
            : navigate(item.path)
        }
        className="flex items-center gap-1 cursor-pointer hover:opacity-80 py-2"
      >
        {item.name}
        {item.hasDropdown && <ChevronDown size={14} />}
      </div>

      {/* DROPDOWN */}
      {item.hasDropdown && activeDropdown === i && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white text-black rounded-md shadow-lg z-50">
          {dropdownItems.map((sub, idx) => (
            <div
              key={idx}
              onClick={() => {
                navigate(`/${sub.toLowerCase().replace(/\s+/g, "-")}`);
                setActiveDropdown(null); // close after click
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
            >
              {sub}
            </div>
          ))}
        </div>
      )}
    </div>
  ))}
</nav>
    
  {/* RIGHT */}
<Menu
  className="cursor-pointer md:hidden"
  onClick={() => setOpen(true)}
/>
    
    </div>
    
    
    
          {/* ================= OVERLAY ================= */}
          <div
            className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition ${
              open ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            onClick={() => setOpen(false)}
          />
    
          {/* ================= SIDEBAR ================= */}
          <div
            className={`fixed top-0 left-0 h-full w-[85%] max-w-[360px] bg-white z-50 shadow-2xl transform transition-transform duration-500 ${
              open ? "translate-x-0" : "-translate-x-full"
            }`}
          >
    
            {/* HEADER */}
      <div className="p-6 text-center border-b border-gray-100 relative bg-white">
  
  {/* CLOSE BUTTON (X) */}
  <X
    className="absolute right-4 top-4 cursor-pointer text-gray-400 hover:text-red-500 transition-colors"
    onClick={() => setOpen(false)}
  />

  {/* LOGO SECTION: Icon + Text Stacked for Sidebar */}
  <div className="flex flex-col items-center justify-center gap-3 mb-2">
    
    {/* 1. ICON: Square with 'P' (Navy Blue background for white sidebar) */}
    <div className="w-12 h-12 bg-[#0c2d57] rounded-xl flex items-center justify-center shadow-sm">
      <span className="text-2xl font-black text-white">P</span>
    </div>

    {/* 2. TEXT: Stacked layout for better mobile fit */}
    <div className="flex flex-col items-center leading-none">
      <h1 className="text-base font-black uppercase tracking-tight flex gap-1">
        <span className="text-[#0c2d57]">PAREKH</span>
        <span className="text-[#f15a24]">CHAMBER</span>
      </h1>
      <h2 className="text-[11px] font-black uppercase text-[#f15a24] tracking-widest mt-0.5">
        OF TEXTILE
      </h2>
      
      {/* 3. LOCATION / SLOGAN */}
      <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-gray-400 mt-2 italic">
        Bengaluru, KA, India
      </p>
    </div>
  </div>

  {/* SOCIAL ICONS SECTION */}
  <div className="flex justify-center gap-3 mt-5 text-base">
    <div className="bg-[#1877F2] p-2 rounded-full text-white hover:scale-110 transition shadow-sm cursor-pointer">
      <FaFacebookF />
    </div>

    <div className="bg-[#FF0000] p-2 rounded-full text-white hover:scale-110 transition shadow-sm cursor-pointer">
      <FaYoutube />
    </div>

    <div className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-2 rounded-full text-white hover:scale-110 transition shadow-sm cursor-pointer">
      <FaInstagram />
    </div>

    <div className="bg-black p-2 rounded-full text-white hover:scale-110 transition shadow-sm cursor-pointer">
      <FaXTwitter />
    </div>
  </div>
</div>
    
            {/* MENU */}
            <div className="px-5 py-4 space-y-2 overflow-y-auto h-[70%]">
          {menuItems.map((item, i) => (
  <div key={i} className="rounded-lg">

    {/* MENU ITEM */}
    <div
      onClick={() =>
        item.hasDropdown ? toggleDropdown(i) : navigate(item.path)
      }
      className="flex justify-between items-center px-3 py-3 cursor-pointer hover:bg-gray-50 rounded-lg transition"
    >
      <span className="text-gray-800 font-medium">{item.name}</span>

      {item.hasDropdown && (
        <ChevronDown
          className={`transition duration-300 ${
            activeDropdown === i
              ? "rotate-180 text-orange-500"
              : "text-gray-400"
          }`}
        />
      )}
    </div>

    {/* DROPDOWN ONLY FOR 2 ITEMS */}
    {item.hasDropdown && (
      <div
        className={`transition-all duration-300 overflow-hidden ${
          activeDropdown === i ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="pl-5 pb-3 text-sm text-gray-500 space-y-2">
          {dropdownItems.map((sub, idx) => (
            <p
              key={idx}
              onClick={() =>
                navigate(`/${sub.toLowerCase().replace(/\s+/g, "-")}`)
              }
              className="hover:text-black cursor-pointer"
            >
              {sub}
            </p>
          ))}
        </div>
      </div>
    )}

  </div>
))}
            </div>
    
            {/* JOIN BUTTON */}
           
          </div>


                {/* JOIN BUTTON */}
<a
  href="https://wa.me/919876543210"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-24 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
>
  <FaWhatsapp className="text-2xl" />
</a>
{/* CHAT BOT TRIGGER BUTTON */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setChatOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-tr from-[#0c2d57] to-[#4a86d4] text-white p-4 rounded-full shadow-[0_10px_25px_rgba(12,45,87,0.4)] cursor-pointer border-2 border-white/20"
      >
        <MessageCircle size={28} />
        {/* Notification Dot */}
        <span className="absolute top-0 right-0 w-4 h-4 bg-[#f26522] border-2 border-white rounded-full"></span>
      </motion.div>

      {/* CHAT WINDOW */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-[350px] md:w-[380px] h-[500px] bg-white/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-[24px] z-50 flex flex-col overflow-hidden border border-gray-100"
          >
            {/* PREMIUM HEADER */}
            <div className="bg-[#0c2d57] bg-gradient-to-r from-[#0c2d57] to-[#1a4a8d] p-5 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                    <Bot size={22} className="text-blue-200" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-[#0c2d57] rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-wide">Parekh AI Support</h3>
                  <p className="text-[10px] text-blue-200 opacity-80">Online | Replies instantly</p>
                </div>
              </div>
              <button 
                onClick={() => setChatOpen(false)}
                className="hover:bg-white/10 p-2 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* MESSAGES AREA */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#f8fafc]/50">
              {messages.map((msg, i) => (
                <motion.div
                  initial={{ opacity: 0, x: msg.from === "bot" ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i}
                  className={`flex ${msg.from === "bot" ? "justify-start" : "justify-end"}`}
                >
                  <div className={`flex gap-2 max-w-[85%] ${msg.from === "bot" ? "flex-row" : "flex-row-reverse"}`}>
                    <div className={`mt-auto w-6 h-6 rounded-full flex items-center justify-center text-[10px] shadow-sm ${msg.from === "bot" ? "bg-white text-[#0c2d57]" : "bg-[#f26522] text-white"}`}>
                      {msg.from === "bot" ? <Bot size={12}/> : <User size={12}/>}
                    </div>
                    <div
                      className={`p-3.5 rounded-2xl text-[13.5px] leading-relaxed shadow-sm ${
                        msg.from === "bot"
                          ? "bg-white text-gray-700 rounded-bl-none border border-gray-100"
                          : "bg-[#0c2d57] text-white rounded-br-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* MODERN INPUT AREA */}
            <div className="p-4 bg-white border-t border-gray-100">
              <div className="flex items-center gap-2 bg-gray-50 p-1.5 rounded-xl border border-gray-200 focus-within:border-[#4a86d4] focus-within:ring-1 focus-within:ring-[#4a86d4]/20 transition-all">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} // Add your send logic here
                  placeholder="Ask about fabrics, services..."
                  className="flex-1 bg-transparent px-3 py-2 outline-none text-sm text-gray-700 placeholder:text-gray-400"
                />
                <button
                  onClick={handleSendMessage} // Add your send logic here
                  className="bg-[#f26522] hover:bg-[#d9561a] text-white p-2.5 rounded-lg transition-all shadow-md active:scale-95"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-[9px] text-center text-gray-400 mt-2 tracking-tight">
                Powered by Parekh Chamber of Textile AI Desk
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Pageheader