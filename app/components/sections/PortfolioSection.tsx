"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { portfolioData } from "@/utils/data/portfolioData";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
// import { IconArrow } from "../icons/IconArrow";

export const PortfolioSection = () => {
  return (
    <>
      <section className="relative pb-3 lg:pb-[6rem] px-4 md:px-16">
        <div className="glass-panel- p-6 lg:p-8">
          <div className="flex justify-center items-center mb-8">
            <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-[#16f2b3]"></span>
            <span className="glass-button w-fit text-white p-2 px-5 text-xl rounded-md">
              My Portfolio
            </span>
            <span className="w-24 h-[2px] bg-gradient-to-l from-transparent to-[#16f2b3]"></span>
          </div>

        {portfolioData.map((item, index) => {
          return (
            <motion.div
              key={item.id}
              className={`rounded-t-3xl flex flex-col lg:flex-row items-start justify-between h-full lg:h-screen lg:sticky lg:top-[.2rem] bg-black overflow-hidden ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } bg-cover bg-center mb-12 lg:mb-0`}
              initial={{ y: 100 }}
              transition={{ duration: 1, delay: index * 0.5 }}
            >
              {index == 0 ? (
                <Image
                  src="/decorator/s-10.png"
                  height={500}
                  width={500}
                  alt="decorator"
                  className="absolute left-0 bottom-0 z-30 opacity-30"
                />
              ) : index == 1 ? (
                <Image
                  src="/decorator/s-4.png"
                  height={500}
                  width={500}
                  alt="decorator"
                  className="absolute right-0 bottom-0 z-30 opacity-30"
                />
              ) : index == 2 ? (
                <Image
                  src="/decorator/s-9.png"
                  height={500}
                  width={500}
                  alt="decorator"
                  className="absolute left-0 bottom-10 z-30 opacity-20"
                />
              ) : (
                <></>
              )}
              <div className="w-full lg:w-[50%] space-y-4 lg:space-y-6 h-full p-6 lg:p-12 flex flex-col justify-start">
                <h3 className="text-xl lg:text-2xl text-white">{`0${item.id}`}</h3>
                <h3 className="text-white normal-case text-2xl md:text-4xl">
                  {item.title}
                </h3>
                <div className="space-y-4 lg:space-y-5">
                  <p className="text-white">{item.description2}</p>
                  <ul className="list-disc pl-5 text-white">
                    {item.technologies.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                </div>
                <div className="pt-8 lg:pt-12 flex gap-4">
                  <Link
                    href={item.projectUrl}
                    target="_blank"
                    className="flex items-center group transition-all duration-300 w-fit z-50 text-white"
                  >
                    View Project
                    <IoArrowForward className="ml-2 relative transform transition-all duration-300 group-hover:translate-x-2" />
                  </Link>
                </div>
              </div>
              <div className="w-full lg:w-[50%] h-[300px] lg:h-[94vh]">
                <Image
                  src={item.backgroundImage}
                  alt={item.title || "portfolio"}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          );
        })}
        </div>
      </section>
    </>
  );
};
