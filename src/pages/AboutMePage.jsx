import React from "react";
// Structural icons (FaTools, GiAchievement) are kept
import { IoIosLink } from 'react-icons/io'; 
import { AiOutlineFilePdf } from 'react-icons/ai';
import { GoMortarBoard } from 'react-icons/go'; 
import { GiAchievement } from 'react-icons/gi'; 
import { FaTools } from 'react-icons/fa'; 

// Import the placeholder image for the headshot
import headshotImage from "../assets/headshot.jpeg"; 

const AboutMePage = () => {

  // Organized Tech Stack Data (Icons removed)
  const techSkills = [
    { name: "Python", category: "Programming" },
    { name: "SQL", category: "Data Management" },
    { name: "Git", category: "DevOps/Tools" },
    { name: "Docker", category: "DevOps/Tools" },
    { name: "VS Code", category: "DevOps/Tools" },
    { name: "Data Visualization & Storytelling", category: "Analysis" },
    { name: "Power BI", category: "Analysis" },
    { name: "Excel", category: "Analysis" },
    { name: "Process Modeling", category: "Analysis" },
    { name: "PowerPoint", category: "Presentation" },
  ];

  // Certifications Data
  const certifications = [
    { 
      name: "Mastering GRC with Oreno: Governance, Risk & Compliance", 
      link: "https://www.udemy.com/certificate/UC-1a96ddf5-fde7-47db-881f-1638c65c7385/",
      icon: IoIosLink 
    },
    { 
      name: "Internet Governance (AI STEM)", 
      link: "https://certificates.isoc.org/db140087-bafe-4260-a8b3-28db67450f18#acc.gLnEzWFt",
      icon: IoIosLink 
    },
    { 
      name: "College Algebra with Python", 
      link: "https://www.freecodecamp.org/certification/fcc2b8c0c39-aff8-47e9-bd05-6e708d48e337/college-algebra-with-python-v8",
      icon: IoIosLink 
    },
    { 
      name: "Data Analysis with Python", 
      link: "https://www.freecodecamp.org/certification/fcc2b8c0c39-aff8-47e9-bd05-6e708d48e337/data-analysis-with-python-v7",
      icon: IoIosLink 
    },
    { 
      name: "Data Visualization (freeCodeCamp)", 
      link: "https://www.freecodecamp.org/certification/fcc2b8c0c39-aff8-47e9-bd05-6e708d48e337/data-visualization",
      icon: IoIosLink 
    },
    { 
      name: "Internet Governance (ISOC)", 
      link: "https://certificates.isoc.org/db140087-bafe-4260-a8b3-28db67450f18#acc.zSb1RQZB",
      icon: IoIosLink 
    },
    { 
      name: "Machine Learning with Python", 
      link: "https://www.freecodecamp.org/certification/fcc2b8c0c39-aff8-47e9-bd05-6e708d48e337/machine-learning-with-python-v7",
      icon: IoIosLink 
    },
    { 
      name: "Data Analytics and Visualization in Python", 
      link: "/src/assets/analysis.pdf", // PDF in assets folder
      icon: AiOutlineFilePdf 
    },
    { 
      name: "GLC HP Strathmore Hackathon", 
      link: "/src/assets/hackathon.pdf", // PDF in assets folder
      icon: AiOutlineFilePdf
    },
  ];

  // Function to determine if a link is an external URL or a local PDF path
  const isExternalLink = (link) => link.startsWith('http');

  // Group skills by category for better display organization
  const groupedSkills = techSkills.reduce((acc, skill) => {
    (acc[skill.category] = acc[skill.category] || []).push(skill.name);
    return acc;
  }, {});


  return (
    <div className="min-h-screen bg-cream text-gray-900 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        
        {/* Page Header */}
        <h1 className="text-5xl font-extrabold text-russet text-center mb-12">
          About Me
        </h1>

        {/* Professional Summary and Quote */}
        <section className="bg-white rounded-xl shadow-2xl p-8 mb-12 flex flex-col md:flex-row items-center">
            
            {/* Headshot (Placeholder) */}
            <div className="w-full md:w-1/4 flex justify-center mb-6 md:mb-0 md:pr-8">
                <img
                    src={headshotImage} 
                    alt="Constance Syombua Headshot"
                    className="rounded-full w-48 h-48 object-cover border-4 border-russet/50"
                />
            </div>
            
            {/* Summary Text */}
            <div className="w-full md:w-3/4">
                <h2 className="text-3xl font-bold text-russet mb-4">Professional Summary</h2>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  I am a highly analytical professional with 3+ years of experience in IT, Analytics, technical systems, and data-driven processes. I hold a bachelor’s degree in Informatics and Computer Science, with direct experience in process modeling and data analysis. I focus on delivering meaningful impact, honoring timeless methods while continuously embracing progress. I maintain a strong work ethic while actively making space to recharge for continuous improvement.
                </p>
                <blockquote className="border-l-4 border-russet pl-4 italic text-lg text-gray-600">
                    "Growth is the only evidence of life." 
                    <footer className="text-sm font-semibold mt-1">— John Henry Newman</footer>
                </blockquote>
            </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Column 1: Skills & Tools (Updated to simple listing) */}
          <div className="lg:col-span-2 space-y-10">
            <section className="p-6 bg-white rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-russet mb-6 flex items-center">
                    <FaTools className="mr-3"/> Technical Toolkit
                </h2>
                
                {/* Simplified Skills Listing */}
                <div className="grid md:grid-cols-2 gap-y-4 gap-x-6">
                    {Object.entries(groupedSkills).map(([category, skills], index) => (
                        <div key={index} className="pb-3 border-b border-gray-100">
                            <h3 className="font-bold text-russet/80 mb-2 text-md">{category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="text-sm px-3 py-1 bg-cream-dark text-gray-800 rounded-full shadow-sm border border-gray-300">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
            {/* Awards and Recognition (View Article is now a button) */}
            <section className="p-6 bg-white rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-russet mb-4 flex items-center">
                    <GiAchievement className="mr-3"/> Awards & Recognition
                </h2>
                <ul className="space-y-4">
                    <li className="flex items-start">
                        <span className="text-russet text-2xl mr-3">★</span>
                        <div>
                            <p className="font-semibold text-lg">Service to Society Award</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="text-russet text-2xl mr-3">📰</span>
                        <div>
                            <p className="font-semibold text-lg mb-2">Spotlight in Strathmore Article: Threads of Service</p>
                            <a 
                                href="https://strathmore.edu/news-articles/threads-of-service-constance-syombuas-sunique-journey/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                // BUTTON STYLE APPLIED HERE
                                className="inline-block bg-russet text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-russet/80 transition duration-300 transform hover:scale-105 text-sm flex items-center w-fit"
                            >
                                View Article <IoIosLink className="ml-2" />
                            </a>
                        </div>
                    </li>
                </ul>
            </section>
          </div>

          {/* Column 2: Resume and Certifications */}
          <div className="lg:col-span-1 space-y-10">
            
            {/* Resume Section - target="_blank" removed */}
            <section className="p-6 bg-russet rounded-xl shadow-lg text-white text-center">
                <h2 className="text-2xl font-bold mb-4 flex justify-center items-center">
                    <AiOutlineFilePdf className="mr-2 text-3xl"/>Resume
                </h2>
                <p className="mb-4 text-russet-100">
                    A detailed history of my experience and professional accomplishments.
                </p>
                <a 
                  href="/src/assets/resume.pdf" 
                  // target="_blank" REMOVED: opens in same tab to discourage download
                  rel="noopener noreferrer" 
                  className="inline-block bg-white text-russet font-bold py-2 px-6 rounded-full shadow-md hover:bg-cream transition duration-300"
                >
                  View my Resume
                </a>
            </section>
            
            {/* Certifications Section */}
            <section className="p-6 bg-white rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-russet mb-6 flex items-center">
                    <GoMortarBoard className="mr-3"/> Certifications
                </h2>
                <div className="space-y-4 max-h-96 overflow-y-auto pr-2"> 
                    {certifications.map((cert, index) => (
                        <div key={index} className="border-b pb-3">
                            <p className="font-semibold text-sm mb-1">{cert.name}</p>
                            <a 
                                href={cert.link} 
                                // Conditional target: _blank for external links, undefined for local PDFs
                                target={isExternalLink(cert.link) ? "_blank" : undefined}
                                rel="noopener noreferrer" 
                                className={`text-xs font-medium py-1 px-3 rounded-full transition duration-300 flex items-center w-fit
                                    ${isExternalLink(cert.link) 
                                        ? 'bg-blue-100 text-blue-600 hover:bg-blue-200' 
                                        : 'bg-green-100 text-green-600 hover:bg-green-200'}`}
                            >
                                <cert.icon className="mr-1" /> View Credential
                            </a>
                        </div>
                    ))}
                </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;