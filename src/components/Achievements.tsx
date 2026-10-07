import React from 'react';
import { achievements, education } from '../data/achievements';
import { Trophy, GraduationCap } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <div className="education-grid">
      <div className="education-column">
        {achievements.academic.map((category, index) => (
          <article key={index} className="achievement-card" data-reveal>
            <div className="education-heading">
              <span className="credential-icon" aria-hidden="true">
                <Trophy size={22} />
              </span>
              <h3>{category.title}</h3>
            </div>
            <ul className="achievement-list">
              {category.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="education-column">
        {education.map((edu, index) => (
          <article key={index} className="education-card" data-reveal>
            <div className="education-heading">
              <span className="credential-icon" aria-hidden="true">
                <GraduationCap size={24} />
              </span>
              <h3>{edu.degree}</h3>
            </div>
            <p className="education-institution">{edu.institution}</p>
            <p className="education-period">{edu.period}</p>
            {edu.courses && (
              <details className="course-details">
                <summary>Relevant courses</summary>
                <div className="tag-list">
                  {edu.courses.map((course, i) => (
                    <span key={i} className="tech-tag">
                      {course}
                    </span>
                  ))}
                </div>
              </details>
            )}
          </article>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
