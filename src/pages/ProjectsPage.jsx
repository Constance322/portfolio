import React from "react";
import { Link } from "react-router-dom"; 

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-cream text-gray-900 px-6 py-12">

      {/* Page Header */}
      <h1 className="text-5xl font-extrabold text-russet text-center mb-12">
        Projects
      </h1>

      {/* Changed to max-w-6xl for better centering when only 5 projects are present */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* PROJECT CARD 1 - AID ALLOCATION MODEL */}
        <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-russet/30 hover:shadow-2xl transition duration-300">
          <img 
            src="/src/assets/project1.png" // Path to your image
            alt="Aid Allocation Model Dashboard Preview"
            className="w-full h-48 object-cover"
          />
          <div className="bg-russet text-gray-100 p-4 text-xl font-semibold">
            Aid Allocation Model
          </div>
          <div className="p-6">
            <p className="mb-4">
              A complete data system for analyzing aid funding, identifying "Funding Gaps," and improving resource allocation.
            </p>
            <Link
              to="/projects/aid-allocation" 
              className="text-russet font-semibold hover:underline"
            >
              View Project →
            </Link>
          </div>
        </div>

        {/* PROJECT CARD 2 - INVENTORY FORECASTING TOOL */}
        <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-russet/30 hover:shadow-2xl transition duration-300">
          <img 
            src="/src/assets/Project2.png" 
            alt="Inventory Forecasting Tool Preview"
            className="w-full h-48 object-cover"
          />
          <div className="bg-russet text-gray-100 p-4 text-xl font-semibold">
            Inventory Forecasting Tool
          </div>
          <div className="p-6">
            <p className="mb-4">
              A Python-driven tool that calculates standardized response rates to forecast inventory needs for disaster preparedness.
            </p>
            <Link
              to="/projects/inventory-forecast"
              className="text-russet font-semibold hover:underline"
            >
              View Project →
            </Link>
          </div>
        </div>
        
        {/* PROJECT CARD 3 - ERP DATA RECONCILIATION */}
        <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-russet/30 hover:shadow-2xl transition duration-300">
          <img 
            src="/src/assets/Project3.png" 
            alt="ERP Data Reconciliation Workflow Preview"
            className="w-full h-48 object-cover"
          />
          <div className="bg-russet text-gray-100 p-4 text-xl font-semibold">
            Automated ERP Data Reconciliation
          </div>
          <div className="p-6">
            <p className="mb-4">
              A three-stage workflow (SQL, Python, Excel) built to automatically identify and audit financial discrepancies between systems.
            </p>
            <Link
              to="/projects/erp-reconciliation"
              className="text-russet font-semibold hover:underline"
            >
              View Project →
            </Link>
          </div>
        </div>

        {/* PROJECT CARD 4 - MAPLE ANALYTICS DASHBOARD */}
        <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-russet/30 hover:shadow-2xl transition duration-300">
          <img 
            src="/src/assets/Project4.png" 
            alt="Maple Analytics Dashboard Preview"
            className="w-full h-48 object-cover"
          />
          <div className="bg-russet text-gray-100 p-4 text-xl font-semibold">
            Maple Analytics Dashboard
          </div>
          <div className="p-6">
            <p className="mb-4">
              A React/Tailwind dashboard for weekly KPI monitoring, featuring detailed data provenance and governance.
            </p>
            <Link
              to="/projects/maple-analytics"
              className="text-russet font-semibold hover:underline"
            >
              View Project →
            </Link>
          </div>
        </div>
        
        {/* PROJECT CARD 5 - INTERACTIVE RISK MAP DASHBOARD (NEW) */}
        <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-russet/30 hover:shadow-2xl transition duration-300">
          <img 
            src="/src/assets/Project5.png" 
            alt="Humanitarian Risk Monitoring Dashboard Preview"
            className="w-full h-48 object-cover"
          />
          <div className="bg-russet text-gray-100 p-4 text-xl font-semibold">
            Interactive Risk Map Dashboard
          </div>
          <div className="p-6">
            <p className="mb-4">
              A dynamic React dashboard for aid allocation, showing real-time regional risk levels and critical resource capacity.
            </p>
            <Link
              to="/projects/risk-map-dashboard" // NEW ROUTE
              className="text-russet font-semibold hover:underline"
            >
              View Project →
            </Link>
          </div>
        </div>

        {/* PROJECT CARD 6 (Original Card 5/6 - Removed) 
        Removed to keep the project count at 5
        */}

      </div>
    </div>
  );
};

export default ProjectsPage;