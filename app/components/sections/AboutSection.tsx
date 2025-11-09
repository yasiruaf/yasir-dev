"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  BsCode, 
  BsLightning, 
  BsHeart, 
  BsRocket,
  BsPalette,
  BsSpeedometer2,
  BsBrush,
  BsLaptop,
  BsEye,
  BsCpu,
  BsGear,
  BsStar
} from "react-icons/bs";
import { 
  FiCode, 
  FiMonitor, 
  FiSmile, 
  FiTrendingUp,
  FiZap,
  FiHeart,
  FiTarget,
  FiCheckCircle
} from "react-icons/fi";
import { HiOutlineSparkles, HiOutlineLightBulb } from "react-icons/hi";

const AboutSection = () => {
  // Enhanced content based on user's actual description
  const aboutContent = {
    name: "MUHAMMAD YASIR",
    title: "Full-Stack Developer",
    experience: "3+ years",
    mainDescription: "I'm a Full-Stack Developer with 3+ years of experience building fast, responsive, and user-friendly web applications. I take pride in writing clean, maintainable code and love turning great designs into seamless digital experiences. UX and performance are always at the heart of my work.",
    values: ["Clean Code", "User Experience", "Performance", "Responsive Design"]
  };

  return (
    <section id="about" className="relative z-50 my-12 lg:my-24 px-4 md:px-16">
      <div className="glass- p-6 lg:p-12">
        {/* Header */}
        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex items-center">
            <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-[#16f2b3]"></span>
            <span className="glass-button w-fit text-white p-2 px-5 text-xl rounded-md">
              ABOUT ME
            </span>
            <span className="w-24 h-[2px] bg-gradient-to-l from-transparent to-[#16f2b3]"></span>
          </div>
        </div>

        {/* Personal Introduction Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl lg:text-4xl font-bold text-white"
              >
                Hi, I'm <span className="text-[#16f2b3]">{aboutContent.name}</span>
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#16f2b3] to-violet-500 rounded-xl flex items-center justify-center">
                  <BsCode className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#ffb703]">{aboutContent.title}</h3>
                  <p className="text-[#16f2b3] text-sm">{aboutContent.experience} of experience</p>
                </div>
              </motion.div>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-white leading-relaxed text-lg"
            >
              {aboutContent.mainDescription}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-2"
            >
              {aboutContent.values.map((value, index) => (
                <span key={index} className="px-4 py-2 glass-button text-sm text-[#16f2b3] border border-[#16f2b3]/20">
                  {value}
                </span>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#16f2b3] to-violet-500 rounded-2xl opacity-20 group-hover:opacity-30 transition-all duration-300 blur-xl"></div>
              <Image
                src="/fiverr.jpg"
                width={320}
                height={320}
                alt="Muhammad Yasir"
                className="relative rounded-2xl transition-all duration-500 grayscale hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1224]/80 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="glass-button p-3 text-center">
                  <p className="text-white font-semibold">Ready to Code!</p>
                  <p className="text-[#16f2b3] text-sm">Front-End Developer</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
