import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import ServicePage from "./Pages/ServicePage";
import AboutPage from "./Pages/AboutPage";
import TestimonialsPage from "./Pages/TestimonialsPage";
import WhyChooseUs from "./Pages/WhyChooseUsPage";
import ServicePlans from "./Pages/ServicePlans";
import ContactPage from "./Pages/ContactPage";
import FooterPage from "./Pages/FooterPage";
import EndFooter from "./Pages/EndFooter";
function App() {
  return (
    <>
      <HomePage />
      <ServicePage />
      <AboutPage />
      <TestimonialsPage />
      <WhyChooseUs />
      <ServicePlans />
      <ContactPage />
      <FooterPage />
      <EndFooter />
    </>
  );
}

export default App;
