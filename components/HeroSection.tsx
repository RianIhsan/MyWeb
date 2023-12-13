
"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import ReactTyped from 'react-typed';
import 'react-typed/dist/animatedCursor.css';


const HeroSection = () => {
  const handleDownloadCV = () => {
    window.open("https://drive.google.com/file/d/1xHUNKpR9xItncGWEsmn4kR0GotXw1LKz/view?usp=sharing", "_blank");
  };
  const handleGithub = () => {
    window.open("https://github.com/RianIhsan", "_blank");
  }

  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/Rian.jpeg"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">  
           <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
             <ReactTyped
             strings={['Hi, I\'m Yon!']}
             typeSpeed={40}
             loop
             />
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I'm a{" "}
            <span className="font-semibold text-sky-500">
              Junior Backend Developer{" "}
            </span>
            experienced in creating REST APIs, managing databases using MySQL or PostgreSQL, and proficient in Linux usage.
          </p>
          <button
            className="text-neutral-100 font-semibold px-6 py-3 bg-sky-500 rounded shadow hover:bg-sky-700 mr-4"
            onClick={handleDownloadCV}
          >
            Download CV
          </button>
            
          <button
            className="text-neutral-100 font-semibold px-6 py-3 bg-sky-500 rounded shadow hover:bg-sky-700"
            onClick={handleGithub}
          >
            My Github
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
