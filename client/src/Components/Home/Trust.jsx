import React, { useRef } from "react";
import google from "../../assets/Image/Google.png";
import arslaan from "../../assets/Image/arslaan.jpg";
import salman from "../../assets/Image/salman.jpg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Trust = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.1, // Trigger when 10% of the section is visible
  });

  // Create a ref for the Slider component
  const sliderRef = useRef(null);

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // Tablet
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true, // Enable arrows on mobile if needed
          dots: true, // Ensure dots are visible on mobile
        },
      },
    ],
  };

  return (
    <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 py-24 hidden md:block">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-32">
          {/* Text Content on the Left */}
          <div
            className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
            ref={ref} // Attach the ref here
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Hear What Our Customers Have To Say
            </h2>
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              Sigma<span className="text-red-500">Solutions</span> is used by
              tens of thousands of founders to start, manage, and grow their
              business
            </h3>
            <p className="text-red-500 text-3xl font-bold mb-4">
              {inView ? <CountUp start={0} end={20000} duration={7} /> : "0"}+
              Happy Customers
            </p>
            <p className="text-gray-600 mb-6">
              We are one of India's highest rated service providers, known for
              completing Business incorporations and other compliance services
              in record time. Don’t just take our word for it—read it for
              yourself.
            </p>
            <p className="text-gray-500 text-sm mb-6">
              Sigma Solution is a startup India registered company
            </p>
          </div>

          {/* Testimonial Box on the Right */}
          <div className="md:w-1/2 flex flex-col items-center md:items-end">
            <div className="relative w-full bg-white p-6 shadow-xl rounded-xl">
              {/* Slider Component */}
              <Slider {...sliderSettings} ref={sliderRef}>
                <div className="px-4">
                  <div className="flex items-center mb-4">
                    <img src={google} alt="Google" className="w-10 h-10 mr-4" />
                    <span className="text-sm text-gray-500">Posted on</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Great experience to have associated with SIGMA SOLUTION
                    team. All documentations for registration was done online
                    with prompt updates. Thanks to entire team, especially
                    Priyanka ma'am, for personally updating me and Himanshi for
                    coordinating... Thank you...
                  </p>
                  <p className="font-bold text-gray-800">Trinity Finserv LLP</p>
                </div>
                <div className="px-4">
                  <div className="flex items-center mb-4">
                    <img src={google} alt="Google" className="w-10 h-10 mr-4" />
                    <span className="text-sm text-gray-500">Posted on</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Fantastic service and very professional. The process was
                    smooth, and the team was very responsive to all my queries.
                    Highly recommend SigmaSolutions for anyone looking to start
                    their business with ease.
                  </p>
                  <p className="font-bold text-gray-800">Future Tech Ltd.</p>
                </div>
                <div className="px-4">
                  <div className="flex items-center mb-4">
                    <img src={google} alt="Google" className="w-10 h-10 mr-4" />
                    <span className="text-sm text-gray-500">Posted on</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Excellent support and quick turnaround time. The team at
                    SigmaSolutions made the entire process hassle-free. I’m
                    impressed with their professionalism and dedication to
                    customer satisfaction.
                  </p>
                  <p className="font-bold text-gray-800">Global Enterprises</p>
                </div>
              </Slider>

              {/* Navigation Arrows */}
              <div className="absolute bottom--3 right-28 transform translate-x-full">
                <div className="absolute top-1/2 transform -translate-y-1/10 flex space-x-2">
                  <button
                    className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center"
                    onClick={() => sliderRef.current.slickPrev()} // Go to previous slide
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center"
                    onClick={() => sliderRef.current.slickNext()} // Go to next slide
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>

              {/* Customer Images */}
              <div className="absolute top-0 left-0 -ml-12 transform -translate-x-full">
                <img
                  src={arslaan}
                  alt="Trinity"
                  className="w-20 h-20 rounded-full border-2 border-white shadow-md"
                />
              </div>
              <div className="absolute top-0 right-0 flex space-x-2 transform translate-x-12 -translate-y-12">
                <img
                  src={salman}
                  alt="customer 1"
                  className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                />
                <img
                  src={arslaan}
                  alt="customer 2"
                  className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trust;
