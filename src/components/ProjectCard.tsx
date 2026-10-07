import React, { useState } from 'react';
import { ArrowUpRight, Code2, ExternalLink, Video, Terminal, Database, Network, Workflow, AudioLines, Scan, Ticket } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectProps {
  project: Project;
}

const projectVisuals = {
  sandbox: { Icon: Terminal, label: 'AGENT SANDBOX' },
  data: { Icon: Database, label: 'DATA INTELLIGENCE' },
  agents: { Icon: Network, label: 'MULTI-AGENT SYSTEMS' },
  reasoning: { Icon: Workflow, label: 'REASONING & ACTION' },
  voice: { Icon: AudioLines, label: 'REAL-TIME AI' },
  vision: { Icon: Scan, label: 'COMPUTER VISION' },
  automation: { Icon: Ticket, label: 'WORKFLOW AUTOMATION' },
};

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  const [imageUnavailable, setImageUnavailable] = useState(false);
  const visual = project.visual ? projectVisuals[project.visual] : undefined;
  const VisualIcon = visual?.Icon ?? Code2;
  const hasLinks = Boolean(project.link || project.demoLink);
  const primaryLink = project.demoLink ?? project.link;

  return (
    <article className="project-card" data-reveal>
      <div className={`project-image${visual ? ' project-illustration' : ''}`} data-visual={project.visual}>
        <div className="project-fallback" aria-hidden="true">
          <VisualIcon size={48} strokeWidth={1.25} />
          {visual && <span className="project-visual-label">{visual.label}</span>}
        </div>
        {project.image && !imageUnavailable && (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            onError={() => setImageUnavailable(true)}
          />
        )}
        <div className="project-topbar" aria-hidden="true">
          <span className="project-index">{String(project.id).padStart(2, '0')}</span>
          {hasLinks && <ArrowUpRight size={20} />}
        </div>
      </div>
      <div className="project-body">
        <h3>{primaryLink ? <a href={primaryLink} target="_blank" rel="noopener noreferrer">{project.title}</a> : project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-list">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        {hasLinks && <footer className="project-links">
          {project.link && <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
            aria-label={`${project.linkLabel ?? 'Learn More'} — ${project.title}`}
          >
            {project.linkLabel ?? 'Learn More'} <ExternalLink size={16} aria-hidden="true" />
          </a>}
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
              aria-label={`${project.demoLabel ?? 'See Demo'} — ${project.title}`}
            >
              {project.demoLabel ?? 'See Demo'} {project.demoLabel === 'Open app' ? <ArrowUpRight size={16} aria-hidden="true" /> : <Video size={16} aria-hidden="true" />}
            </a>
          )}
        </footer>}
      </div>
    </article>
  );
};

export default ProjectCard;
