import React, { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import SkillSection from './components/SkillSection';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import profileImage from './assets/profile_pic.png';
import { projects } from './data/projects';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      {/* Navigation Bar */}
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur-md shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-emerald-400 text-transparent bg-clip-text">
              Prasanth Vemula
            </span>
            <div className="hidden md:flex space-x-8">
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#achievements" className="hover:text-blue-400 transition-colors">Achievements & Education</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#projects" className="block px-3 py-2 hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="#experience" className="block px-3 py-2 hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>Experience</a>
              <a href="#skills" className="block px-3 py-2 hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>Skills</a>
              <a href="#achievements" className="block px-3 py-2 hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>Achievements & Education</a>
              <a href="#about" className="block px-3 py-2 hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#contact" className="block px-3 py-2 hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>
      {/* Hero Section */}
      <header className="pt-24 pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div>
            <h1 className="text-5xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              Hello,<br />
              I'm an AI Engineer<span className="blinking-cursor">|</span>
            </h1>

            <p className="text-xl text-gray-400 mb-6 leading-relaxed">
              With over 6 years of expertise in developing AI-driven solutions, I specialize in building scalable applications and solving complex challenges using machine learning and advanced analytics.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-gray-700 text-blue-400 hover:bg-gray-600 transition-colors"
              >
                View Projects
              </a>
              <a
                href="https://docs.google.com/document/d/1NUiIK8sCIs6HDD6APZDDbF7iCuLVg4VF/edit?usp=sharing&ouid=117040235381669175039&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 transition-colors text-white"
                download
              >
                Download Resume
              </a>
            </div>
            {/* Social Links */}
            <div className="flex space-x-4 mt-4 text-gray-400">
              <a href="https://github.com/VemulaDowtyasriprasanth" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/dsp1729/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:prasanthvemula1729@gmail.com" className="hover:text-blue-500 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <img src={profileImage} alt="Prasanth Vemula" className="profile" />
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">Experience</h2>
          <Experience />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">Technical Skills</h2>
          <SkillSection />
        </div>
      </section>

      {/* Achievements & Education Section */}
      <section id="achievements" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">Achievements & Education</h2>
          <Achievements />
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">About Me</h2>
          <div className="max-w-3xl mx-auto prose prose-lg text-gray-300">
            <p className="mb-6">
              With over 6 years of expertise in Data Science and AI, I specialize in leveraging Large Language Models (LLMs) like GPT-4 
              and advanced cloud technologies to create innovative solutions that address real-world challenges. My work spans 
              developing NLP-powered systems, predictive analytics, and scalable applications.
            </p>
            <p className="mb-6">
              Key projects include building an <span className="font-medium text-gray-200">HR Resume Screening Assistant</span> for automated candidate 
              analysis, a <span className="font-medium text-gray-200">Custom ChatGPT system</span> using LangChain for enhanced querying, and a 
              <span className="font-medium text-gray-200">Wildfire Prediction System</span> leveraging machine learning for environmental insights.
            </p>
            <p className="mb-6">
              I am passionate about advancing AI research and have successfully deployed systems like the <span className="font-medium text-gray-200">
              Customer Care Call Summary</span> for automated speech-to-text summarization and the 
              <span className="font-medium text-gray-200">Invoice Extraction Chatbot</span> to streamline document processing. Each project reflects 
              my dedication to creating scalable, robust systems that drive measurable impact.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">Get in Touch</h2>
        <div className="flex justify-center space-x-8">
          <a href="https://github.com/VemulaDowtyasriprasanth" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/dsp1729/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:prasanthvemula1729@gmail.com" className="text-gray-400 hover:text-blue-500 transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-4">© {new Date().getFullYear()} Prasanth Vemula. All rights reserved.</p>
          <p className="text-gray-400">Based in Dallas, TX</p>
        </div>
      </footer>
    </div>
  );
}

export default App;