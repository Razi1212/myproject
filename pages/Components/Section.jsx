import React from "react";
import { FaLinkedin, FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const Section = () => {
  return (
    <div className="bg-zinc-900 w-screen h-screen">
      <div className="mx-6
         sm:grid sm:grid-cols-1 sm:mx-11 sm:px-3 sm:py-5 sm:gap-8 
         md:mx-10 md:px-3 md:py-10 md:gap-16
         lg:mx-10 lg:py-10 lg:flex md:flex">

        <div className="p-10">
          <img
            src="./myimg.png"
            alt="Portrait of Raziuddin Shah Mohd."
            className="w-20 h-20 md:w-56 md:h-28 object-cover lg:w-max lg:h-max"
          />
        </div>

        <div className="py-10">
          <p className="text-gray-100 text-4xl md:text-3xl font-bold tracking-tight sm:text-4xl  lg:text-5xl">
            Hey there, I’m Raziuddin
          </p>
          <p className="text-gray-100 text-4xl font-bold mt-2 md:text-3xl">
            Shah Mohd.
          </p>

          <p className="text-gray-400 text-lg mt-12 mb-3 leading-8 font-medium md:text-xl md:mt-6 md:mb-5">
            Turning ideas into responsive, modern web interfaces — I’m a Software Developer who loves the Frontend and thrives on learning what’s next.
          </p>

          <div className="grid gap-4 md:flex">
            {/* <button className="bg-white text-zinc-900 rounded-full p-2 text-base md:px-3 md:py-2">
              Read my Blog
            </button> */}
            <Link href="/Contact">
              <button className="bg-zinc-800 text-white rounded-full p-2 text-base md:px-3 md:py-2">
                Let's Connect
              </button>
            </Link>
          </div>
        </div>

      </div>

      <div className="bg-zinc-900">
        <div className="">
          <Marquee>
            <img
              src="./Images1.jpeg"
              alt="Image 1"
              className="w-32 h-28 object-cover mx-6 rounded-lg md:w-40 md:h-40 lg:w-52 lg:h-52 max-w-full"
              key="img1"
            />
            <img
              src="./Images2.jpeg"
              alt="Image 2"
              className="w-32 h-28 object-cover mx-6 rounded-lg md:w-40 md:h-40  lg:w-52 lg:h-52  max-w-full"
              key="img2"
            />
            <img
              src="./Images3.jpeg"
              alt="Image 3"
              className="w-32 h-28 object-cover mx-6 rounded-lg md:w-40 md:h-40  lg:w-52 lg:h-52  max-w-full"
              key="img3"
            />
            <img
              src="./Images4.jpeg"
              alt="Image 4"
              className="w-32 h-28 object-cover mx-6 rounded-lg md:w-40 md:h-40  lg:w-52 lg:h-52 max-w-full"
              key="img4"
            />

            <img
              src="./img2.jpeg"
              alt="Image"
              className="w-32 h-28 object-cover mx-6 rounded-lg md:w-40 md:h-40  lg:w-52 lg:h-52 max-w-full"
            />

            <img
              src="./Images5.jpeg"
              alt="Image"
              className="w-32 h-28 object-cover mx-6 rounded-lg md:w-40 md:h-40  lg:w-52 lg:h-52 max-w-full"
            />

            <img
              src="./Images6.jpeg"
              alt="Image"
              className="w-32 h-28 object-cover mx-6 rounded-lg md:w-40 md:h-40  lg:w-52 lg:h-52 max-w-full"
            />

            <img
              src="./Images7.jpeg"
              alt="Image"
              className="w-32 h-28 object-cover mx-6 rounded-lg md:w-40 md:h-40  lg:w-52 lg:h-52 max-w-full"
            />

            <img
              src="./Images8.jpeg"
              alt="Image"
              className="w-32 h-28 object-cover mx-6 rounded-lg md:w-40 md:h-40  lg:w-52 lg:h-52 max-w-full"
            />
            <img
              src="./Images9.jpeg"
              alt="Image"
              className="w-32 h-28 object-cover mx-6 rounded-lg md:w-40 md:h-40  lg:w-52 lg:h-52 max-w-full"
            />
            <img
              src="./img6.jpeg"
              alt="Image"
              className="w-32 h-28 object-cover mx-6 rounded-lg md:w-40 md:h-40  lg:w-52 lg:h-52 max-w-fullg"
            />
          </Marquee>
        </div>
      </div>
    </div>
  );
};
export default Section;


