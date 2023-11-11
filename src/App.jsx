import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import WhyUs from "./pages/WhyUs";
import CoreFeatures from "./pages/CoreFeatures";
import VideoSection from "./components/VideoSection";

const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <WhyUs />
      <CoreFeatures />
      <VideoSection />
    </>
  );
};

export default App;
