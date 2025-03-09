import React from "react";
import Navbar from "./UI/NavBar";
import HeroSection from "./UI/HeroSection";
import HowItWorksSection from "./UI/HowItWorks";
import FeaturesSection from "./UI/FeatureSection";
import Footer from "./UI/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
}

export default App;
