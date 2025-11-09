"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FiMail, FiPhone } from "react-icons/fi";
import { PERSONAL_DATA } from "@/utils/data/personalData";
import ContactForm from "../contactForm";

function ContactSection() {

  return (
    <section
      id="contact"
      className="relative z-50 my-12 lg:my-24 px-4 md:px-16"
    >
      <div className="glass- p-6 lg:p-12">
        {/* Header */}
        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex items-center">
            <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-[#16f2b3]"></span>
            <span className="glass-button w-fit text-white p-2 px-5 text-xl rounded-md">
              CONTACT ME
            </span>
            <span className="w-24 h-[2px] bg-gradient-to-l from-transparent to-[#16f2b3]"></span>
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key=""
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-12">
              <div className="text-center">
                <motion.h2
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                  className="text-4xl font-bold text-white mb-4"
                >
                  Let's Make Something Cool! 🎯
                </motion.h2>
                <p className="text-gray-300 text-lg">
                  Ready to turn your ideas into reality?
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, rotate: -5 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.2 }}
                  className="glass-glow p-8 relative"
                >
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#16f2b3] rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-violet-500 rounded-full animate-pulse"></div>

                  <h3 className="text-2xl font-bold text-white mb-6">
                    Drop me a message! 📝
                  </h3>
                  <ContactForm />
                </motion.div>

                <div className="space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="glass-card p-6 cursor-pointer"
                    onClick={() => window.open(`mailto:${PERSONAL_DATA.email}`)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#16f2b3] to-blue-500 rounded-2xl flex items-center justify-center">
                        <FiMail className="text-white text-xl" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Email me</h4>
                        <p className="text-gray-400 text-sm">
                          {PERSONAL_DATA.email}
                        </p>
                        <p className="text-[#16f2b3] text-xs">
                          Click to send! ⚡
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    className="glass-card p-6 cursor-pointer"
                    onClick={() => window.open(`tel:${PERSONAL_DATA.phone}`)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center">
                        <FiPhone className="text-white text-xl" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Call me</h4>
                        <p className="text-gray-400 text-sm">
                          {PERSONAL_DATA.phone}
                        </p>
                        <p className="text-violet-400 text-xs">
                          Let's talk! 📞
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <div className="glass-card p-6">
                    <h4 className="text-white font-semibold mb-4">
                      Find me around the web 🌐
                    </h4>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        {
                          icon: IoLogoGithub,
                          link: PERSONAL_DATA.github,
                          color: "bg-gray-600",
                          name: "GitHub",
                        },
                        {
                          icon: BiLogoLinkedin,
                          link: PERSONAL_DATA.linkedIn,
                          color: "bg-blue-600",
                          name: "LinkedIn",
                        },
                        {
                          icon: FaXTwitter,
                          link: PERSONAL_DATA.twitter,
                          color: "bg-gray-800",
                          name: "Twitter",
                        },
                      ].map((social, index) => (
                        <Link key={index} target="_blank" href={social.link}>
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            whileTap={{ scale: 0.95 }}
                            className={`${social.color} p-3 rounded-xl text-center hover:shadow-lg transition-all`}
                          >
                            <social.icon className="text-white text-xl mx-auto mb-1" />
                            <p className="text-white text-xs">{social.name}</p>
                          </motion.div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default ContactSection;
