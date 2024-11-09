
import React from 'react';
import { skills } from '../data/skills';

const SkillSection: React.FC = () => {
  return (
    <div className="py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 capitalize text-gray-200">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
