import React, { useLayoutEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { experience } from '../data/experience';

const startupCompanies = new Set(['Maxmodus', 'Benchmark Gensuite (Contract)']);
const ventureCompanies = new Set(['RetireStrong', 'Socovia (MVP)', 'AI Data Analyst Platform']);

const experienceSections = [
  {
    id: 'professional-experience',
    title: 'Professional Experience',
    jobs: experience.filter((job) => !startupCompanies.has(job.company) && !ventureCompanies.has(job.company)),
  },
  {
    id: 'startup-experiences',
    title: 'Startup Experiences',
    jobs: experience.filter((job) => startupCompanies.has(job.company)),
  },
  {
    id: 'entrepreneurial-ventures',
    title: 'Entrepreneurial Ventures & Product Engineering',
    jobs: experience.filter((job) => ventureCompanies.has(job.company)),
  },
];

const professionalJobs = experienceSections[0].jobs;
const concurrentSections = experienceSections.slice(1);

const RoleDetails: React.FC<{ job: typeof experience[number] }> = ({ job }) => (
  <details className="experience-card" data-reveal>
    <summary className="experience-summary">
      <span className="experience-period">{job.period}</span>
      <div className="experience-role">
        <h4>{job.title}</h4>
        <p className="experience-company">{job.company}</p>
        {job.location && <p className="experience-location">{job.location}</p>}
      </div>
      <ChevronDown className="experience-chevron" size={20} aria-hidden="true" />
    </summary>

    <div className="experience-details">
      <ul className="experience-achievements">
        {job.achievements.map((achievement, i) => (
          <li key={i}>
            <p>{achievement.description}</p>
            <p className="experience-tools">
              <span>Tools/Techniques:</span> {achievement.tools}
            </p>
          </li>
        ))}
      </ul>
    </div>
  </details>
);

const Experience: React.FC = () => {
  const journeyRef = useRef<HTMLDivElement>(null);
  const [curves, setCurves] = useState({ professional: '', secondary: '' });

  useLayoutEffect(() => {
    const journey = journeyRef.current;
    if (!journey) return;

    let frame = 0;
    const measure = () => {
      frame = 0;
      const bounds = journey.getBoundingClientRect();
      const concurrentAnchor = journey.querySelector<HTMLElement>('[data-concurrent-anchor]');
      const concurrentOffset = window.matchMedia('(min-width: 901px)').matches && concurrentAnchor
        ? Math.max(0, concurrentAnchor.getBoundingClientRect().top - bounds.top)
        : 0;
      const offsetValue = `${concurrentOffset.toFixed(2)}px`;
      if (journey.style.getPropertyValue('--concurrent-offset') !== offsetValue) {
        journey.style.setProperty('--concurrent-offset', offsetValue);
      }
      const connectPoints = (selector: string) => {
        const points = Array.from(journey.querySelectorAll<HTMLElement>(selector)).map(point => {
          const marker = point.getBoundingClientRect();
          return {
            x: marker.left - bounds.left + marker.width / 2,
            y: marker.top - bounds.top + marker.height / 2,
          };
        });

        return points.length < 2 ? '' : points.reduce((result, point, index) => {
          if (index === 0) return `M ${point.x.toFixed(2)} ${point.y.toFixed(2)}`;
          const previous = points[index - 1];
          const middle = ((previous.y + point.y) / 2).toFixed(2);
          return `${result} C ${previous.x.toFixed(2)} ${middle} ${point.x.toFixed(2)} ${middle} ${point.x.toFixed(2)} ${point.y.toFixed(2)}`;
        }, '');
      };
      const next = {
        professional: connectPoints('.professional-point'),
        secondary: connectPoints('.secondary-point'),
      };
      setCurves(previous => previous.professional === next.professional && previous.secondary === next.secondary ? previous : next);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };
    const observer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(schedule);
    observer?.observe(journey);
    journey.querySelectorAll('details').forEach(details => observer?.observe(details));
    window.addEventListener('resize', schedule);
    journey.addEventListener('toggle', schedule, true);
    schedule();

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
      window.removeEventListener('resize', schedule);
      journey.removeEventListener('toggle', schedule, true);
    };
  }, []);

  return (
    <div>
      <nav className="experience-navigation" aria-label="Experience categories">
        {experienceSections.map((section) => (
          <a key={section.id} href={`#${section.id}`}>{section.title}</a>
        ))}
      </nav>
      <div className="experience-thread-legend">
        <span className="professional-thread">Professional Experience</span>
        <span className="secondary-thread">Startup &amp; Ventures</span>
      </div>

      <div className="experience-lanes-heading">
        <div>
          <h3 id="professional-experience-heading">Professional Experience</h3>
          <span className="experience-group-count">{professionalJobs.length} roles</span>
        </div>
        <div>
          <h3>Startup &amp; Ventures</h3>
          <span className="experience-group-count">{concurrentSections.reduce((count, section) => count + section.jobs.length, 0)} roles</span>
        </div>
      </div>

      <div className="career-journey" id="professional-experience" ref={journeyRef} aria-labelledby="professional-experience-heading">
        {(['professional', 'secondary'] as const).map(thread => (
          <svg
            key={thread}
            className={`experience-timeline-spine ${thread}-spine`}
            aria-hidden="true"
            focusable="false"
            width="100%"
            height="100%"
            style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
          >
            <path d={curves[thread]} fill="none" vectorEffect="non-scaling-stroke" />
          </svg>
        ))}
        <div className="career-professional">
          {professionalJobs.map(job => (
            <div
              className="career-row"
              key={`${job.company}-${job.title}`}
              data-concurrent-anchor={job.company === 'Ao Partners / Sensor Technologies' ? true : undefined}
            >
              <div className="career-main">
                <span className="experience-timeline-point professional-point" aria-hidden="true" />
                <RoleDetails job={job} />
              </div>
            </div>
          ))}
        </div>
        <aside className="career-concurrent" aria-label="Concurrent experience">
          <p className="concurrent-caption">Overlaps Ao Partners / Sensor Technologies · Nov 2024 – Feb 2026</p>
          {concurrentSections.map(section => (
            <section
              key={section.id}
              id={section.id}
              className="concurrent-group"
              aria-labelledby={`${section.id}-heading`}
            >
              <div className="concurrent-group-heading">
                <h3 id={`${section.id}-heading`}>{section.title}</h3>
                <span className="experience-group-count">{section.jobs.length} roles</span>
              </div>
              {section.jobs.map(concurrentJob => (
                <div className="concurrent-role" key={`${concurrentJob.company}-${concurrentJob.title}`}>
                  <span className="experience-timeline-point secondary-point" aria-hidden="true" />
                  <RoleDetails job={concurrentJob} />
                </div>
              ))}
            </section>
          ))}
        </aside>
      </div>
    </div>
  );
};

export default Experience;
