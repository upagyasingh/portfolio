import React from "react";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Tech from "./Tech";
import Works from "./Works";
import Contact from "./Contact";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Footer from "./Footer";

function ContactPage() {
  const particlesInit = async (main) => {
    // Initialize tsParticles instance
    await loadFull(main);
  };

  const particlesConfig = {
    particles: {
      number: {
        value: 150,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff", // Particle color
      },
      shape: {
        type: "circle", // Particle shape
      },
      opacity: {
        value: 0.5,
        random: true,
      },
      size: {
        value: 3,
        random: true,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        outModes: "out",
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: { distance: 100 },
        push: { particles_nb: 4 },
      },
    },
  };

  return (
    <div className="overflow-hidden">
      {/* Particles in the background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="absolute inset-0 -z-10"
      />
     
      {/* Remaining Sections */}
      <div className="relative z-0">
        <Contact />
      </div>
    </div>
  );
}

export default ContactPage;
