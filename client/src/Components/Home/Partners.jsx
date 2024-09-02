import React from "react";
import arslaan from "../../assets/Image/arslaan.jpg";
// Replace these with your actual icons later

const Partners = () => {
  const images = [
    arslaan,
    arslaan,
    arslaan,
    arslaan,
    arslaan,
    arslaan,
    arslaan,
    arslaan,
    arslaan,
    arslaan,
  ];

  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Our Trusted Partners
      </h2>
      <div className="overflow-hidden">
        <div
          className="flex animate-scroll"
          style={{
            animation: "scroll 20s linear infinite",
            display: "flex",
            width: `${images.length * 10}%`,
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Partner ${index + 1}`}
              className="w-16 h-16 p-2 object-contain"
            />
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Partners;
