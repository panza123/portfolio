import React, { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-scroll';
export default function Home() {
  const [typedText, setTypedText] = useState("");
  const fullText = "I'm a Frontend Developer.";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.substring(0, currentIndex));
      currentIndex++;
      if (currentIndex > fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <main name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Olowonla Farouq Tosin
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          {typedText}
          
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a Frontend developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive Frontend web applications.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
          <Link activeClass="active" to="work" smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
            <Link activeClass="active" to="work" smooth={true} duration={500}>
            <HiArrowNarrowRight className="ml-3" />
            </Link>
              
            </span>
          </button>
        </div>
      </div>
    </main>
  );
}
