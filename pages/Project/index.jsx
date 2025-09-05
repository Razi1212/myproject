import React from 'react'
import Navigations from '../Components/Navigations';
import Footer from '../Components/Footer'

const Project = () => {
  return (
    <>
      <Navigations />
      <div className='text-gray-400 lg:p-[8%] px-5 py-14 text-base bg-zinc-900  w-screen'>

        <div className="flex flex-col space-y-20">
          <div className="flex-1 w-full bg-white/5 backdrop-blur-lg text-white space-y-10 p-6 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-white">Projects at Centrahub</h2>
            <div>
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Project 1: Value Gold</h3>
              <p className="text-sm mb-1 text-gray-400"><strong>Client:</strong> Value Gold</p>
              <p className="text-sm mb-1 text-gray-400"><strong>Role:</strong> Junior Software Developer</p>
              <p className="text-sm mb-4 text-gray-400"><strong>Technologies:</strong> JavaScript, .NET</p>
              <ul className="list-disc list-inside space-y-1 text-gray-400">
                <li><strong>Imported Excel Data:</strong> Read and extracted Excel data using JavaScript, especially gold purity values.</li>
                <li><strong>Set Records in Module:</strong> Populated CRM modules with imported data using JavaScript with accurate field mapping.</li>
                <li><strong>SQL Report Development:</strong> Created optimized, parameterized SQL reports based on business logic.</li>
                <li><strong>Cross-Module Data:</strong> Used JS to fetch and manage data between CRM modules.</li>
                <li><strong>Dynamic Grid:</strong> Populated UI body grid dynamically on button click to enhance UX.</li>
              </ul>
            </div>

            <hr className="border-gray-300" />


            <div >
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Project 2: CRM Integration - Finance House</h3>
              <p className="text-sm mb-1 text-gray-400"><strong>Client:</strong> Finance House</p>
              <p className="text-sm mb-1 text-gray-400"><strong>Role:</strong> Software Developer</p>
              <p className="text-sm mb-4 text-gray-400"><strong>Technologies:</strong> MS SQL, JavaScript, HTML, CSS, .NET</p>
              <ul className="list-disc list-inside space-y-1 text-gray-400">
                <li>Built secure .NET-based web service with access-token authentication for external data integration into CRM.</li>
                <li>Designed API with <code>cfid</code> and <code>eidno</code> for customer-specific data mapping.</li>
                <li>Enabled export of CRM data to Excel and PDF using EPPlus.</li>
                <li>Handled IIS deployment with HTTPS and app pool management.</li>
                <li>Created full API documentation with request/response, token flow, and error cases.</li>
                <li>Implemented encryption and access-token security mechanisms.</li>
                <li>Gathered requirements and collaborated with stakeholders for a smooth CRM user experience.</li>
              </ul>
            </div>

            <hr className="border-gray-300" />


            <div>
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Project 3: Dynamic Pricing - Creations Overseas</h3>
              <p className="text-sm mb-1 text-gray-400"><strong>Client:</strong> Creations Overseas</p>
              <p className="text-sm mb-1 text-gray-400"><strong>Role:</strong> Software Developer</p>
              <p className="text-sm mb-4 text-gray-400"><strong>Technologies:</strong> MS SQL, JavaScript, .NET</p>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Created external popup triggered on Quantity field change in CRM Opportunity form.</li>
                <li>Fetched pricing data dynamically via a .NET web service using the selected product.</li>
                <li>Retrieved and displayed unit cost, base price, and margin thresholds.</li>
                <li>Performed live calculations for selling price, profit per unit, and total profit.</li>
                <li>Suggested the best quoted rate in real-time, aiding better pricing decisions.</li>
                <li>Updated CRM record upon user confirmation, enhancing efficiency.</li>
                <li>Reduced manual effort and improved sales productivity through automation.</li>
              </ul>
            </div>
          </div>

          {/* <div className="flex-1 w-full bg-white/5 backdrop-blur-lg text-white space-y-10 p-6 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-white">Personal Project</h2>

            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-indigo-600">Al Sayeed Staffing Solution</h3>
                <a
                  href="https://al-sayed-staffing-solution.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-1.5 rounded-lg shadow-md transition duration-300"
                >
                  Visit Site
                </a>
              </div>

              <p className="text-sm mb-1 text-gray-300">
                <strong>Client:</strong> Al Sayeed Solutions
              </p>
              <p className="text-sm mb-1 text-gray-300">
                <strong>Role:</strong> Full Stack Developer
              </p>
              <p className="text-sm mb-4 text-gray-300">
                <strong>Technologies:</strong> JavaScript, React.js, Next.js, Tailwind CSS, Framer Motion, MongoDB
              </p>
              <p className="text-sm text-gray-300 mb-4">
                Developed a production-ready, full-stack web application for Al-Sayeed Staffing Solution to strengthen their digital marketing strategy and online branding. The platform offers a seamless experience for both job seekers and internal admins. Currently in the final testing phase, deployment to a live domain is planned imminently.
              </p>

              <p className="text-md font-semibold text-indigo-400 mb-2">Responsibilities:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Built responsive, animated frontend UI using Tailwind CSS and Framer Motion.</li>
                <li>Implemented form validation and interactive components using React.js.</li>
                <li>Integrated MongoDB for dynamic job listings and admin panel data.</li>
                <li>Set up role-based access for job seekers and administrators.</li>
                <li>Prepared for production deployment with clean URLs and SEO best practices.</li>
              </ul>

              <p className="text-md font-semibold text-indigo-400 mt-4 mb-2">Key Pages Developed:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li><strong>Home:</strong> Eye-catching landing page with smooth animations and featured job highlights.</li>
                <li><strong>About Us / Services:</strong> Professional company overview and staffing solution details.</li>
                <li><strong>Employers:</strong> Dedicated section for employer partnerships and services.</li>
                <li><strong>Job Seekers:</strong> Interface for browsing job listings and submitting applications.</li>
                <li><strong>Contact Us:</strong> Interactive form with proper input validation and backend submission.</li>
              </ul>
            </div>
          </div> */}

          <div className="relative w-full">
      
            <img
              src="Img.jpeg" // 👈 Replace with your project image path
              alt="Project background"
              className="absolute inset-0 w-full h-full object-cover opacity-1 blur-sm z-0 rounded-2xl"
            />

            <div className="relative z-10 flex-1 w-full bg-white/5 backdrop-blur-lg text-white space-y-10 p-6 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-white">Personal Project</h2>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-indigo-600">Al Sayeed Staffing Solution</h3>
                  <a
                    href="https://al-sayed-staffing-solution.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-1.5 rounded-lg shadow-md transition duration-300"
                  >
                    Visit Site
                  </a>
                </div>

                <p className="text-sm mb-1 text-gray-300"><strong>Client:</strong> Al Sayeed Solutions</p>
                <p className="text-sm mb-1 text-gray-300"><strong>Role:</strong> Full Stack Developer</p>
                <p className="text-sm mb-4 text-gray-300"><strong>Technologies:</strong> JavaScript, React.js, Next.js, Tailwind CSS, Framer Motion, MongoDB</p>

                <p className="text-sm text-gray-300 mb-4">
                  Developed a production-ready, full-stack web application for Al-Sayeed Staffing Solution...
                </p>

                <p className="text-md font-semibold text-indigo-400 mb-2">Responsibilities:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>Built responsive, animated frontend UI using Tailwind CSS and Framer Motion.</li>
                  <li>Implemented form validation and interactive components using React.js.</li>
                  <li>Integrated MongoDB for dynamic job listings and admin panel data.</li>
                  <li>Set up role-based access for job seekers and administrators.</li>
                  <li>Prepared for production deployment with clean URLs and SEO best practices.</li>
                </ul>

                <p className="text-md font-semibold text-indigo-400 mt-4 mb-2">Key Pages Developed:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li><strong>Home:</strong> Eye-catching landing page with smooth animations and featured job highlights.</li>
                  <li><strong>About Us / Services:</strong> Professional company overview and staffing solution details.</li>
                  <li><strong>Employers:</strong> Dedicated section for employer partnerships and services.</li>
                  <li><strong>Job Seekers:</strong> Interface for browsing job listings and submitting applications.</li>
                  <li><strong>Contact Us:</strong> Interactive form with proper input validation and backend submission.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Project