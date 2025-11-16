import React from "react";
// 🚀 CORRECTION: Renamed the variable to projectImage to match the usage below.
const projectImage = "/project1.png"; 


const Project1 = () => {
  return (
    <div className="min-h-screen bg-cream text-gray-900 px-6 py-12">
      <div className="max-w-4xl mx-auto">

        {/* Project Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-russet mb-4">
            Aid Allocation Model
          </h1>
          <p className="text-lg text-gray-600">
            A Data Engineering and Business Intelligence Case Study
          </p>
        </div>

        {/* Project Image */}
        <section className="mb-12 flex justify-center">
            <img
                src={projectImage} // ✅ Now correctly referencing the defined variable
                alt="Dashboard Preview - Aid Allocation Model"
                className="w-full h-auto rounded-lg shadow-xl border-4 border-russet/50"
                style={{ maxWidth: '800px' }} // Ensures a perfect, centralized display
            />
        </section>

        {/* Project Overview */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-russet mb-4 border-b pb-2">
            Project Objective
          </h2>
          <p className="mb-4">
            This project built a complete system for data analysis. The primary goal was to check the effectiveness of aid spending by comparing the real amount of grant money used against a simulated level of need. The final output is a simple Power BI dashboard that displays the "Funding Gap," highlighting regions or sectors potentially requiring future investment. This process demonstrates a full end-to-end data journey.
          </p>
        </section>

        {/* Dataset Used */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-russet mb-4 border-b pb-2">
            Data Source
          </h2>
          <p className="mb-4">
            The data used for this study came from a public list of Committed Grants provided by the Gates Foundation. Key facts in the dataset included the total money given, the Region where the money was sent, and the Sector or purpose for the grant. The raw data required significant cleaning and preparation before analysis.
          </p>
        </section>

        {/* Tools and Tech Stack */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-russet mb-4 border-b pb-2">
            Tools and Tech Stack
          </h2>
          <p className="mb-4">
            This system was built using three main tools that manage the data flow from source to visualization:
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
                  <td className="px-6 py-4 whitespace-nowrap font-semibold">Python</td>
                  <td className="px-6 py-4">Used for cleaning the data, removing errors, and preparing it for storage.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-semibold">SQL</td>
                  <td className="px-6 py-4">Used for safe storage of the clean data and creating summary tables for reporting.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-semibold">Power BI</td>
                  <td className="px-6 py-4">Used for creating the final dashboard, performing analysis, and drawing charts.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-600 italic">
            This stack demonstrates an end-to-end workflow covering both data handling (engineering) and analysis (business intelligence).
          </p>
        </section>

        {/* Methodology */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-russet mb-4 border-b pb-2">
            Project Methodology
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            1. Data Cleaning and Storage
          </h3>
          <p className="mb-2">
            The process started with cleaning the raw data using Python. Key steps included:
          </p>
          <ul className="list-disc list-inside ml-4 mb-4 text-gray-700">
            <li>Removing symbols ($, ,) from grant amounts to make numbers usable.</li>
            <li>Grouping grants into simplified Sector categories.</li>
            <li>Exporting the clean data to a stable SQL database.</li>
            <li>Creating a SQL summary table showing Total Committed Funds and total Projects by Region and Sector.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            2. Modeling and Analysis
          </h3>
          <p className="mb-2">
            Inside Power BI, the analysis involved creating a simulated need index:
          </p>
          <ul className="list-disc list-inside ml-4 mb-4 text-gray-700">
            <li>A manual 'New Index' table was created to hold the Need Index Proxy for four main Regions (AFRICA, ASIA, AMERICA, GLOBAL).</li>
            <li>The grant data was linked to the 'New Index' using the shared Region field.</li>
            <li>This relationship allowed calculations that compared actual funding against the simulated need.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            3. Dashboard Visualizations
          </h3>
          <p className="mb-4">
            The final dashboard was designed to quickly highlight underfunded areas. It features filters for easy sorting by Region and Sector, along with explanatory text detailing the source data and assumptions behind the need index.
          </p>
        </section>
        
        {/* Conclusion and Next Steps */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-russet mb-4 border-b pb-2">
            Conclusion & Future Scope
          </h2>
          <p className="mb-4">
            The dashboard clearly identifies the largest funding gaps, making it easy to see which regions or sectors received less money relative to their simulated need. This clarity provides factual information to help leaders make swift, priority-based funding decisions.
          </p>
          <p className="font-semibold text-gray-800 mb-2">
            Next Steps for Improvement:
          </p>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li>Automate the Python script to run on a schedule, ensuring the data remains fresh without manual intervention.</li>
            <li>Replace the placeholder 'New Index' with a connection to a real, external data source to provide an accurate, up-to-date measure of global need.</li>
          </ul>
        </section>

        {/* Downloadable Files Section - UPDATED */}
        <section className="p-6 bg-russet text-white rounded-lg shadow-xl text-center">
          <h2 className="text-2xl font-bold mb-4">
            Explore the Project Files
          </h2>
          <p className="mb-6">
            Download the source code, database, and final dashboard file.
          </p>
          <div className="flex flex-wrap justify-center gap-4"> 
            {/* Download Jupyter Notebook */}
            <a
              href="/Aid-Analysis-Jupyter-File.ipynb" 
              download
              className="bg-white text-russet font-bold py-3 px-6 rounded-full shadow-lg hover:bg-cream transition duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              Download Jupyter Notebook (.ipynb)
            </a>
            {/* Download SQL Database */}
            <a
              href="/Aid-Analysis-Database-File.db"
              download
              className="bg-white text-russet font-bold py-3 px-6 rounded-full shadow-lg hover:bg-cream transition duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              Download SQL Database (.db)
            </a>
            {/* NEW: Download Power BI File */}
            <a
              href="/PowerBI-Analysis.pbix"
              download
              className="bg-white text-russet font-bold py-3 px-6 rounded-full shadow-lg hover:bg-cream transition duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              Download Power BI File (.pbix)
            </a>
          </div>
        </section>

      </div>
      
    </div>
  );
};

export default Project1;