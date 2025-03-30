
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  slug: string;
}

const ProjectCard = ({ title, category, year, description, image, slug }: ProjectCardProps) => {
  return (
    <div className="project-card group">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="project-card-content">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-serif text-lg font-semibold">{title}</h3>
            <div className="flex gap-2 mt-1">
              <span className="tag bg-lavender-light text-lavender-dark">{category}</span>
              <span className="tag bg-gray-100 text-gray-600">{year}</span>
            </div>
          </div>
        </div>
        <p className="text-gray-600 text-sm mt-3 line-clamp-2">{description}</p>
        <Link 
          to={`/projects/${slug}`} 
          className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-pink-dark hover:gap-2 transition-all"
        >
          Explore <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
