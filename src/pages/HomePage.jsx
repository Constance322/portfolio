import React from 'react';
import { Link } from 'react-router-dom';
import Headshot from '../assets/headshot.jpeg';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-cream text-gray-900">
      
      {/* Hero Section */}
      <main className="pt-24 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        
        {/* Text */}
        <div className="md:w-3/5 text-center md:text-left animate-fade-in-down">
          <h1 className="text-5xl md:text-7xl font-extrabold text-russet mb-4 tracking-tight">
            Insight Catalyst
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
            Focusing on Data Systems
          </h2>

          <p className="text-lg mb-8 max-w-lg mx-auto md:mx-0 transition duration-500 ease-in-out transform hover:scale-[1.02]">
            Data Analyst using Computer Science and research to build modern, high-value solutions. I specialize in Excel, SQL, Python, and PowerBI to transform data into visualizations and drive impact.
          </p>

          <Link 
            to="/projects" 
            className="inline-block px-8 py-3 text-lg font-semibold text-gray-100 bg-russet rounded-full shadow-lg hover:bg-[#a03f36] transform hover:scale-105 transition duration-300"
          >
            View My Work
          </Link>
        </div>

        {/* Headshot */}
        <div className="md:w-2/5 mt-10 md:mt-0 flex justify-center animate-zoom-in">
          <div className="w-64 h-64 rounded-full shadow-2xl overflow-hidden border-4 border-russet flex items-center justify-center">
            <img src={Headshot} alt="Constance Headshot" className="w-full h-full object-cover" />
          </div>
        </div>

      </main>

      {/* Footer Links Card */}
      <div className="max-w-4xl mx-auto mt-12 bg-russet text-gray-100 p-6 rounded-xl shadow-lg flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6 font-semibold text-center">
        <a href="mailto:syombuaconstance@gmail.com" className="hover:text-gray-200 transition duration-200">
          syombuaconstance@gmail.com
        </a>
        <a href="https://github.com/Constance322" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition duration-200">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/constance-s-713b93221/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition duration-200">
          LinkedIn
        </a>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-down { animation: fadeInDown 1s ease-out forwards; }
        .animate-zoom-in { animation: zoomIn 1s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default HomePage;
