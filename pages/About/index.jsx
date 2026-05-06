import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Navigation from "../Components/Navigations";
import Footer from "../Components/Footer";

const Experience = () => {
  return (
    <div className="bg-zinc-900  w-screen ">
      <Navigation />

      <div className="text-gray-400 lg:p-[8%] px-5 py-14 text-base md:p-[5%]">
        <h6 className="text-3xl font-bold mb-5 text-white">About me</h6>

        <p className="mb-5">
          I am Raziuddin Shah Mohd, worked at Focus Softnet (CentraHub CRM/ERP
          product suite) as a Software Developer. I am passionate about building
          efficient, user-friendly applications that solve real-world problems.
          Outside of work, I enjoy playing video games, which help me stay
          creative and think strategically. I also enjoy my own company —
          spending time reflecting, learning new skills, and continuously
          growing both personally and professionally. I believe in expanding my
          knowledge, taking on new challenges, and contributing positively to my
          team and the projects I work on.
        </p>

        <p className="mb-5">
          Demonstrated proficiency in understanding project requirements and
          executing end-to-end development. Skilled in a range of technologies,
          including HTML, CSS, JavaScript, Dotnet, MS-SQL, and Crystal Reports
          XI,Reactjs,Nextjs.
        </p>

        <p className="mb-5">
          Recognized as a key team player with a history of successfully
          managing large and complex assignments. Possesses excellent
          interpersonal, analytical, and team-building skills, coupled with a
          strong ability to communicate effectively. Known for quick
          adaptability to new concepts, translating them into productive and
          efficient solutions.
        </p>

        <h6 className="text-3xl font-bold mb-5 text-white">Experience</h6>

        <div className="flex justify-center items-center">
          <div className="text-gray-400">
            <div className="text-xl mb-2">Software Developer</div>
            <h1 className="   mb-2 text-lg">
              Focus Softnet (CentraHub CRM/ERP product suite){" "}
            </h1>
            <h1 className="   mb-3 text-lg">October 2022- March 2026</h1>
            <ul className="list-inside mb-4 ml-5">
              <li className="mb-5">
                <MdKeyboardDoubleArrowRight className="inline-block mr-4 leading-8 text-sm" />
                Successfully delivered multiple projects involving the design
                and development of services using .NET and JavaScript.
                Proficient in writing complex SQL queries and reports,
                integrating third-party APIs, and producing clear technical
                documentation to ensure smooth implementation and handover.
                Demonstrated ability to manage complete development cycles, from
                backend services to frontend features, while collaborating
                closely with cross-functional teams.
              </li>

              <li className="mb-5">
                <MdKeyboardDoubleArrowRight className="inline-block mr-4 leading-8 text-sm" />
                Strong track record of understanding complex project
                requirements and delivering robust, end-to-end solutions. Highly
                skilled in HTML, CSS, JavaScript, .NET, MS-SQL, and Crystal
                Reports XI, with additional experience in modern frontend
                frameworks like React.js and Next.js. Proven capability to build
                responsive, dynamic, and scalable web applications while
                ensuring alignment with business goals and user needs.
              </li>

              <li className="mb-5">
                <MdKeyboardDoubleArrowRight className="inline-block mr-4 leading-8 text-sm" />
                Recognized as a key team player with a history of successfully
                managing large and complex assignments. Possesses excellent
                interpersonal, analytical, and team-building skills, coupled
                with a strong ability to communicate effectively. Known for
                quick adaptability to new concepts, translating them into
                productive and efficient solutions.
              </li>
            </ul>
          </div>
        </div>

        <h6 className="text-3xl font-bold mb-5 text-white">
          Technologies I’m skilled at and prepared to tackle in real-world
          projects
        </h6>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-8 bg-zinc-900">
          {/* HTML */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-lg p-4 text-center hover:scale-105 transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
              alt="HTML"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-200">HTML</h3>
          </div>

          {/* CSS */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-lg p-4 text-center hover:scale-105 transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
              alt="CSS"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-200">CSS</h3>
          </div>

          {/* Bootstrap */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-lg p-4 text-center hover:scale-105 transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png"
              alt="Bootstrap"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-200">Bootstrap</h3>
          </div>

          {/* Tailwind */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-lg p-4 text-center hover:scale-105 transition">
            <img
              src="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg"
              alt="Tailwind CSS"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-200">
              Tailwind CSS
            </h3>
          </div>

          {/* React */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-lg p-4 text-center hover:scale-105 transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
              alt="React.js"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-200">React.js</h3>
          </div>

          {/* Next */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-lg p-4 text-center hover:scale-105 transition">
            <img
              src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
              alt="Next.js"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-200">Next.js</h3>
          </div>

          {/* MongoDB */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-lg p-4 text-center hover:scale-105 transition">
            <img
              src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
              alt="MongoDB"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-200">MongoDB</h3>
          </div>

          {/* APIs */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-lg p-4 text-center hover:scale-105 transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2164/2164832.png"
              alt="APIs"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-200">
              REST APIs / GraphQL
            </h3>
          </div>

          {/* SQL */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-lg p-4 text-center hover:scale-105 transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2772/2772128.png"
              alt="SQL"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-200">SQL</h3>
          </div>

          {/* API Integration */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-lg p-4 text-center hover:scale-105 transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2798/2798007.png"
              alt="API"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-200">
              API Integration
            </h3>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Experience;
