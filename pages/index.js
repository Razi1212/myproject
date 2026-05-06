import Navigation from "./Components/Navigations";
import Section from "./Components/Section";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Section />

      <div className="w-full flex lg:p-[8%] px-5 py-14 md:p-[5%] bg-zinc-900">
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
              Worked at Focus Softnet (CentraHub CRM/ERP product suite) for
              ValueGold and Finance House, where I designed and implemented
              workflows to import and process Excel data — extracting gold
              purity values and mapping them into modules using JavaScript.
              Developed parameter-driven SQL query reports for customized,
              high-performance reporting. Implemented dynamic JavaScript logic
              to fetch and handle data across multiple modules, and enhanced UI
              responsiveness by enabling real-time grid population on user
              actions.
            </p>

            <p className="mb-8 leading-8 text-base text-gray-400">
              Designed and developed enterprise-grade BI dashboards using
              React.js and TypeScript for Sales, Operations, Renewals, and
              Project Management systems. Built a scalable component-based
              frontend architecture that improved maintainability and reuse
              across multiple enterprise modules. Integrated frontend
              applications with .NET REST APIs to enable real-time data
              rendering across CRM, ERP, and HCM systems. Created HLD and LLD
              documentation defining system architecture, data flow, and UI
              component structure. Improved application performance by ~30%
              through code splitting, lazy loading, and React virtualization for
              large dataset optimization. Developed role-based dashboards for
              executives, teams, and operations with dynamic KPI visualization.
              Implemented secure authentication systems including JWT and SSO
              for enterprise applications. Contributed to CI/CD pipelines and
              deployment workflows supporting production releases and go-live
              cycles. Worked in an Agile (Scrum) environment with
              cross-functional teams including backend, QA, and business
              analysts while also supporting junior developers through code
              reviews and debugging sessions.
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
      <Footer />
    </>
  );
}
