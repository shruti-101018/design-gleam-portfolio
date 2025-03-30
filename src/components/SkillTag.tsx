
import { ReactNode } from 'react';

interface SkillTagProps {
  children: ReactNode;
  variant: 'pink' | 'mint' | 'lavender' | 'cream';
  className?: string;
}

const SkillTag = ({ children, variant, className = '' }: SkillTagProps) => {
  return (
    <div 
      className={`skill-tag skill-tag-animation-${variant} ${className}`}
    >
      {children}
    </div>
  );
};

export default SkillTag;
