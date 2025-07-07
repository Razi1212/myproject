import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Experience = () => {
    return (
        <div className='bg-zinc-900  w-screen '>
            <footer className="w-full bg-zinc-900 text-white py-12">
                <div className="container mx-auto px-4 flex flex-col items-center">
                    {/* CTA Text */}
                    <h3 className="text-xl font-bold mb-2">Want to get in touch?</h3>
                    <p className="text-gray-300 mb-4 text-center max-w-lg">
                        I'm always open to new projects, collaborations, or just a chat. Drop me an email or connect with me on LinkedIn or GitHub.
                    </p>

                    {/* Email CTA */}
                    <a
                        href="mailto:youremail@example.com"
                        className="inline-block text-sm text-blue-400 hover:underline mb-8"
                    >
                        Email Me
                    </a>

                    {/* Bottom Footer Bar */}
                    <div className="w-full flex flex-col md:flex-row items-center justify-between border-t border-zinc-700 pt-6">
                        {/* Left: Copyright */}
                        <p className="text-xs text-gray-400 mb-4 md:mb-0">
                            &copy; 2024 My Portfolio
                        </p>

                        {/* Right: Social & Links */}
                        <div className="flex space-x-6">
                            <a
                                href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-400 transition-colors"
                            >
                                <FaLinkedin size={22} />
                            </a>

                            <a
                                href="https://github.com/YOUR-GITHUB-USERNAME"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-400 transition-colors"
                            >
                                <FaGithub size={22} />
                            </a>

                            <a
                                href="#projects"
                                className="hover:text-green-400 transition-colors text-sm"
                            >
                                Projects
                            </a>

                            <a
                                href="mailto:youremail@example.com"
                                className="hover:text-red-400 transition-colors text-sm"
                            >
                                Email
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Experience