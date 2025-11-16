import React from "react";
// Import the image from assets using the correct relative path
import projectImage from "../assets/Project4.png"; 

const Project4 = () => {
  return (
    <div className="min-h-screen bg-cream text-gray-900 px-6 py-12">
      <div className="max-w-4xl mx-auto">

        {/* Project Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-russet mb-4">
            Maple Analytics Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            A Data-Driven Business Intelligence and Provenance Dashboard
          </p>
        </div>

        {/* Project Image */}
        <section className="mb-12 flex justify-center">
            <img
                src={projectImage}
                alt="Maple Analytics Dashboard Preview"
                className="w-full h-auto rounded-lg shadow-xl border-4 border-russet/50"
                style={{ maxWidth: '800px' }} 
            />
        </section>

        {/* Project Overview */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-russet mb-4 border-b pb-2">
            Project Description
          </h2>
          <p className="mb-4">
            This project created a single-page analytical dashboard for weekly business performance monitoring. The main goal was consolidating critical KPIs—including Revenue, Users, and Orders—into one easy-to-read view. The system includes data visualization for trend analysis and features a dedicated Data Provenance panel. This panel ensures full auditability and transparency by documenting the data source, last update time, transformation logic, and analyst verification status.
          </p>
        </section>

        {/* Core Technology Used */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-russet mb-4 border-b pb-2">
            Core Technology Used
          </h2>
          <p className="mb-4">
            This project showcases expertise in modern front-end development and data visualization. It focuses on structuring components and managing data state efficiently to deliver a high-quality user experience.
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
                  <td className="px-6 py-4 whitespace-nowrap font-semibold">React/Vite</td>
                  <td className="px-6 py-4">Used as the foundation for rapid front-end development and building a component-based UI structure.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-semibold">Tailwind CSS</td>
                  <td className="px-6 py-4">Used for all styling (utility-first approach) to quickly implement a clean, responsive, and professional dashboard layout.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-semibold">JavaScript</td>
                  <td className="px-6 py-4">Manages the synthetic data arrays for charts and controls the state and logic of the UI components.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-semibold">Data Provenance Panel</td>
                  <td className="px-6 py-4">A key custom component built to explicitly document data lineage, transformation version, and manual verification status.</td>
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
            1. Component Architecture and Setup
          </h3>
          <p className="mb-2">
            The project was initialized using Vite and configured with Tailwind CSS.
          </p>
          <ul className="list-disc list-inside ml-4 mb-4 text-gray-700">
            <li>The main `Dashboard.jsx` file acts as the primary layout manager.</li>
            <li>It integrates modular components like `Sidebar` and `Navbar` for structure.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            2. KPI Card Development
          </h3>
          <p className="mb-2">
            Individual StatCard components were developed to display key metrics.
          </p>
          <ul className="list-disc list-inside ml-4 mb-4 text-gray-700">
            <li>Each card accepts props for the title, value, and delta (%) to show performance changes.</li>
            <li>This provides an immediate, clear snapshot of the business's weekly health.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            3. Data Visualization
          </h3>
          <p className="mb-2">
            Two LineChartCard components were created to display trend data (Monthly Sales and User Growth).
          </p>
          <ul className="list-disc list-inside ml-4 mb-4 text-gray-700">
            <li>The components receive synthetic data arrays, defining labels (months) and corresponding values (sales/users).</li>
            <li>The charts visually communicate trends, helping stakeholders quickly identify any data anomalies.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            4. Data Governance Integration
          </h3>
          <p className="mb-4">
            A dedicated Data Provenance panel was integrated into the main layout to build user trust.
          </p>
          <ul className="list-disc list-inside ml-4 mb-4 text-gray-700">
            <li>This panel explicitly documents the data Source and the Last Updated timestamp.</li>
            <li>It lists the Transform version and includes a field for Analyst Note, demonstrating a commitment to auditable data practices.</li>
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
              href="https://constance-maple-analytics.surge.sh/" 
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

export default Project4;