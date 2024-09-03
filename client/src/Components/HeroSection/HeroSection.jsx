import React from "react";
import HeroVid from "../../assets/Vedio/HeroVid.mp4";
import newhero from "../../assets/Vedio/newhero.mp4";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden py-40 px-6 lg:px-20">
      {/* Hero Video with clipPath */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden border border-red-500" // Debugging border
        // style={{
        //   clipPath: "polygon(0% 0%, 100% 0%, 100% 75%, 0% 100%)",
        //   // For mobile devices, remove clipPath
        //   '@media (max-width: 768px)': {
        //     clipPath: 'none',
        //   },
        // }}
      >
        <video
          className="w-full h-full object-cover opacity-60 border border-blue-500" // Debugging border
          autoPlay
          loop
          muted
          playsInline // Add this for better mobile support
        >
          <source src={newhero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-black dark:text-gray-400">
          Effortless Registration, Expert Guidance
        </h1>
        <p className="text-lg lg:text-xl mb-8 text-black dark:text-gray-400">
          Streamline Your Path to Success with Seamless Business Registration
        </p>
        <a
          href="#learn-more"
          className="inline-block bg-black text-gray-200 font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
