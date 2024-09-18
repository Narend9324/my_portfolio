import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeSection from "../components/HomeSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

const sections = ["Home", "About", "Projects", "Contact"];

export default function IndexPage() {
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // Handle scroll events to move between sections
  const handleScroll = (direction) => {
    if (isScrolling) return; // Ignore if already scrolling
    setIsScrolling(true);

    if (direction === "down" && activeSection < sections.length - 1) {
      setActiveSection((prevSection) => prevSection + 1);
    } else if (direction === "up" && activeSection > 0) {
      setActiveSection((prevSection) => prevSection - 1);
    }

    // Reset scrolling state after a delay
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000); // Adjust the delay as needed (in milliseconds)
  };

  // Scroll to the active section
  useEffect(() => {
    document
      .querySelector(`#${sections[activeSection]}`)
      .scrollIntoView({ behavior: "smooth" });
  }, [activeSection]);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <div
        className="flex-grow relative"
        onWheel={(e) => handleScroll(e.deltaY > 0 ? "down" : "up")}
      >
        <HomeSection id="Home" isActive={activeSection === 0} />
        <AboutSection id="About" isActive={activeSection === 1} />
        <ProjectsSection id="Projects" isActive={activeSection === 2} />
        <ContactSection id="Contact" isActive={activeSection === 3} />
      </div>
      <Footer />
    </div>
  );
}
