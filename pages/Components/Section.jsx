import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const Section = () => {
  return (
    <div class="bg-zinc-900 h-full w-full">
      <div class="mx-4 py-5 gap-8 flex
         sm:grid-cols-2  sm:mx-11 sm:px-3 sm:py-5 sm:gap-8
         md:mx-14 md:px-3 md:py-10 md:gap-16
         lg:mx-20 lg:px-40 lg:py-20 lg:gap-16">
        <div>
          <p className="font-semibold tracking-tight text-gray-100 text-2xl 
          sm:text-2xl
          md:text-4xl md:leading-tight md:font-semibold md:text-gray-100  
          ">
            Hey there, I’m
          </p>
          <p className="mt-2 font-semibold tracking-tight text-gray-100 text-2xl 
          md:text-4xl md:leading-tight md:text-gray-100 md:mt-2">
            Raziuddin Shah
          </p>
          <p className="mt-2 text-xs leading-1 font-medium text-gray-400
           md:text:sm md:leading-normal md:text-base md:mt-6 md:mb-5 md:text-gray-400">
            A Software Developer With Specific Liking Towards Frontend and learning new technologies.
          </p>

          <div class="flex">
            <button className="bg-white text-zinc-900 px-2 py-2 mx-1 my-2 rounded-full text-xs
           md:bg-white md:text-zinc-900 md:px-3 md:py-2">
              Read my Blog
            </button>
            <button className="bg-zinc-800 px-2 py-2 mx-1 my-2 rounded-full text-white  text-xs
           md:bg-white md:text-zinc-800 md:px-3 md:py-2">
              Lets Connect
            </button>
          </div>

        </div>

        <div>
          {/* <img
            src="./img9.jpeg"
            alt="Image"
            className="w-80 h-80 object-cover rounded-full sm:max-h-32"
          /> */}
          <img
            src="./myimg.png"
            alt="Image"
            className="w-22 h-22 object-cover sm:w-25 h-25 md:w-56 md:h-56"
          />
        </div>
      </div>

      <div>
        <Marquee>
          <img
            src="./Images1.jpeg"
            alt="Image"
            className="w-32 h-32 object-cover mx-6 rounded-lg md:w-64 md:h-64 md:rounded-lg"
          />

          <img
            src="./Images2.jpeg"
            alt="Image"
            className="w-32 h-32 object-cover mx-6 rounded-lg md:w-64 md:h-64 md:rounded-lg"
          />

          <img
            src="./Images3.jpeg"
            alt="Image"
            className="w-32 h-32 object-cover mx-6 rounded-lg md:w-64 md:h-64 md:rounded-lg"
          />

          <img
            src="./Images4.jpeg"
            alt="Image"
            className="w-32 h-32 object-cover mx-6 rounded-lg md:w-64 md:h-64 md:rounded-lg"
          />

          <img
            src="./img2.jpeg"
            alt="Image"
            className="w-32 h-32 object-cover mx-6 rounded-lg md:w-64 md:h-64 md:rounded-lg"
          />

          <img
            src="./Images5.jpeg"
            alt="Image"
            className="w-32 h-32 object-cover mx-6 rounded-lg md:w-64 md:h-64 md:rounded-lg"
          />

          <img
            src="./Images6.jpeg"
            alt="Image"
            className="w-32 h-32 object-cover mx-6 rounded-lg md:w-64 md:h-64 md:rounded-lg"
          />

          <img
            src="./Images7.jpeg"
            alt="Image"
            className="w-32 h-32 object-cover mx-6 rounded-lg md:w-64 md:h-64 md:rounded-lg"
          />

          <img
            src="./Images8.jpeg"
            alt="Image"
            className="w-32 h-32 object-cover mx-6 rounded-lg md:w-64 md:h-64 md:rounded-lg"
          />
          <img
            src="./Images9.jpeg"
            alt="Image"
            className="w-32 h-32 object-cover mx-6 rounded-lg md:w-64 md:h-64 md:rounded-lg"
          />
          <img
            src="./img6.jpeg"
            alt="Image"
            className="w-32 h-32 object-cover mx-6 rounded-lg md:w-64 md:h-64 md:rounded-lg"
          />
        </Marquee>
      </div>
    </div>
  );
};

export default Section;
