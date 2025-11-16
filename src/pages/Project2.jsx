import React from "react";
// 🚀 CORRECTION: Renamed the variable to projectImage to match the usage below.
const projectImage = "/Project2.png"; 

const Project2 = () => {
  return (
    <div className="min-h-screen bg-cream text-gray-900 px-6 py-12">
      <div className="max-w-4xl mx-auto">

        {/* Project Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-russet mb-4">
            Inventory Forecasting Tool
          </h1>
          <p className="text-lg text-gray-600">
            Data-Driven Tool for Disaster Preparedness and Procurement Planning
          </p>
        </div>

        {/* Project Image */}
        <section className="mb-12 flex justify-center">
            <img
                src={projectImage} // ✅ Now correctly referencing the defined variable
                alt="Inventory Forecasting Tool Spreadsheet Preview"
                className="w-full h-auto rounded-lg shadow-xl border-4 border-russet/50"
                style={{ maxWidth: '800px' }} // Ensures a perfect, centralized display
            />
        </section>

        {/* Project Overview */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-russet mb-4 border-b pb-2">
            Project Description
          </h2>
          <p className="mb-4">
            This project created a practical forecasting tool from raw historical data. The primary goal was calculating standardized Non-Food Item (NFI) distribution rates. These rates, derived from past drought responses, project future inventory needs for potential crises. The final product is an Excel/Sheets-compatible markdown template. Field offices can easily input population estimates and instantly generate procurement priorities. This demonstrates converting complex data analysis into a simple, highly actionable business tool.
          </p>
        </section>

        {/* Dataset Used */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-russet mb-4 border-b pb-2">
            Data Source
          </h2>
          <p className="mb-2">
            The project used a simulated historical response dataset (`historical_response_data.csv`). This data contained records of past disaster events. Key variables included:
          </p>
          <ul className="list-disc list-inside ml-4 mb-4 text-gray-700">
            <li>Disaster Type (e.g., Drought, Flood)</li>
            <li>Affected Population (The proxy for need)</li>
            <li>Items Distributed (e.g., Blankets, Jerrycans, Hygiene Kits)</li>
          </ul>
        </section>

        {/* Tools and Tech Stack */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-russet mb-4 border-b pb-2">
            Tools and Tech Stack
          </h2>
          <p className="mb-4">
            A small, effective stack was used to generate data, calculate rates, and create a deployable solution:
          </p>
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
                  <td className="px-6 py-4 whitespace-nowrap font-semibold">Python (`data_simulation.py`)</td>
                  <td className="px-6 py-4">Generated 150 records of realistic, synthetic disaster response data to serve as the historical base for analysis.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-semibold">Python (`response_analysis.py`)</td>
                  <td className="px-6 py-4">Calculated the Standard Response Rates (NFI per Affected Person) by filtering historical data to only include drought events and aggregating totals.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-semibold">Markdown / Excel Formulas</td>
                  <td className="px-6 py-4">Structured the analysis into a deployable template (`Inventory_Forecasting_Tool.md`) using standard spreadsheet formulas (=ROUND, =IF) to instantly calculate demand and stock shortfall.</td>
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
            1. Data Preparation and Filtering
          </h3>
          <p className="mb-2">
            The project began with a Python script creating a synthetic dataset. This script simulated 15 years of disaster responses. A second Python script then performed the core analytical task:
          </p>
          <ul className="list-disc list-inside ml-4 mb-4 text-gray-700">
            <li>It isolated only Drought events, which was the focus of the forecast scenario.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            2. Calculating Standard Rates
          </h3>
          <p className="mb-2">
            The Standard Response Rates were calculated to create the model's core constant:
          </p>
          <ul className="list-disc list-inside ml-4 mb-4 text-gray-700">
            <li>The total number of each NFI distributed during all historical drought events was totaled.</li>
            <li>This total was divided by the overall affected population from those same events.</li>
            <li>This output was the Standard Response Rate (e.g., 0.4250 blankets per person), forming the foundation for demand projections.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            3. Tool Development and Deployment
          </h3>
          <p className="mb-4">
            The calculated rates were embedded into the final Inventory Forecasting Tool template. This template provides three forecast scenarios (Low, Mid, High estimate). Conditional logic assesses Current Stock against the Mid Estimate Demand. The logic automatically assigns a Procurement Priority (HIGH, MEDIUM, LOW) based on the calculated stock shortfall. This ensures the tool is immediately ready for decision-making by field offices.
          </p>
        </section>
        
        {/* Downloadable Files Section */}
        <section className="p-6 bg-russet text-white rounded-lg shadow-xl text-center">
          <h2 className="text-2xl font-bold mb-4">
            Explore the Project Files
          </h2>
          <p className="mb-6">
            Download the Python analysis, the raw data, and the final deployable tool.
          </p>
          <div className="flex flex-wrap justify-center gap-4"> 
            {/* Download Jupyter Notebook */}
            <a
              href="/Historical_Disaster_Response_Data.ipynb" 
              download
              className="bg-white text-russet font-bold py-3 px-6 rounded-full shadow-lg hover:bg-cream transition duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              Download Python Analysis (.ipynb)
            </a>
            {/* Download CSV Data */}
            <a
              href="/historical_response_data.csv"
              download
              className="bg-white text-russet font-bold py-3 px-6 rounded-full shadow-lg hover:bg-cream transition duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              Download Raw Dataset (.csv)
            </a>
            {/* Download Excel Tool */}
            <a
              href="/Inventory_Forecasting_Tool.xlsx"
              download
              className="bg-white text-russet font-bold py-3 px-6 rounded-full shadow-lg hover:bg-cream transition duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              Download Forecasting Tool (.xlsx)
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Project2;