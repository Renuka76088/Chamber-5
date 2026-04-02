import React from 'react';

// image_5.png se copy kiya gaya content
const membershipContent = {
  headline: "Our Chamber Management",
  welcome: "Welcome to one of India's most active and influential business networks",
mainParagraphs: [
  {
    text: "Since its establishment, PAREKH CHAMBER OF TEXTILE (Bengaluru, KA, India) has been a cornerstone of the textile industry, dedicated to a century of service to the nation. We have established ourselves as a key facilitator, bridging the gap between traditional craftsmanship and modern industrial requirements.",
  },
  {
    text: "With a strong presence in Southern India, the Chamber offers its members specialized tools such as textile-specific business delegations, supply chain integration, and direct collaboration with government agencies to facilitate the ease of doing business in the vibrant textile sector.",
  },
  {
    text: "The principal purpose of the chamber is to enhance the dialogue between textile stakeholders and policy-makers to establish a favourable business environment. We lead efforts to shape industry standards, providing our members with exclusive access to key decision-makers in India and international markets.",
  },
],
  benefitsTitle: "Membership Benefits",
  benefits: [
    {
      title: "Business Delegations",
      description: "Trade promotion on a global scale through meetings with foreign business delegations, participation in trade shows and exhibitions, sending business delegations abroad and involvement in various task forces and committees working on public policy.",
    },
    {
      title: "Networking",
      description: "For the encouragement of manufacturing and commerce, policymakers, officials and global icons from across the world will join our members for interactive sessions.",
    },
    {
      title: "Latest Information",
      description: "Information repository offering timely information on the most recent domestic and international policies and government legislation.",
    },
  ],
};



const MembershipPage = () => {
  return (
    <div className="bg-white text-gray-800 font-sans min-h-screen">
      
      {/* 1. Header Section */}
      <section className="bg-white py-16 md:py-20 px-6 border-b border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0d2b57] mb-6 leading-tight">
            {membershipContent.headline}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {membershipContent.welcome}
          </p>
        </div>
      </section>

      {/* 2. Main Content Section: Left Text, Right Image */}
     <div className="bg-white font-sans py-10">
      {/* MAIN CONTAINER */}
      <div className="max-w-6xl mx-auto px-6">
        


        {/* CONTENT BOX - Background gray/white for container look */}
        <div className="bg-[#fcfcfc] border border-gray-100 rounded-3xl p-6 md:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* LEFT: TEXT */}
            <div className="space-y-5">
              {membershipContent.mainParagraphs.map((para, index) => (
                <p key={index} className="text-[15px] md:text-[16px] text-gray-700 leading-relaxed border-l-4 border-[#0d2b57]/10 pl-4">
                  {para.text}
                </p>
              ))}
            </div>

            {/* RIGHT: IMAGE - Fixed Aspect Ratio to keep it tight */}
            <div className="relative group overflow-hidden rounded-xl shadow-md border-4 border-white">
              <img
                src="https://img.freepik.com/premium-photo/paper-cutout-people-holding-hands-line-blue-background-conceptual-scene-team-work-col_941265-23464.jpg"
                alt="Leadership"
                className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-[#0d2b57]/5 group-hover:bg-transparent transition-colors"></div>
            </div>

          </div>
        </div>

      </div>
    </div>

      {/* 3. Benefits Section */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Subheading with blue bar element */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0d2b57]">
              {membershipContent.benefitsTitle}
            </h2>
            <div className="w-24 h-1.5 bg-[#0d2b57] mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {membershipContent.benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:border-[#0d2b57]/20 group"
              >
                
                {/* Optional Icon Placeholder */}
                <div className="w-16 h-16 bg-[#e7edf6] text-[#0d2b57] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#0d2b57] group-hover:text-white transition-colors duration-300">
                  {/* Aap yahan unique icons (e.g., heroicons) add kar sakte hain */}
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-[#0d2b57] mb-5 leading-snug">
                  {benefit.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default MembershipPage;