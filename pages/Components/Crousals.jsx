import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

const Crousals = () => {
    return (
        <div class="bg-zinc-900 w-screen h-screen">
            <div className="pt-10 pb-2">
                <Marquee>
                    <img
                        src="./Images1.jpeg"
                        alt="Image"
                        className="w-40 h-40  object-cover mx-6 rounded-lg md:w-64 md:h-64 md:rounded-lg"
                    />
                    <img
                        src="./Images2.jpeg"
                        alt="Image"
                        className="w-40 h-40  object-cover mx-6 rounded-lg md:w-64 md:h-64 md:rounded-lg"
                    />
                    <img
                        src="./Images3.jpeg"
                        alt="Image"
                        className="w-40 h-40  object-cover mx-6 rounded-lg md:w-64 md:h-64 md:rounded-lg"
                    />
                    <img
                        src="./Images4.jpeg"
                        alt="Image"
                        className="w-40 h-40 object-cover mx-6 rounded-lg md:w-64 md:h-64 md:rounded-lg"
                    />
                </Marquee>
            </div>

            <div
                className="pl-8"
            >
                <h1 className="text-4xl font-bold text-gray-50 ">About Me</h1>
                <div class="border-b border-blue-500 border-2 w-20 mt-2 mb-7"></div>
                <p className="mb-8 leading-9 text-lg text-gray-400 ">
                    I am passionate about designing and developing responsive - seamless
                    UI/UX experience, building scalable and efficient web applications,
                    and looking for challenging opportunities which gives me a scope to
                    grow up along with organisational growth.An experienced ECE graduate
                    who is very much enthusiastic about full-stack development
                    specialising in front-end development.Outside of coding, I am a
                    boxing fan and a gardener.
                </p>
            </div>
        </div>
    );
};
export default Crousals






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