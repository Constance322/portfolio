import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";

import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import Project1 from "./pages/Project1"; 
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Project4 from "./pages/Project4";
import Project5 from "./pages/Project5"; // <-- NEW IMPORT

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-cream text-gray-900">

        {/* Navbar */}
        <nav className="bg-russet text-gray-100 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="text-2xl font-bold">
                <Link to="/">My Toolkit</Link>
              </div>
              <div className="flex space-x-8 text-lg font-semibold">
                <Link to="/" className="hover:text-gray-200 transition duration-200">Home</Link>
                <Link to="/about" className="hover:text-gray-200 transition duration-200">About</Link>
                <Link to="/projects" className="hover:text-gray-200 transition duration-200">Projects</Link>
                <Link to="/contact" className="hover:text-gray-200 transition duration-200 flex items-center">
                  <FiMail className="mr-1" /> Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutMePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            
            {/* Project Detail Routes */}
            <Route path="/projects/aid-allocation" element={<Project1 />} />
            <Route path="/projects/inventory-forecast" element={<Project2 />} />
            <Route path="/projects/erp-reconciliation" element={<Project3 />} />
            <Route path="/projects/maple-analytics" element={<Project4 />} />
            <Route path="/projects/risk-map-dashboard" element={<Project5 />} /> {/* <-- NEW ROUTE ADDED */}
            
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-russet text-gray-100 text-center p-4 font-semibold">
          © 2025 Constance. All rights reserved.
        </footer>

      </div>
    </Router>
  );
};

export default App;