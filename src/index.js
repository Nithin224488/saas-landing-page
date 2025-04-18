import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import "./index.css";
import { FaRocket, FaBolt, FaMobileAlt, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="font-sans">
      <section
        data-aos="fade-up"
        className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center px-6 py-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          Launch your SaaS with Confidence 🚀
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl text-center mb-6">
          High-converting, fast, and beautiful React landing pages built for
          startups.
        </p>
        <a
          href="#pricing"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded text-lg font-semibold"
        >
          Get Started
        </a>
      </section>

      <section className="bg-gray-100 py-20 px-6 text-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6">Why Choose Me?</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start space-x-3">
              <FaBolt className="text-yellow-500 mt-1" />
              <div>
                <h4 className="font-semibold">Fast Load Times</h4>
                <p>
                  Optimized React pages that load in under 1s for better
                  conversions.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start space-x-3">
              🎯
              <div>
                <h4 className="font-semibold">Conversion Focused</h4>
                <p>
                  Designed to get users to take action with clear CTAs and
                  layout.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start space-x-3">
              📱
              <div>
                <h4 className="font-semibold">Fully Responsive</h4>
                <p>Looks great on all devices – desktop, tablet, and mobile.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Simple Pricing</h2>
        <div className="bg-white p-8 rounded shadow max-w-md mx-auto">
          <h3 className="text-2xl font-semibold mb-2">Launch Package</h3>
          <p className="mb-4">Perfect for startups and indie hackers</p>
          <p className="text-4xl font-bold mb-4">$299</p>
          <ul className="text-left mb-6 list-disc list-inside text-gray-700">
            <li>1 responsive landing page</li>
            <li>Deployed on Vercel</li>
            <li>Delivery in 3 days</li>
            <li>1 revision included</li>
          </ul>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded text-lg font-semibold"
          >
            Book Now
          </a>
        </div>
      </section>
      <section className="bg-indigo-600 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Launch Your SaaS?</h2>
        <p className="mb-6">
          Let me build your landing page – fast, beautiful, and tailored to
          convert.
        </p>
        <button className="bg-white text-indigo-600 px-6 py-3 font-semibold rounded-lg hover:bg-gray-100 transition">
          Contact Me
        </button>
      </section>

      <footer className="py-10 bg-gray-900 text-gray-300 text-center">
        <p>© 2025 Nithin Nandakumar – Built with ❤️ and React</p>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
