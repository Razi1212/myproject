import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const Section = () => {
  return (
    <div class="bg-zinc-900 w-screen h-screen">
      <div class="mx-6
         sm:grid-cols-2 sm:mx-11 sm:px-3 sm:py-5 sm:gap-8 
         md:mx-10 md:px-3 md:py-10 md:gap-16
         lg:mx-20 lg:py-32 lg:flex">

        <div className="p-10">
          <img
            src="./myimg.png"
            alt="Image"
            // className="w-16 h-16 object-cover sm:w-25 h-25 md:w-56 md:h-56"
            className="w-20 h-20 object-cover lg:w-80 lg:h-80"
          />
        </div>

        <div className="py-10">

          <p className=" text-gray-100 text-4xl font-bold tracking-tight
          sm:text-4xl
          md:text-5xl md:leading-tight md:font-semibold md:text-gray-100
          lg:text-5xl lg:leading-tight lg:font-semibold lg:text-gray-100
          ">
            Hey there,I’m
          </p>

        
          <p className="text-gray-100 text-4xl font-bold mt-2 tracking-tight
          md:text-5xl md:leading-tight md:text-gray-100 md:mt-2">
            Raziuddin
          </p>

          <p className="text-gray-100 text-4xl font-bold mt-2
          md:text-5xl md:leading-tight md:text-gray-100 md:mt-2">
            Shah Mohd.
          </p>

          <p className="text-gray-400 text-lg mt-12 leading-1 font-medium
           md:text:xl md:leading-normal md:text-base md:mt-6 md:mb-5 md:text-gray-400 mb-8">
            A Software Developer With Specific Liking Towards Frontend and learning new technologies.
          </p>

          <div class="grid gap-4 md:flex">
            <button className="bg-white text-zinc-900 rounded-full p-2 text-base
           md:bg-white md:text-zinc-900 md:px-3 md:py-2">
              Read my Blog
            </button>
            <button className="bg-zinc-800 text-white rounded-full p-2 text-base
           md:bg-white md:text-zinc-800 md:px-3 md:py-2">
              Let's Connect
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Section;





{/* 
          <img
            src="./img2.jpeg"
            alt="Image"
            className="w-48 h-48 object-cover mx-6 rounded-lg md:w-64 md:h-64 md:rounded-lg"
          />

          <img
            src="./Images5.jpeg"
            alt="Image"
            className="w-48 h-48 object-cover mx-6 rounded-lg md:w-64 md:h-64 md:rounded-lg"
          />

          <img
            src="./Images6.jpeg"
            alt="Image"
            className="w-48 h-48 object-cover mx-6 rounded-lg md:w-64 md:h-64 md:rounded-lg"
          />

          <img
            src="./Images7.jpeg"
            alt="Image"
            className="w-48 h-48 object-cover mx-6 rounded-lg md:w-64 md:h-64 md:rounded-lg"
          />

          <img
            src="./Images8.jpeg"
            alt="Image"
            className="w-48 h-48 object-cover mx-6 rounded-lg md:w-64 md:h-64 md:rounded-lg"
          />
          <img
            src="./Images9.jpeg"
            alt="Image"
            className="w-48 h-48 object-cover mx-6 rounded-lg md:w-64 md:h-64 md:rounded-lg"
          />
          <img
            src="./img6.jpeg"
            alt="Image"
            className="w-40 h-40 object-cover mx-6 rounded-lg md:w-64 md:h-64 md:rounded-lg"
          /> */}