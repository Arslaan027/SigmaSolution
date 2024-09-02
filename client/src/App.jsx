import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
import WhyLegalWiz from "./Components/Home/WhyUs";

const App = () => {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
      <Navbar />
      <HeroSection />
      <WhyLegalWiz />
    </div>
  );
};

export default App;
