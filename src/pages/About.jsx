import React from "react";
import HeroSection from "../components/shared/HeroSection";
import CompanyIconGrid from "../components/shared/CompanyIconGrid";
import { useSelector } from "react-redux";

function About() {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <section className={`${isDarkMode && "dark"}`}>
      <HeroSection />
      <CompanyIconGrid />
    </section>
  );
}

export default About;
