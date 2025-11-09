"use client";

import { educations } from "@/utils/data/educationData";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BsCalendar3, 
  BsAward
} from "react-icons/bs";
import { 
  FiCheckCircle
} from "react-icons/fi";
import { HiOutlineAcademicCap } from "react-icons/hi";

const EducationSection = () => {
  const [selectedEdu, setSelectedEdu] = useState(educations[0]);

  return (
    <section id="education" className="relative z-50 my-12 lg:my-24 px-4 md:px-16">
      <div className="glass- p-6 lg:p-12">
        {/* Header */}
        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex items-center">
            <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-[#16f2b3]"></span>
            <span className="glass-button w-fit text-white p-2 px-5 text-xl rounded-md">
              My Education
            </span>
            <span className="w-24 h-[2px] bg-gradient-to-l from-transparent to-[#16f2b3]"></span>
          </div>
        </div>

        {/* Interactive Education Content */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Education List */}
          <div className="lg:col-span-2 space-y-4">
            
            {educations.map((edu) => (
              <motion.div
                key={edu.id}
                onClick={() => setSelectedEdu(edu)}
                className={`glass-card p-4 cursor-pointer transition-all duration-300 ${
                  selectedEdu.id === edu.id ? 'border-[#16f2b3] bg-[#16f2b3]/10' : ''
                }`}
                whileHover={{ x: 8 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    selectedEdu.id === edu.id ? 'bg-[#16f2b3]' : 'bg-gray-500'
                  } transition-colors`}></div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">{edu.title}</h4>
                    <p className="text-gray-400 text-xs">{edu.duration}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Selected Education Details */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedEdu.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="glass-glow p-8 h-full"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#16f2b3] to-violet-500 rounded-3xl flex items-center justify-center">
                    <HiOutlineAcademicCap className="text-white text-3xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedEdu.title}</h3>
                    <p className="text-[#ffb703]">{selectedEdu.institution}</p>
                    <p className="text-[#16f2b3] text-sm">{selectedEdu.location}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="glass-button p-3">
                    <BsCalendar3 className="text-[#16f2b3] mb-2" />
                    <p className="text-white text-sm">{selectedEdu.duration}</p>
                  </div>
                  <div className="glass-button p-3">
                    <BsAward className="text-[#16f2b3] mb-2" />
                    <p className="text-white text-sm">{selectedEdu.grade}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">{selectedEdu.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-white font-semibold mb-3">Key Highlights</h4>
                  {selectedEdu.highlights?.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <FiCheckCircle className="text-[#16f2b3] text-sm" />
                      <span className="text-gray-300 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
