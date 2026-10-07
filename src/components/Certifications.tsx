import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '../data/certifications';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="certification-section" aria-labelledby="certifications-heading">
      <div className="certification-heading" data-reveal>
        <h3 id="certifications-heading">Certifications</h3>
        <small className="certification-issuer">DeepLearning.AI</small>
      </div>
      <div className="certification-grid">
        {certifications.map((certification) => (
          <article className="certification-card" key={certification.title} data-reveal>
            <span className="credential-icon" aria-hidden="true">
              <Award size={24} />
            </span>
            <h4>{certification.credentialUrl ? <a href={certification.credentialUrl} target="_blank" rel="noopener noreferrer">{certification.title}</a> : certification.title}</h4>
            <p className="certification-issuer">{certification.issuer}</p>
            {certification.credentialUrl && (
              <a
                className="text-link"
                href={certification.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View credential for ${certification.title}`}
              >
                View credential <ExternalLink size={16} aria-hidden="true" />
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
