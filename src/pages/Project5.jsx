import React from "react";
// 🚀 CORRECTION: Renamed the variable to projectImage to match the usage below.
const projectImage = "/project5.png"; 

const Project5 = () => {
  return (
    <div className="min-h-screen bg-cream text-gray-900 px-6 py-12">
      <div className="max-w-4xl mx-auto">

        {/* Project Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-russet mb-4">
            Interactive Risk Map Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            A Dynamic Tool for Humanitarian Risk Monitoring and Resource Allocation
          </p>
        </div>

        {/* Project Image */}
        <section className="mb-12 flex justify-center">
            <img
                src={projectImage} // ✅ Now correctly referencing the defined variable
                alt="Humanitarian Risk Monitoring Dashboard Preview"
                className="w-full h-auto rounded-lg shadow-xl border-4 border-russet/50"
                style={{ maxWidth: '800px' }} 
            />
        </section>

        {/* Project Overview (Corrected Text) */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-russet mb-4 border-b pb-2">
            Project Description
          </h2>
          <p className="mb-4">
            This project created a dynamic, single-page Interactive Risk Map Dashboard built with React. Its main goal is to give humanitarian decision-makers a real-time, consolidated view of regional Risk Levels and the Critical Resource Capacity (e.g., water points, medical centers) available in affected areas. This tool allows users to instantly select a region and see an updated, color-coded operational summary. This accelerates high-stakes resource allocation decisions, moving beyond static reporting.
          </p>
        </section>

        {/* Core Technology Used */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-russet mb-4 border-b pb-2">
            Core Technology Used
          </h2>
          <p className="mb-4">
            The entire application is built as a single-file, highly modular React component. This design ensures rapid deployment and efficient state management for all dynamic user interactions.
          </p>
        </section>

        {/* Tools and Tech Stack */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-russet mb-4 border-b pb-2">
            Tools and Tech Stack
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-russet/10">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-russet uppercase tracking-wider">
                    Tool
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-russet uppercase tracking-wider">
                    Purpose
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-semibold">React (Functional Components/Hooks)</td>
                  <td className="px-6 py-4">Handles the application's structure, state management (`useState`), and dynamic UI updates (e.g., switching regions).</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-semibold">Tailwind CSS</td>
                  <td className="px-6 py-4">Used for all styling, ensuring the dashboard is fully responsive and aesthetically aligned with a modern, clear operational interface.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-semibold">Lucide Icons (or inline SVG)</td>
                  <td className="px-6 py-4">Provides professional, clear iconography to visually categorize data metrics (e.g., Zap for risk, Water for resources).</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-semibold">Mock Data (RISK_DATA)</td>
                  <td className="px-6 py-4">Simulated a real-world database or API endpoint, containing categorized risk and resource metrics for multiple regions.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Methodology */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-russet mb-4 border-b pb-2">
            Project Methodology
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            1. Component Architecture
          </h3>
          <p className="mb-2">
            The dashboard was broken down into reusable components:
          </p>
          <ul className="list-disc list-inside ml-4 mb-4 text-gray-700">
            <li>The App component manages the primary state (`selectedRegionId`) and the main layout grid.</li>
            <li>The RiskSummaryCard displays the color-coded risk level and the incident summary.</li>
            <li>The ResourceCard is a modular component used to display resource counts, accepting the icon, title, value, and color class as props.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            2. State and Data Management
          </h3>
          <p className="mb-2">
            A central Mock Data object (`RISK_DATA`) simulated data fetching from a backend.
          </p>
          <ul className="list-disc list-inside ml-4 mb-4 text-gray-700">
            <li>When a user clicks a region button, the `selectedRegionId` state is updated.</li>
            <li>This update immediately triggers React to re-render the dashboard panels.</li>
            <li>The panels then display the corresponding risk and resource data, achieving instantaneous visualization changes.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            3. Responsive Design & Visuals
          </h3>
          <p className="mb-4">
            Tailwind's responsive prefixes were used to ensure accessibility across devices.
          </p>
          <ul className="list-disc list-inside ml-4 mb-4 text-gray-700">
            <li>The layout uses a fluid, four-column structure on desktop that collapses gracefully to a single column on mobile.</li>
            <li>Color-coding based on risk level (Red for High, Green for Low) is used for immediate operational interpretation.</li>
            <li>Hover effects and smooth transitions were implemented to improve overall user experience.</li>
          </ul>
        </section>
        
        {/* Live Demo Section */}
        <section className="p-6 bg-russet text-white rounded-lg shadow-xl text-center">
          <h2 className="text-2xl font-bold mb-4">
            Explore the Project Demo
          </h2>
          <p className="mb-6">
            View the live, deployed dashboard below.
          </p>
          <div className="flex flex-wrap justify-center gap-4"> 
            <a
              href="https://riskdashboard-one.vercel.app/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-russet font-bold py-3 px-6 rounded-full shadow-lg hover:bg-cream transition duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              View Live Dashboard Demo →
            </a>
          </div>
        </section>

      </div>
          </div>
  );
};

export default Project5;