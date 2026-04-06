
import React, { useEffect,useState,useRef } from "react";
import { Menu, X, ChevronDown,ChevronLeft, ChevronRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

function Pageheader() {

    
     const [open, setOpen] = useState(false);
      const [activeDropdown, setActiveDropdown] = useState(null);
      const navigate = useNavigate();
 
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
        className="cursor-pointer"
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
    
    
    </>
  )
}

export default Pageheader