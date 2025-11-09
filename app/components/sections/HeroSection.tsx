import React from "react";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { PERSONAL_DATA } from "@/utils/data/personalData";
import { CodeBlock } from "../CodeBlock";

const SocialLinks = [
  {
    href: PERSONAL_DATA.github,
    icon: BsGithub,
  },
  {
    href: PERSONAL_DATA.linkedIn,
    icon: BsLinkedin,
  },
  {
    href: PERSONAL_DATA.twitter,
    icon: FaTwitterSquare,
  },
];

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12 px-4 md:px-16">

      <div className="glass- p-6 lg:p-8 mb-8 lg:mb-12">
        <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is{" "}
            <span className="text-[#ffb703] uppercase">
              {PERSONAL_DATA.name},
            </span>
            <br />
            {`I'm a Professional `}
            <span className="text-[#16f2b3]">{PERSONAL_DATA.designation}</span>.
          </h1>

          <div className="my-12 flex items-center gap-5">
            {SocialLinks.map(({ href, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                className="transition-all text-[#ffb703] hover:scale-125 duration-300"
              >
                <Icon size={30} />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="glass-button hover:glass-button transition-all duration-300"
            >
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-transparent rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3 cursor-pointer">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link
              className="glass-button flex items-center gap-1 hover:gap-3 rounded-full px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              target="_blank"
              href={PERSONAL_DATA.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2 glass-glow relative overflow-hidden">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#16f2b3] to-[#16f2b3]"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-[#16f2b3] to-transparent"></div>
          </div>

          <div className="px-4 lg:px-8 py-4 lg:py-8">
            <CodeBlock />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
