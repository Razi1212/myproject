import React, { useState } from "react";
import Navigation from '../Components/Navigations';
import Lottie from "lottie-react";
import dancingRobot from "../assets/dancing-robot.json";
import Footer from '../Components/Footer'


const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        tel: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <Navigation />
            <div className="bg-zinc-900 min-h-screen w-full lg:px-[8%] lg:py-10 p-5 flex flex-col lg:flex-row items-center gap-10">
                <div className="flex-1 w-full bg-white/5 backdrop-blur-lg rounded-2xl p-11 shadow-2xl text-white">
                    <h2 className="text-3xl font-bold mb-6">
                        Let’s turn your ‘what if’ into ‘what’s next’ — reach out!
                    </h2>

                    <form className="space-y-4">
                        <input
                            className="w-full p-3 border border-gray-600 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="First Name"
                        />
                        <input
                            className="w-full p-3 border border-gray-600 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                            type="tel"
                            name="tel"
                            value={formData.tel}
                            onChange={handleChange}
                            required
                            placeholder="Your Phone"
                        />
                        <input
                            className="w-full p-3 border border-gray-600 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Your Email"
                        />
                        <textarea
                            className="w-full p-3 border border-gray-600 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="How we can help?"
                            style={{ height: "70px" }}
                        ></textarea>

                        <button
                            type="submit"
                            className="bg-green-600 hover:bg-green-700 transition-colors duration-300 p-3 rounded-lg text-white w-full font-semibold"
                        >
                            Submit
                        </button>
                    </form>
                    {status && (
                        <p className="mt-3 text-center text-green-400">{status}</p>
                    )}
                </div>
                <div className="flex-1 w-full flex justify-center">
                    <Lottie
                        animationData={dancingRobot}
                        loop={true}
                        className="w-full max-w-sm"
                    />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
