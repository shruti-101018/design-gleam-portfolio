
import { ReactNode } from 'react';

interface SkillTagProps {
  children: ReactNode;
  variant: 'pink' | 'mint' | 'lavender' | 'cream' | 'peach' | 'skyblue';
  className?: string;
}

const SkillTag = ({ children, variant, className = '' }: SkillTagProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'pink':
        return 'bg-pink-light text-pink-dark animate-float';
      case 'mint':
        return 'bg-mint-light text-mint-dark animate-float';
      case 'lavender':
        return 'bg-lavender-light text-lavender-dark animate-float';
      case 'cream':
        return 'bg-cream-light text-cream-dark animate-float';
      case 'peach':
        return 'bg-peach-light text-peach-dark animate-float';
      case 'skyblue':
        return 'bg-skyblue-light text-skyblue-dark animate-float';
      default:
        return 'bg-pink-light text-pink-dark animate-float';
    }
  };

  return (
    <div 
      className={`skill-tag ${getVariantClasses()} ${className}`}
    >
      {children}
    </div>
  );
};

export default SkillTag;
