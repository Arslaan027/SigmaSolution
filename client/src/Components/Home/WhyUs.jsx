import React from "react";
import { motion } from "framer-motion";

// Define variants for card animations
const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // Cards start below and fade in
  visible: { opacity: 1, y: 0 }, // Cards move to their original position and fade in
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // Slightly longer delay for smoother staggered effect
      delayChildren: 0.1,
    },
  },
};

const FeatureCard = ({ icon, title, description, bgColor, index }) => {
  return (
    <motion.div
      className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${bgColor}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        opacity: { duration: 0.6, ease: "easeOut" }, // Smooth opacity transition
        y: { duration: 0.6, ease: "easeOut" }, // Smooth vertical transition
      }}
    >
      <div className="text-5xl mb-4 text-gray-800">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-center text-gray-600">{description}</p>
    </motion.div>
  );
};

const WhyLegalWiz = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Main Container with Centered Content */}
        <div className="w-6xl max-w-7xl mx-auto">
          {/* Text Section */}
          <motion.div
            className="mb-12 text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              className="text-lg font-bold text-orange-600 uppercase mb-4"
              variants={textVariants}
              transition={{
                opacity: { duration: 0.6, ease: "easeOut" },
                y: { duration: 0.6, ease: "easeOut" },
              }}
            >
              Why Sigma Solutions
            </motion.h2>
            <motion.h1
              className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6"
              variants={textVariants}
              transition={{
                opacity: { duration: 0.6, ease: "easeOut" },
                y: { duration: 0.6, ease: "easeOut" },
              }}
            >
              Choosing Sigma Solutions to Make a Difference
            </motion.h1>
            <motion.p
              className="text-gray-700 mb-12 leading-relaxed"
              variants={textVariants}
              transition={{
                opacity: { duration: 0.6, ease: "easeOut" },
                y: { duration: 0.6, ease: "easeOut" },
              }}
            >
              With our consistent services and results, we build trust and serve
              your business better.
            </motion.p>
          </motion.div>

          {/* Cards Section */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <FeatureCard
              index={0}
              icon="🛡️"
              title="Confidential & Safe"
              description="All your private information is secure with us."
              bgColor="bg-red-100"
            />
            <FeatureCard
              index={1}
              icon="✔️"
              title="No Hidden Fees"
              description="Everything is transparent with no hidden charges."
              bgColor="bg-green-100"
            />
            <FeatureCard
              index={2}
              icon="😊"
              title="Guaranteed Satisfaction"
              description="We ensure 100% satisfaction with our services."
              bgColor="bg-blue-100"
            />
            <FeatureCard
              index={3}
              icon="👨‍⚖️"
              title="Expert CA/CS Assistance"
              description="Prompt support from in-house professionals."
              bgColor="bg-purple-100"
            />
            <FeatureCard
              index={4}
              icon="📹"
              title="Video Assistance"
              description="Easy video guidance to keep you on track."
              bgColor="bg-gray-100"
            />
            <FeatureCard
              index={5}
              icon="🧩"
              title="Seamless Integration"
              description="Easily integrates with your existing systems."
              bgColor="bg-orange-100"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyLegalWiz;
