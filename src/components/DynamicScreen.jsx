import React, { useState } from "react";
import { gsap } from "gsap";
import ipadFrame from "../assets/ipad-Frame.webp";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpeg";

const DynamicScreen = () => {
  const [activeContent, setActiveContent] = useState(0);

  const contents = [image1, image2, image3, image4, image5];
  const navLinks = ["Home", "Services", "Action Plan", "Data", "Clinicians"];

  // Handle bending effect
  const handleHover = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();

    const x = clientX - rect.left; // X position within the element
    const y = clientY - rect.top; // Y position within the element

    const xPercent = ((x / rect.width) - 0.5) * 2; // Map to range [-1, 1]
    const yPercent = ((y / rect.height) - 0.5) * 2;

    gsap.to(currentTarget, {
      duration: 0.4,
      rotateX: -yPercent * 10, // Rotate based on vertical position
      rotateY: xPercent * 10,  // Rotate based on horizontal position
      ease: "power2.out",
      transformPerspective: 800,
      transformOrigin: "center",
    });
  };

  const handleHoverLeave = (e) => {
    gsap.to(e.currentTarget, {
      duration: 0.4,
      rotateX: 0,
      rotateY: 0,
      ease: "power2.out",
    });
  };

  // Handle glare effect
  const handleMouseMove = (e) => {
    const { clientX, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();

    const x = clientX - rect.left; // X position within the element

    // Move the glare effect
    gsap.to(".glare", {
      x: x - rect.width / 2, // Center the glare on the cursor
      opacity: 0.8,         // Strong glare effect
      ease: "power2.out",
      duration: 0.2,
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      {/* iPad Frame */}
      <div
        className="relative w-[600px] h-[400px] bg-center bg-cover"
        style={{ backgroundImage: `url(${ipadFrame})` }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverLeave}
      >
        {/* Screen Content */}
        <div className="absolute inset-5 bg-black rounded-lg overflow-hidden">
          <img
            srcSet={`${contents[activeContent]} 1x, ${contents[activeContent]} 2x`}
            alt={`Content ${activeContent + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Glare Effect */}
          <div
            className="glare absolute top-0 left-0 w-32 h-full bg-white bg-opacity-40 pointer-events-none"
            style={{
              transform: "translateX(-50%)",
              filter: "blur(16px)",
              opacity: 0,
              transition: "opacity 0.2s ease",
            }}
          ></div>
        </div>
      </div>

      {/* Navbar */}
      <div className="mt-6 w-full max-w-4xl">
        <nav className="flex justify-between items-center shadow-md rounded-lg px-3 py-1">
          {navLinks.map((link, index) => (
            <button
              key={index}
              className={`px-2 py-[5px] text-sm font-medium rounded-md transition-all ${
                activeContent === index
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 hover:bg-green-500 hover:text-white"
              }`}
              onClick={() => setActiveContent(index)}
            >
              {link}
            </button>
          ))}
        </nav>
      </div>

      {/* Footer Text */}
      <p className="mt-4 text-gray-500 text-center">
        Combining whole-body testing, leading clinicians, and personalized health programs.
      </p>
    </div>
  );
};

export default DynamicScreen;
