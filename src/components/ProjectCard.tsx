import React from 'react';
import { ExternalLink, Video } from 'lucide-react';

interface ProjectProps {
  project: {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    link: string;
    demoLink?: string;
    image?: string;
  };
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      {project.image && (
        <div className="relative h-48 overflow-hidden mb-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
          />
        </div>
      )}
      <h3 className="text-2xl font-semibold text-gray-100 mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 text-sm bg-blue-700 text-gray-100 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline flex items-center"
        >
          Learn More <ExternalLink size={16} className="ml-1" />
        </a>
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:underline flex items-center"
          >
            See Demo <Video size={16} className="ml-1" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
