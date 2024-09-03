import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./partner.css";

const brandLogos = [
  { src: "/brand-logos/google.png", alt: "Google logo" },
  { src: "/brand-logos/dabur.png", alt: "Dabur logo" },
  { src: "/brand-logos/emaar.png", alt: "Emaar logo" },
  { src: "/brand-logos/hero.png", alt: "Hero logo" },
  { src: "/brand-logos/honda.png", alt: "Honda logo" },
  { src: "/brand-logos/panasonic.png", alt: "Panasonic logo" },
  { src: "/brand-logos/pepsico.png", alt: "PepsiCo logo" },
  { src: "/brand-logos/saint-goblin.png", alt: "Saint Goblin logo" },
  { src: "/brand-logos/the-leela.png", alt: "The Leela logo" },
  { src: "/brand-logos/ultratech.png", alt: "UltraTech logo" },
  { src: "/brand-logos/vedanta.png", alt: "Vedanta logo" },
  { src: "/brand-logos/nirma.png", alt: "Nirma logo" },
];

const BrandLogo = ({ src, alt }) => (
  <div className="flex-shrink-0 w-32 mx-4">
    <img src={src} alt={alt} className="w-full h-auto object-contain" />
  </div>
);

const BrandInfo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 10 });
  }, []);

  return (
    <section className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 py-12 text-center mb-10">
      {/* Heading and Paragraph */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">
          Our proudly collaborate <span className="">Partners</span>.
        </h2>
        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          Discover the <span className="text-red-500">partners</span>{" "}
          contributing with Sigma
          <span className="text-red-500">Solutions</span>.
        </h3>
      </div>

      {/* Brand Logos Slider */}
      <div className="relative mt-10">
        <div className="marquee-wrapper">
          <div className="animate-marquee">
            {brandLogos.concat(brandLogos).map((logo, index) => (
              <BrandLogo key={index} src={logo.src} alt={logo.alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandInfo;
