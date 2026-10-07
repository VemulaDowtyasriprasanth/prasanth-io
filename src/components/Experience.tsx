import React from 'react';
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

const Experience: React.FC = () => {
  return (
    <div className="py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {experienceSections.filter((section) => section.jobs.length > 0).map((section) => (
            <section key={section.id} aria-labelledby={section.id}>
              <h3 id={section.id} className="text-2xl font-bold text-gray-100 mb-8">{section.title}</h3>
              <div className="space-y-12">
                {section.jobs.map((job) => (
                  <div key={`${job.company}-${job.title}`} className="bg-gray-800 p-6 rounded-xl shadow-md">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-100">{job.title}</h4>
                        <p className="text-lg text-blue-400">{job.company}</p>
                      </div>
                      <div className="text-gray-400 mt-2 md:mt-0">
                        <p>{job.location}</p>
                        <p>{job.period}</p>
                      </div>
                    </div>

                    <ul className="list-disc list-inside space-y-3 text-gray-300">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="leading-relaxed">
                          {achievement.description}
                          <div className="ml-6 mt-2">
                            <p className="text-sm text-gray-500">
                              <span className="font-semibold">Tools/Techniques:</span> {achievement.tools}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
