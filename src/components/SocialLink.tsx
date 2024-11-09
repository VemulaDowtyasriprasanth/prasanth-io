// src/components/SocialLink.tsx

import React from 'react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-primary transition-colors duration-200"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default SocialLink;
