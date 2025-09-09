// import React from 'react'
// import Navigations from '../Components/Navigations';
// import Footer from '../Components/Footer'

// const Project = () => {
//   return (
//     <>
//       <Navigations />
//       <div className='text-gray-400 lg:p-[8%] px-5 py-14  md:p-[5%] text-base bg-zinc-900  w-screen'>

//         <div className="flex flex-col space-y-20">
//           <div className="flex-1 w-full bg-white/5 backdrop-blur-lg text-white space-y-10 p-6 rounded-2xl shadow-lg">
//             <h2 className="text-3xl font-bold text-white">Projects at Centrahub</h2>
//             <div>
//               <h3 className="text-xl font-semibold text-indigo-600 mb-2">Project 1: Value Gold</h3>
//               <p className="text-sm mb-1 text-gray-400"><strong>Client:</strong> Value Gold</p>
//               <p className="text-sm mb-1 text-gray-400"><strong>Role:</strong> Junior Software Developer</p>
//               <p className="text-sm mb-4 text-gray-400"><strong>Technologies:</strong> JavaScript, .NET</p>
//               <ul className="list-disc list-inside space-y-1 text-gray-400">
//                 <li><strong>Imported Excel Data:</strong> Read and extracted Excel data using JavaScript, especially gold purity values.</li>
//                 <li><strong>Set Records in Module:</strong> Populated CRM modules with imported data using JavaScript with accurate field mapping.</li>
//                 <li><strong>SQL Report Development:</strong> Created optimized, parameterized SQL reports based on business logic.</li>
//                 <li><strong>Cross-Module Data:</strong> Used JS to fetch and manage data between CRM modules.</li>
//                 <li><strong>Dynamic Grid:</strong> Populated UI body grid dynamically on button click to enhance UX.</li>
//               </ul>
//             </div>

//             <hr className="border-gray-300" />


//             <div >
//               <h3 className="text-xl font-semibold text-indigo-600 mb-2">Project 2: CRM Integration - Finance House</h3>
//               <p className="text-sm mb-1 text-gray-400"><strong>Client:</strong> Finance House</p>
//               <p className="text-sm mb-1 text-gray-400"><strong>Role:</strong> Software Developer</p>
//               <p className="text-sm mb-4 text-gray-400"><strong>Technologies:</strong> MS SQL, JavaScript, HTML, CSS, .NET</p>
//               <ul className="list-disc list-inside space-y-1 text-gray-400">
//                 <li>Built secure .NET-based web service with access-token authentication for external data integration into CRM.</li>
//                 <li>Designed API with <code>cfid</code> and <code>eidno</code> for customer-specific data mapping.</li>
//                 <li>Enabled export of CRM data to Excel and PDF using EPPlus.</li>
//                 <li>Handled IIS deployment with HTTPS and app pool management.</li>
//                 <li>Created full API documentation with request/response, token flow, and error cases.</li>
//                 <li>Implemented encryption and access-token security mechanisms.</li>
//                 <li>Gathered requirements and collaborated with stakeholders for a smooth CRM user experience.</li>
//               </ul>
//             </div>

//             <hr className="border-gray-300" />


//             <div>
//               <h3 className="text-xl font-semibold text-indigo-600 mb-2">Project 3: Dynamic Pricing - Creations Overseas</h3>
//               <p className="text-sm mb-1 text-gray-400"><strong>Client:</strong> Creations Overseas</p>
//               <p className="text-sm mb-1 text-gray-400"><strong>Role:</strong> Software Developer</p>
//               <p className="text-sm mb-4 text-gray-400"><strong>Technologies:</strong> MS SQL, JavaScript, .NET</p>
//               <ul className="list-disc list-inside space-y-1 text-gray-300">
//                 <li>Created external popup triggered on Quantity field change in CRM Opportunity form.</li>
//                 <li>Fetched pricing data dynamically via a .NET web service using the selected product.</li>
//                 <li>Retrieved and displayed unit cost, base price, and margin thresholds.</li>
//                 <li>Performed live calculations for selling price, profit per unit, and total profit.</li>
//                 <li>Suggested the best quoted rate in real-time, aiding better pricing decisions.</li>
//                 <li>Updated CRM record upon user confirmation, enhancing efficiency.</li>
//                 <li>Reduced manual effort and improved sales productivity through automation.</li>
//               </ul>
//             </div>
//           </div>


//           <div className="relative w-full">
      
//             <img
//               src="Img.jpeg"
//               alt="Project background"
//               className="absolute inset-0 w-full h-full object-cover opacity-1 blur-sm z-0 rounded-2xl"
//             />

//             <div className="relative z-10 flex-1 w-full bg-white/5 backdrop-blur-lg text-white space-y-10 p-6 rounded-2xl shadow-lg">
//               <h2 className="text-3xl font-bold text-white">Personal Project</h2>

//               <div>
//                 <div className="flex items-center justify-between mb-2">
//                   <h3 className="text-xl font-semibold text-indigo-600">Al Sayeed Staffing Solution</h3>
//                   <a
//                     href="https://al-sayed-staffing-solution.vercel.app/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-1.5 rounded-lg shadow-md transition duration-300"
//                   >
//                     Visit Site
//                   </a>
//                 </div>

//                 <p className="text-sm mb-1 text-gray-300"><strong>Client:</strong> Al Sayeed Solutions</p>
//                 <p className="text-sm mb-1 text-gray-300"><strong>Role:</strong> Full Stack Developer</p>
//                 <p className="text-sm mb-4 text-gray-300"><strong>Technologies:</strong> JavaScript, React.js, Next.js, Tailwind CSS, Framer Motion, MongoDB</p>

