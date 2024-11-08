import React from 'react';
import { experience } from '../data/experience';

const Experience: React.FC = () => {
  return (
    <div className="py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
        
        <div className="space-y-12">
          {experience.map((job, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                  <p className="text-lg text-blue-600">{job.company}</p>
                </div>
                <div className="text-gray-600 mt-2 md:mt-0">
                  <p>{job.location}</p>
                  <p>{job.period}</p>
                </div>
              </div>
              
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                {job.achievements.map((achievement, i) => (
                  <li key={i} className="leading-relaxed">
                    {achievement.description}
                    <div className="ml-6 mt-2">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Tools/Techniques:</span> {achievement.tools}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;