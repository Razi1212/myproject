import Navigation from "./Components/Navigation";
import Section from "./Components/Section";

export default function Home() {
  return (
    <>
      <Navigation />
      <Section />

      <div className="w-full flex lg:p-[8%] px-5 py-14 bg-zinc-900">
        <div>
          {/* About section */}
          <div className="mt-16 ">
            <p className="text-green-400 uppercase tracking-widest mb-3">
              Crafting Ideas Into Impactful Code
            </p>

            <h1 className="text-3xl font-bold mb-5 text-white">About Me</h1>
            <div className="border-b-4 border-blue-500 w-20 mb-7"></div>

            <p className="mb-8 leading-8 text-base text-gray-400">
              I'm passionate about designing and developing seamless, responsive
              UI/UX experiences and building scalable, efficient web
              applications. I'm seeking challenging opportunities that allow me
              to grow alongside the organization's growth. As an experienced ECE
              graduate, I'm highly enthusiastic about full-stack development,
              with a special focus on front-end. Outside of coding, I'm a boxing
              enthusiast and an avid gardener.
            </p>

            {/* CTA Button Line */}
            <div className="mt-6">
              <p className="text-base text-gray-200 font-semibold mb-4">
                Curious to know more about my journey and work?
              </p>
              <a
                href="/About"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition duration-300 font-semibold"
              >
                Learn More About Me
              </a>
            </div>
          </div>

          {/* EXPERIENCE section */}
          <div className="mt-16 ">
            <h1 className="text-3xl font-bold mb-5 text-white">Experience</h1>
            <div className="border-b-4 border-blue-500 w-20 mb-7"></div>

            <p className="mb-8 leading-8 text-base text-gray-400">
              Full-stack developer with a proven record of delivering robust
              projects using .NET, JavaScript, MS-SQL, and modern frameworks
              like React.js and Next.js. Skilled in end-to-end development,
              complex SQL reporting, API integrations, and clear technical
              documentation. Recognized as a collaborative team player with
              strong problem-solving, communication, and adaptability skills.
            </p>

            <div className="mt-6">
              <a
                href="/About"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition duration-300 font-semibold"
              >
                Know More
              </a>
            </div>
          </div>

          {/* project Section */}
          <div className="mt-16">
            <h1 className="text-3xl font-bold mb-5 text-white">Projects</h1>
            <div className="border-b-4 border-blue-500 w-20 mb-7"></div>

            <p className="mb-8 leading-8 text-base text-gray-400">
              Worked at CentraHub for ValueGold and Finance House, where I
              designed and implemented workflows to import and process Excel
              data — extracting gold purity values and mapping them into modules
              using JavaScript. Developed parameter-driven SQL query reports for
              customized, high-performance reporting. Implemented dynamic
              JavaScript logic to fetch and handle data across multiple modules,
              and enhanced UI responsiveness by enabling real-time grid
              population on user actions.
            </p>

            <p className="mb-8 leading-8 text-base text-gray-400">
              Built a dynamic job portal for Al-Sayed Staffing, allowing users
              to browse available jobs, perform real-time searches with
              debounced input for performance, and submit applications with
              resume uploads and personal details. Developed an admin panel with
              secure session-based authentication so authorized admins can
              create and manage job listings, view detailed candidate
              applications, preview resumes, and securely download or delete
              them. Added efficient pagination for smooth navigation of large
              job listings.
            </p>

            <div className="mt-6">
              <a
                href="/Project"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition duration-300 font-semibold"
              >
                Explore More Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