//                 <p className="text-sm text-gray-300 mb-4">
//                   Developed a production-ready, full-stack web application for Al-Sayeed Staffing Solution...
//                 </p>

//                 <p className="text-md font-semibold text-indigo-400 mb-2">Responsibilities:</p>
//                 <ul className="list-disc list-inside space-y-1 text-gray-300">
//                   <li>Built responsive, animated frontend UI using Tailwind CSS and Framer Motion.</li>
//                   <li>Implemented form validation and interactive components using React.js.</li>
//                   <li>Integrated MongoDB for dynamic job listings and admin panel data.</li>
//                   <li>Set up role-based access for job seekers and administrators.</li>
//                   <li>Prepared for production deployment with clean URLs and SEO best practices.</li>
//                 </ul>

//                 <p className="text-md font-semibold text-indigo-400 mt-4 mb-2">Key Pages Developed:</p>
//                 <ul className="list-disc list-inside space-y-1 text-gray-300">
//                   <li><strong>Home:</strong> Eye-catching landing page with smooth animations and featured job highlights.</li>
//                   <li><strong>About Us / Services:</strong> Professional company overview and staffing solution details.</li>
//                   <li><strong>Employers:</strong> Dedicated section for employer partnerships and services.</li>
//                   <li><strong>Job Seekers:</strong> Interface for browsing job listings and submitting applications.</li>
//                   <li><strong>Contact Us:</strong> Interactive form with proper input validation and backend submission.</li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//       <Footer />
//     </>
//   )
// }

// export default Project

"use client";
import React from "react";
import Navigations from "../Components/Navigations";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import { Briefcase, Code, Rocket } from "lucide-react";

const projects = [
  {
    title: "Value Gold",
    client: "Value Gold",
    role: "Junior Software Developer",
    technologies: "JavaScript, .NET",
    icon: <Briefcase className="text-indigo-400 w-6 h-6" />,
    points: [
      "Imported Excel data (gold purity values).",
      "Populated CRM modules with accurate field mapping.",
      "Developed parameterized SQL reports.",
      "Fetched and managed cross-module CRM data.",
      "Built dynamic grid UI for smooth UX.",
    ],
  },
  {
    title: "CRM Integration - Finance House",
    client: "Finance House",
    role: "Software Developer",
    technologies: "MS SQL, JavaScript, HTML, CSS, .NET",
    icon: <Code className="text-indigo-400 w-6 h-6" />,
    points: [
      "Built .NET web service with token-based authentication.",
      "Designed APIs for customer-specific data mapping.",
      "Enabled CRM export to Excel and PDF using EPPlus.",
      "Deployed on IIS with HTTPS & app pool management.",
      "Documented full API flow with error handling.",
    ],
  },
  {
    title: "Dynamic Pricing - Creations Overseas",
    client: "Creations Overseas",
    role: "Software Developer",
    technologies: "MS SQL, JavaScript, .NET",
    icon: <Rocket className="text-indigo-400 w-6 h-6" />,
    points: [
      "Popup triggered on CRM Opportunity quantity change.",
      "Fetched dynamic pricing data via .NET web service.",
      "Performed live calculations for selling price & profit.",
      "Suggested optimal quoted rate in real-time.",
      "Improved productivity with pricing automation.",
    ],
  },
];

const personalProject = {
  title: "Al Sayeed Staffing Solution",
  url: "https://al-sayed-staffing-solution.vercel.app/",
  role: "Full Stack Developer",
  technologies: "React.js, Next.js, Tailwind, Framer Motion, MongoDB",
  points: [
    "Responsive UI with Tailwind & Framer Motion animations.",
    "Implemented form validation & interactive job seeker flows.",
    "MongoDB for job listings and admin panel data.",
    "Role-based access for employers and job seekers.",
    "SEO-optimized deployment with clean routing.",
  ],
};

const Project = () => {
  return (
    <>
      <Navigations />
      <div className="bg-gradient-to-b from-zinc-900 to-black text-gray-200 min-h-screen px-6 py-16">
        <div className="max-w-5xl mx-auto space-y-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-indigo-400">
            Projects that i have worked on
          </h2>

          {/* Timeline */}
          <div className="relative border-l border-gray-600 space-y-12 pl-6">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Icon */}
                <span className="absolute -left-9 flex items-center justify-center w-10 h-10 bg-zinc-800 border border-indigo-500 rounded-full shadow-lg">
                  {project.icon}
                </span>

                {/* Card */}
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-indigo-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    <strong>Client:</strong> {project.client}
                  </p>
                  <p className="text-sm text-gray-400">
                    <strong>Role:</strong> {project.role}
                  </p>
                  <p className="text-sm text-gray-400">
                    <strong>Tech:</strong> {project.technologies}
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {project.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Personal Project */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-indigo-700/20 to-indigo-500/10 backdrop-blur-lg rounded-2xl shadow-lg p-8"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-indigo-400">
                Personal Project: {personalProject.title}
              </h2>
              <a
                href={personalProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow transition"
              >
                Visit Site
              </a>
            </div>
            <p className="text-sm text-gray-400 mb-2">
              <strong>Role:</strong> {personalProject.role}
            </p>
            <p className="text-sm text-gray-400 mb-4">
              <strong>Tech:</strong> {personalProject.technologies}
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {personalProject.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Project;
