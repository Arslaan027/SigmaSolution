import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";

import WhyLegalWiz from "./Components/Home/WhyUs";

import Trust from "./Components/Home/Trust";
import Footer from "./Components/Footer/Footer";
import ComparisonSection from "./Components/Home/ComparisonSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Experts from "./Components/Home/Experts";

const App = () => {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
      <Navbar />
      <HeroSection />
      <WhyLegalWiz />
      <Trust />
      <ComparisonSection />
      <Experts />
      <Footer />
    </div>
  );
};

export default App;
