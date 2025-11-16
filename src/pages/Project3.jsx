import React from "react";
// 🚀 CORRECTED: Define the variable as projectImage to match the usage below.
const projectImage = "/Project3.png"; 

const Project3 = () => {
  return (
    <div className="min-h-screen bg-cream text-gray-900 px-6 py-12">
      <div className="max-w-4xl mx-auto">

        {/* Project Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-russet mb-4">
            Automated ERP Data Reconciliation
          </h1>
          <p className="text-lg text-gray-600">
            A Multi-Stage Workflow for Financial Governance and Auditing
          </p>
        </div>

        {/* Project Image */}
        <section className="mb-12 flex justify-center">
            <img
                src={projectImage} // ✅ Now correctly references the variable defined above
                alt="ERP Data Reconciliation Workflow Diagram"
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
            This project solves a key governance challenge: making sure financial data is accurate across different systems, like an ERP and external reports. The workflow is automated and has three stages. It quickly identifies, reports, and audits any financial discrepancies. This automation is vital for accurate reporting by large organizations. The final system delivers fast reconciliation while always keeping a clear, auditable history of changes.
          </p>
        </section>

        {/* Core Technology Used */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-russet mb-4 border-b pb-2">
            Core Technology Used
          </h2>
          <p className="mb-4">
            This project integrates three distinct technologies in a sequential financial workflow. This showcases full-stack data governance skills: **SQL**, **Python/Pandas**, and **Advanced Excel Logic**.
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
                  <td className="px-6 py-4 whitespace-nowrap font-semibold">SQL (`erp_extraction_script.sql`)</td>
                  <td className="px-6 py-4">Simulates complex extraction of core transaction data (GL entries, Invoices) from the ERP, focusing on specific accounts and date ranges (e.g., 4000: Grants Expense).</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-semibold">Python / Pandas (`reconciliation_logic.py`)</td>
                  <td className="px-6 py-4">Performs advanced, automated reconciliation checks (e.g., duplicate detection, zero-value transactions, cross-system mismatch checks).</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-semibold">Advanced Excel Logic</td>
                  <td className="px-6 py-4">Defines the structure for the final, auditable Discrepancy Report, utilizing Excel features like VLOOKUP/INDEX MATCH and Track Changes for governance and manual sign-off.</td>
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
            1. ERP Data Extraction (SQL)
          </h3>
          <p className="mb-2">
            The first step uses a specific SQL query. This query becomes the single source of truth from the ERP.
          </p>
          <ul className="list-disc list-inside ml-4 mb-4 text-gray-700">
            <li>It pulls only relevant transactions, like General Ledger and Invoice details.</li>
            <li>Data is limited to a specific financial period.</li>
            <li>It focuses on high-risk accounts, such as grant expense accounts.</li>
          </ul>
          <p className="mb-4">
            This focused extraction minimizes data clutter and ensures the audit is relevant.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            2. Automated Reconciliation (Python/Pandas)
          </h3>
          <p className="mb-2">
            The Python script then takes the ERP data (simulated CSV) and a mock external report. Pandas is used to merge, group, and compare these two datasets. The logic identifies three types of issues:
          </p>
          <ul className="list-disc list-inside ml-4 mb-4 text-gray-700">
            <li>Duplicate Entries: Same amount, date, and reference appearing twice.</li>
            <li>Mismatched Totals: Differences in aggregate sums between the ERP and the external report.</li>
            <li>Orphaned Entries: Transactions found in one system but missing from the other.</li>
          </ul>
          <p className="mb-4">
            The final output is a clean dataset containing only the identified discrepancies.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            3. Governance and Audit Trail (Excel)
          </h3>
          <p className="mb-2">
            The final output is a structured Advanced Excel Workbook. This workbook turns the raw output into a formal governance document. It accomplishes this by:
          </p>
          <ul className="list-disc list-inside ml-4 mb-4 text-gray-700">
            <li>Importing the discrepancy report generated by Python.</li>
            <li>Using Data Validation to standardize how manual resolutions are logged.</li>
            <li>Employing VLOOKUP/INDEX MATCH to automatically pull necessary master data or flags.</li>
            <li>Mandating the Track Changes feature. This creates a clear audit trail of who reviewed and signed off on each discrepancy.</li>
          </ul>
        </section>
        
        {/* Downloadable Files Section */}
        <section className="p-6 bg-russet text-white rounded-lg shadow-xl text-center">
          <h2 className="text-2xl font-bold mb-4">
            Explore the Project Files
          </h2>
          <p className="mb-6">
            Download the Python analysis and the final auditable report structure.
          </p>
          <div className="flex flex-wrap justify-center gap-4"> 
            {/* Download Jupyter Notebook */}
            <a
              href="/Automated_ERP_Data_Quality.ipynb" 
              download
              className="bg-white text-russet font-bold py-3 px-6 rounded-full shadow-lg hover:bg-cream transition duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              Download Python Analysis (.ipynb)
            </a>
            {/* Download Excel Report */}
            <a
              href="/Automated_Reconciliation_Report.xlsx"
              download
              className="bg-white text-russet font-bold py-3 px-6 rounded-full shadow-lg hover:bg-cream transition duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              Download Audit Report Structure (.xlsx)
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Project3;