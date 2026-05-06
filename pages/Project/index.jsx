"use client";
import React, { useState } from "react";
import Navigations from "../Components/Navigations";
import Footer from "../Components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Code, Rocket, BarChart3, ArrowUpRight } from "lucide-react";
import Lottie from "lottie-react";
import ProjectAnimation from "../assets/Project.json";

const projects = [
  {
    title: "Finance House Dashboard",
    role: "Software Developer",
    tech: ["React", ".NET", "SQL", "APIs"],
    icon: <BarChart3 className="w-5 h-5" />,
    size: "md:col-span-2",
    summary: "Centralized executive dashboard for business KPIs",
    details:
      "Built executive-level dashboard covering Sales, Leads, Renewals, Projects, AMC, and Projections. Designed SQL views and stored procedures to structure CRM/ERP data. Integrated APIs into React for real-time KPI visualization and optimized performance.",
    metrics: ["Executive usage", "Real-time KPIs", "30% faster UI"],
  },
  {
    title: "Penta Space Analytics",
    role: "Software Developer",
    tech: ["React", "Redux", "SQL", "Linked Server"],
    icon: <Code className="w-5 h-5" />,
    size: "md:row-span-2",
    summary: "Enterprise analytics across CRM, ERP, HCM systems",
    details:
      "Developed a React + Redux Toolkit analytics platform integrating multiple enterprise systems using Linked Server architecture and master data mapping. Built dashboards for 20+ teams and 50+ projects with dynamic filtering.",
    metrics: ["20+ teams", "50+ projects", "40% less manual work"],
  },
  {
    title: "FSNPL Board Dashboard",
    role: "Software Developer",
    tech: ["React", "Redux", "SQL", "APIs"],
    icon: <Briefcase className="w-5 h-5" />,
    size: "",
    summary: "Board-level KPI tracking system",
    details:
      "Built a high-performance board dashboard for Sales, Leads, Renewals, ETS, AMC, and Projections. Implemented lazy loading, code splitting, and virtualization for large datasets.",
    metrics: ["30% performance gain", "Scalable UI"],
  },
  {
    title: "CRM API System",
    role: "Software Developer",
    tech: [".NET", "APIs", "MS SQL"],
    icon: <Code className="w-5 h-5" />,
    size: "",
    summary: "Secure enterprise API layer",
    details:
      "Built .NET-based API layer with token authentication for CRM systems. Designed modular endpoints and ensured production stability with logging and error handling.",
    metrics: ["Secure APIs", "Production ready"],
  },
  {
    title: "Dynamic Pricing Engine",
    role: "Software Developer",
    tech: [".NET", "JavaScript", "SQL"],
    icon: <Rocket className="w-5 h-5" />,
    size: "",
    summary: "Real-time pricing automation system",
    details:
      "Built a pricing engine that calculates real-time selling price and profit based on CRM inputs, reducing manual effort and improving pricing accuracy.",
    metrics: ["Real-time logic", "Better accuracy"],
  },
];

export default function Project() {
  const [active, setActive] = useState(null);

  return (
    <>
      <Navigations />

      <div className="bg-[#050505] text-white min-h-screen lg:p-[8%] px-5 py-14 md:p-[5%] text-base">

        <div className="max-w-7xl mx-auto">

          {/* WORK SECTION (same font system as Experience) */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">

            <div>
              <h6 className="text-3xl font-bold mb-5 text-white">Work</h6>

              <p className="mb-5 text-gray-400">
                I’ve worked on multiple enterprise-grade dashboards and backend systems across CRM and ERP platforms.
                My focus has been building scalable UI architectures, optimizing performance for large datasets,
                and improving data flow between frontend and backend systems.
              </p>

              <p className="text-gray-400">
                Across these projects, I’ve contributed to system optimization, query performance improvements,
                API integration, and UI responsiveness — ensuring smooth experience even with high-volume business data.
              </p>
            </div>

            <div className="flex justify-center">
              <Lottie
                animationData={ProjectAnimation}
                loop={true}
                className="w-[320px] md:w-[380px]"
              />
            </div>

          </div>

          {/* SECTION TITLE (same as Experience) */}
          <h6 className="text-3xl font-bold mb-5 text-white">
            Selected Work
          </h6>

          {/* PROJECT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[260px]">

            {projects.map((p, i) => (
              <motion.div
                key={i}
                onClick={() => setActive(p)}
                className={`group cursor-pointer relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 flex flex-col justify-between overflow-hidden ${p.size}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-transparent blur-2xl" />

                <div className="relative z-10 space-y-3">

                  <div className="flex justify-between">
                    <div className="p-2 bg-white/10 rounded-lg">
                      {p.icon}
                    </div>
                    <ArrowUpRight className="opacity-0 group-hover:opacity-100" />
                  </div>

                  <h3 className="text-xl font-semibold">
                    {p.title}
                  </h3>

                  <p className="text-base text-gray-400">
                    {p.summary}
                  </p>

                  <p className="text-sm text-gray-500 line-clamp-3">
                    {p.details}
                  </p>

                </div>

                <div className="flex gap-2 text-sm text-gray-400 flex-wrap mt-4">
                  {p.metrics.map((m, i) => (
                    <span key={i}>• {m}</span>
                  ))}
                </div>

              </motion.div>
            ))}

          </div>
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {active && (
            <motion.div
              className="fixed inset-0 bg-black/70 flex items-center justify-center p-6 z-50"
              onClick={() => setActive(null)}
            >
              <motion.div
                className="bg-zinc-900 p-8 rounded-2xl max-w-xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {active.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  {active.details}
                </p>

                <div className="flex gap-2 flex-wrap">
                  {active.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-white/10 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      <Footer />
    </>
  );
}