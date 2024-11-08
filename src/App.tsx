import React, { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import SkillSection from './components/SkillSection';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import profileImage from './assets/profile_pic.png'; // Import the profile image
import { projects } from './data/projects';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
      {/* Navigation Bar */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
              Prasanth Vemula
            </span>

            <div className="hidden md:flex space-x-8">
              <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
              <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
              <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
              <a href="#achievements" className="hover:text-blue-600 transition-colors">Achievements</a>
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
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
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#projects" className="block px-3 py-2 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="#experience" className="block px-3 py-2 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Experience</a>
              <a href="#skills" className="block px-3 py-2 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Skills</a>
              <a href="#achievements" className="block px-3 py-2 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Achievements</a>
              <a href="#about" className="block px-3 py-2 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#contact" className="block px-3 py-2 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="pt-24 pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
              Data Scientist AI 
            </h1>
            {/* <p className="text-xl text-gray-600 mb-6 leading-[1.8]">
              6+ years of experience leveraging Large Language Models and cloud technologies to develop innovative AI solutions. Specialized
              in machine learning, predictive analytics, and scalable web applications. Passionate about creating impactful, data-driven
              products that solve real-world challenges.

            </p> */}
            <p className="text-xl text-gray-600 mb-6 leading-[1.8]">
  With over 6 years of expertise, I specialize in harnessing the power of Large Language Models and advanced cloud technologies to develop transformative AI-driven solutions. My focus lies in building scalable web applications, designing predictive analytics systems, and leveraging machine learning to solve complex challenges. Passionate about innovation, I have worked on projects ranging from NLP-powered chatbots and intelligent document processing to real-time analytics and anomaly detection. My mission is to create impactful, data-centric products that not only address real-world problems but also drive measurable outcomes across industries.
</p>

            <div className="flex gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={profileImage}
              alt="Prasanth Vemula"
              className="w-80 h-auto border-4 border-indigo-600 shadow-lg transform transition-transform hover:scale-105"
            />
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-100">
        <Experience />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <SkillSection />
      </section>

{/* Achievements Section */}
<section id="achievements" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold mb-12 text-center">Achievements</h2>
    <Achievements />
  </div>
</section>

{/* About Section */}
<section id="about" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
    <div className="max-w-3xl mx-auto prose prose-lg text-gray-700">
      <p className="mb-6">
        With over 6 years of expertise in Data Science and AI, I specialize in leveraging Large Language Models (LLMs) like GPT-4 
        and advanced cloud technologies to create innovative solutions that address real-world challenges. My work spans 
        developing NLP-powered systems, predictive analytics, and scalable applications.
      </p>
      <p className="mb-6">
        Key projects include building an <span className="font-medium">HR Resume Screening Assistant</span> for automated candidate 
        analysis, a <span className="font-medium">Custom ChatGPT system</span> using LangChain for enhanced querying, and a 
        <span className="font-medium"> Wildfire Prediction System</span> leveraging machine learning for environmental insights.
      </p>
      <p className="mb-6">
        I am passionate about advancing AI research and have successfully deployed systems like the <span className="font-medium">
        Customer Care Call Summary</span> for automated speech-to-text summarization and the 
        <span className="font-medium"> Invoice Extraction Chatbot</span> to streamline document processing. Each project reflects 
        my dedication to creating scalable, robust systems that drive measurable impact.
      </p>
    </div>
  </div>
</section>

{/* Contact Section */}
<section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
  <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
  <div className="flex justify-center space-x-8">
    <a href="https://github.com/VemulaDowtyasriprasanth" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
      <Github size={24} />
    </a>
    <a href="https://linkedin.com/in/dsp1729/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
      <Linkedin size={24} />
    </a>
    <a href="mailto:prasanthvemula1729@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
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
