import React from "react";

const blogs = [
  {
    title: "How Gig Economy is Shaping India's Business Landscape",
    img: "https://img.freepik.com/premium-photo/silk-luxurious-lustrous-background_955712-19261.jpg?ga=GA1.1.124606815.1772781809&semt=ais_incoming&w=740&q=80",
  },
  {
    title: "Role of Startups in Driving Innovation in India's Business Landscape",
    img: "https://media.istockphoto.com/id/1066845488/photo/rainbow-colored-yarns.jpg?s=612x612&w=0&k=20&c=IEQa06Ivx_NKtC71scpYxgQ4uMJvz2YH1MICmhx6wZo=",
  },
  {
    title: "The Benefits of Cross-Industry Collaborations for Businesses",
    img: "https://img.freepik.com/premium-photo/stack-colorful-striped-fabric-with-fringe-background_657590-20115.jpg?ga=GA1.1.124606815.1772781809&semt=ais_incoming&w=740&q=80",
  },
  {
    title: "The Impact of Changing Consumer Behavior on Indian Businesses",
    img: "https://media.istockphoto.com/id/2219802119/photo/color-palette-textile-swatches-material-textures.jpg?s=612x612&w=0&k=20&c=rP4KvMcmpaSx9_DBOlKnQya3TAbVTkqT8WRA4PQKov8=",
  },
  {
    title: "Promoting Entrepreneurship in India: Lessons from Successful Startups",
    img: "https://media.istockphoto.com/id/151556615/photo/bobbins-background.jpg?s=612x612&w=0&k=20&c=NnTYGN0LNqY7SIw8h6YNH6yxd0EpCG75Zcr8YfziJtQ=",
  },
  {
    title: "The Role of Innovation in Promoting Sustainability in Business",
    img: "https://plus.unsplash.com/premium_photo-1682148737203-8118bb2b3e07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UmF5b24lMjBmZWJyaWN8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Role Played by Government Policies in Shaping India's Business Landscape",
    img: "https://images.unsplash.com/photo-1544760571-b45870c2fe5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFJheW9uJTIwZmVicmljfGVufDB8fDB8fHww",
  },
  {
    title: "Why Foreign Companies Should Consider Investing in India",
    img: "https://img.freepik.com/free-photo/green-fabric_1122-610.jpg?ga=GA1.1.124606815.1772781809&semt=ais_incoming&w=740&q=80",
  },
  {
    title: "International Business and Legal Compliance",
    img: "https://img.freepik.com/premium-photo/various-ribbons-tailor-shop_1257223-139955.jpg?ga=GA1.1.124606815.1772781809&semt=ais_incoming&w=740&q=80",
  },
  {
    title: "How Industry Partnerships Can Drive Economic Growth in India",
    img: "https://img.freepik.com/free-photo/color-thread-spool-isolated-white-background_93675-134755.jpg?ga=GA1.1.124606815.1772781809&semt=ais_incoming&w=740&q=80",
  },
  {
    title: "The Role of Chamber India in Promoting Responsible Business Practices",
    img: "https://img.freepik.com/free-photo/colorful-knitted-fabric-background_58702-1771.jpg?ga=GA1.1.124606815.1772781809&semt=ais_incoming&w=740&q=80",
  },
  {
    title: "The Importance of ESG Standards for Indian Businesses",
    img: "https://img.freepik.com/free-photo/stack-fabric-with-spools-thread_23-2148739441.jpg?ga=GA1.1.124606815.1772781809&semt=ais_incoming&w=740&q=80",
  },
];

function Blog() {
  return (

    <>
    
      <section className="relative w-full h-[320px] md:h-[360px] overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <img
        src="https://img.freepik.com/free-photo/stack-fabric-with-spools-thread_23-2148739441.jpg?ga=GA1.1.124606815.1772781809&semt=ais_incoming&w=740&q=80"
        alt="business"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        
        {/* SERVICES TAG */}
        <div className="bg-[#0d2b57] text-white text-sm px-5 py-2 rounded-md mb-5 font-medium tracking-wide">
            BLOG
        </div>

        {/* HEADING */}
        <h1 className="text-white text-[32px] md:text-[44px] font-bold">
        Our Chamber Blog
        </h1>

      </div>
    </section>
    
    <section className="bg-[#f4f4f4] py-[70px] px-4 md:px-10">
      <div className="max-w-[1300px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h4 className="text-[#0d2b57] font-semibold tracking-widest text-sm mb-3">
            BLOG
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Latest Insights
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7">

       {blogs.map((blog, i) => (
  <div
    key={i}
    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group cursor-pointer"
  >
    {/* Image */}
    <div className="overflow-hidden">
      <img
        src={blog.img}
        alt="blog"
        className="w-full h-[180px] object-cover group-hover:scale-110 transition duration-300"
      />
    </div>

    {/* Content */}
    <div className="p-5">
      <h3 className="text-lg font-semibold text-gray-800 leading-snug mb-3 group-hover:text-[#0d2b57] transition">
        {blog.title}
      </h3>

      <p className="text-sm text-gray-500 mb-4">
        Explore insights on business, innovation & industry trends in India.
      </p>

      <button className="text-[#0d2b57] text-sm font-medium hover:underline">
        Read More →
      </button>
    </div>
  </div>
))}

        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-[#0d2b57] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#092044] transition">
            View All Blogs
          </button>
        </div>

      </div>
    </section>
    </>
  );
}

export default Blog;