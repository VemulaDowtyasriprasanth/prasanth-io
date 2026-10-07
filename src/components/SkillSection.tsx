import React from 'react';
import { skills } from '../data/skills';

const SkillSection: React.FC = () => {
  return (
    <div className="skills-grid">
      {Object.entries(skills).map(([category, items], categoryIndex) => (
        <section key={category} className="skill-card" data-reveal>
          <span className="skill-category-number" aria-hidden="true">
            {String(categoryIndex + 1).padStart(2, '0')}
          </span>
          <h3 className="skill-title">
            {category.replace(/([A-Z])/g, ' $1').trim()}
          </h3>
          <div className="tag-list">
            {items.map((skill, index) => (
              <span key={index} className="tech-tag">
                {skill}
              </span>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default SkillSection;
