
import React from 'react';
import { achievements, education } from '../data/achievements';
import { Trophy, GraduationCap } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Achievements Section */}
          <div className="space-y-8">
            {achievements.academic.map((category, index) => (
              <div key={index} className="bg-gray-800 rounded-xl shadow-md p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Trophy className="text-blue-600" size={24} />
                  <h3 className="text-xl font-semibold text-gray-100">{category.title}</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education Section */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-800 rounded-xl shadow-md p-6">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="text-blue-600" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-100">{edu.degree}</h3>
                    <p className="text-gray-400">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.period}</p>
                  </div>
                </div>
                {edu.courses && (
                  <div className="mt-4">
                    <h4 className="font-medium mb-2 text-gray-200">Relevant Courses:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-700 text-gray-100 rounded-full text-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
