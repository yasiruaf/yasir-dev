"use client";

import { experiences } from "@/utils/data/experience";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative z-50 my-12 lg:my-24 px-4 md:px-16">
      <div className="glass- p-6 lg:p-12">
        {/* Header */}
        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex items-center">
            <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-[#16f2b3]"></span>
            <span className="glass-button w-fit text-white p-2 px-5 text-xl rounded-md">
              ✨ My Experience
            </span>
            <span className="w-24 h-[2px] bg-gradient-to-l from-transparent to-[#16f2b3]"></span>
          </div>
        </div>

        {/* Minimal Experience View */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="border-l-2 border-[#16f2b3]/30 pl-8 pb-12 last:pb-0 relative group"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-[#16f2b3] rounded-full group-hover:scale-125 transition-transform"></div>
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#16f2b3] transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-[#ffb703] text-lg">{exp.company}</p>
                </div>
                <span className="text-[#16f2b3] text-sm mt-2 md:mt-0">{exp.duration}</span>
              </div>
              
              <p className="text-white leading-relaxed mb-4">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies?.slice(0, 4).map((tech, i) => (
                  <span key={i} className="text-[#16f2b3] text-sm">{tech}{i < 3 ? ' •' : ''}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
