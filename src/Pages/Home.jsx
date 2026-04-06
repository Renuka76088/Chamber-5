
import React, { useEffect,useState,useRef } from "react";
import { Menu, X, ChevronDown,ChevronLeft, ChevronRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";


const images = [
  "https://img.freepik.com/premium-photo/colorful-fabric-rainbow-is-popular-choice_1106493-249311.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80",
  "https://img.freepik.com/premium-photo/close-up-various-colored-fabric-swatches-suitable-textile-design-projects_153912-112310.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80",
  "https://img.freepik.com/premium-photo/textile-designer-isolated-flat-color-background_980928-38343.jpg?ga=GA1.1.124606815.1772781809&semt=ais_incoming&w=740&q=80",
 
];


export default function Home() {



   const images1 = [
   "https://img.freepik.com/premium-photo/colorful-fabric-rainbow-is-popular-choice_1106493-249311.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80",
  "https://img.freepik.com/premium-photo/close-up-various-colored-fabric-swatches-suitable-textile-design-projects_153912-112310.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80",
  "https://img.freepik.com/premium-photo/textile-designer-isolated-flat-color-background_980928-38343.jpg?ga=GA1.1.124606815.1772781809&semt=ais_incoming&w=740&q=80",
  ];

  const [current, setCurrent] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // 4 sec

    return () => clearInterval(interval);
  }, []);

    const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };



  return (
    <div className="w-full">
  
      {/* HERO SECTION */}
   <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">

      {/* IMAGES */}
      {images1.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="hero"
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* TEXT */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <p className="text-sm md:text-lg tracking-widest mb-2">
         
        </p>

        <h1 className="text-2xl md:text-6xl font-bold leading-tight">
           Parekh Chamber of Textile Business Delegation
        </h1>

        <h2 className="text-xl md:text-5xl uppercase font-extrabold mt-2">
     Empowering Industry Connections
        </h2>
      </div>

      {/* DOTS INDICATOR */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              i === current ? "bg-orange-500" : "bg-white/50"
            }`}
          />
        ))}
      </div>

    </div>

      {/* SLIDER THUMBNAILS */}
   <div className="relative bg-black py-3 px-4">

      {/* LEFT BUTTON */}
      <div
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-md p-2 rounded-full cursor-pointer hover:bg-white/40 transition"
      >
        <ChevronLeft className="text-white" />
      </div>

      {/* RIGHT BUTTON */}
      <div
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-md p-2 rounded-full cursor-pointer hover:bg-white/40 transition"
      >
        <ChevronRight className="text-white" />
      </div>

      {/* THUMBNAILS */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className="h-16 w-28 object-cover rounded cursor-pointer hover:scale-105 transition"
            alt={`thumb-${index}`}
          />
        ))}
      </div>
    </div>



    </div>
  );
}
