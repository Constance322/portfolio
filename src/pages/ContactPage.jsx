import React from 'react';

const ContactPage = () => {
  
  // Your Contact Details
  const EMAIL = "syombuaconstance@gmail.com";
  const LINKEDIN_URL = "https://www.linkedin.com/in/constance-s-713b93221/";
  const GITHUB_URL = "https://github.com/Constance322";

  return (
    <div className="min-h-screen bg-cream text-white pt-16">
      
      {/* Header */}
      <header className="py-12 bg-russet text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-2 animate-contact-fade">
            Let's Connect
          </h1>
          <p className="text-xl font-light opacity-90">
            I'm always open to discussing new projects, creative ideas, or opportunities.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Contact Card - Direct Info Only, using bg-white for visibility */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl animate-contact-zoom text-gray-900 text-center">
          
          <h3 className="text-3xl font-bold text-russet mb-8">
            Get In Touch
          </h3>
          
          <div className="space-y-6">
            
            {/* Email Address */}
            <div className="p-4 border border-gray-100 rounded-lg shadow-sm">
                <p className="text-lg font-semibold text-gray-800 mb-1">Email Address</p>
                <a 
                    href={`mailto:${EMAIL}`} 
                    className="text-2xl font-extrabold text-russet hover:underline transition"
                >
                    {EMAIL}
                </a>
            </div>

            {/* LinkedIn */}
            <div className="p-4 border border-gray-100 rounded-lg shadow-sm">
                <p className="text-lg font-semibold text-gray-800 mb-1">LinkedIn Profile</p>
                <a 
                    href={LINKEDIN_URL} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-bold text-blue-700 hover:text-blue-900 hover:underline transition"
                >
                    Connect on LinkedIn
                </a>
            </div>

            {/* GitHub */}
            <div className="p-4 border border-gray-100 rounded-lg shadow-sm">
                <p className="text-lg font-semibold text-gray-800 mb-1">GitHub Portfolio</p>
                <a 
                    href={GITHUB_URL} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-bold text-gray-700 hover:text-gray-900 hover:underline transition"
                >
                    View GitHub
                </a>
            </div>

          </div>
        </div>
      </main>

      {/* Animations */}
      <style>{`
        @keyframes contactFade {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes contactZoom {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-contact-fade {
          animation: contactFade 0.8s ease-out forwards;
        }
        .animate-contact-zoom {
          animation: contactZoom 1s ease-out 0.2s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;