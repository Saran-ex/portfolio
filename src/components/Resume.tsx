import React, { useState, useEffect, useRef } from 'react';
import { Download, FileText } from 'lucide-react';

const Resume: React.FC = () => {
  const [showResume, setShowResume] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Your resume content as text
  const resumeContent = `SARAN P

Salem, Tamil Nadu, India


PROFESSIONAL SUMMARY

Final-year B.Tech student in Artificial Intelligence & Data Science with strong skills in Python, Node.js, and full-stack development. Experienced in real-time component management systems and data analytics using Tableau. Passionate about solving real-world problems with data and code.

EDUCATION

B.Tech in Artificial Intelligence & Data Science
Excel Engineering College, 2023 -- 2026
CGPA: 8.1 / 10

TECHNICAL SKILLS

Languages: Python, JavaScript (Basic)
Web: HTML, CSS, TailwindCSS, Node.js, Express.js, Next.js
Databases: MongoDB, Supabase, Appwrite
Tools: Tableau
Soft Skills: Leadership, Communication, Team Collaboration

INTERNSHIP EXPERIENCE

Data Analyst -- Engineering Stores
Cavinkare Pvt. Ltd. | 47 Days
- Analyzed component data using Tableau to identify frequently and rarely used items.
- Generated reports to help optimize component storage and procurement planning.

PROJECTS

Component Management System
Tech Stack: HTML, TailwindCSS, Next.js, MongoDB
- Built during internship at Cavinkare to digitize and manage component requests in the engineering store.
- Features user login, request submission, admin approval/denial with notes, and department-wise request filtering.
- Admin dashboard allows visualizing, editing, downloading (Excel format), and managing all requests.

ACHIEVEMENTS & ACTIVITIES

- Class Representative
- Member of Fine Arts Club
- Hobby: Portrait Drawing`;

  const downloadResume = () => {
    const element = document.createElement('a');
    const file = new Blob([resumeContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'Saran_P_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } transition-all duration-1000`}
        >
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <FileText className="w-16 h-16 mx-auto mb-6 text-blue-400" />
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
                My Resume
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get a detailed overview of my experience, education, and technical skills
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setShowResume(!showResume)}
                className="inline-flex items-center space-x-3 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold transition-all duration-300 hover:bg-blue-700 hover:scale-105"
              >
                <FileText className="w-5 h-5" />
                <span>{showResume ? 'Hide Resume' : 'View Resume'}</span>
              </button>
              
              <button
                onClick={downloadResume}
                className="inline-flex items-center space-x-3 px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold transition-all duration-300 hover:bg-purple-700 hover:scale-105"
              >
                <Download className="w-5 h-5" />
                <span>Download</span>
              </button>
            </div>

            {/* Resume Content Display */}
            {showResume && (
              <div className="bg-gray-800 rounded-lg p-8 text-left max-w-3xl mx-auto mb-8 transition-all duration-500">
                <div className="text-gray-300 font-mono text-sm leading-relaxed whitespace-pre-line">
                  {resumeContent}
                </div>
              </div>
            )}

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-400">2</div>
                <div className="text-gray-400">Project</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-green-400">47</div>
                <div className="text-gray-400">Days Internship</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-purple-400">8.1</div>
                <div className="text-gray-400">CGPA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;