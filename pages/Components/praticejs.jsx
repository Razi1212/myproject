import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Experience = () => {
  return (
    <div className='bg-zinc-900  w-screen h-screen '>
    <div className='text-4xl font-bold text-center p-5 text-white  md:p-16'>Experience</div>
    <div></div>
    <div className='flex justify-center items-center'>
       <div className='ml-10 md:ml-20'>
       <div className='text-xl mb-2 text-gray-400'>Software Developer</div>
         <h1 className='   mb-2 text-lg text-gray-400' >Centrahub</h1>
         <h1 className='   mb-3 text-lg text-gray-400'>October 2022-Present</h1>
         <ul className="   list-inside mb-4 ml-5 text-gray-400">
            <li>
              <MdKeyboardDoubleArrowRight className="inline-block mr-4 leading-20 text-sm" />
              Currently manage almost everything from requirement gathering to understanding requirements, end to end development and communication with an international client of the company.
            </li>
            <li>
              <MdKeyboardDoubleArrowRight className="inline-block mr-4 text-sm" />
              Worked on creating multiple external modules for Finance House using technologies such as C#, HTML, CSS, JavaScript, and Bootstrap.
            </li>
            <li>
              <MdKeyboardDoubleArrowRight className="inline-block mr-4 text-sm" />
              Did the system design and POC for inhouse Video Analytics Project in which used ML and AI algorithms are used for ad recommendation, content moderation and searching engine for movies shows.
            </li>
          </ul>
       </div>
    </div>
    </div>
  )
}

export default Experience