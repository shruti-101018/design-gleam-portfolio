
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import Navbar from '@/components/Navbar';

interface Project {
  title: string;
  category: string;
  year: string;
  description: string;
  fullDescription: string;
  challenges: string;
  solutions: string;
  image: string;
  galleryImages: string[];
  slug: string;
  tools: string[];
  liveUrl?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Travelact',
    category: 'Mobile App',
    year: '2023',
    description: 'Interactive travel app with personalized recommendations and immersive experiences.',
    fullDescription: 'Travelact is a comprehensive travel companion app designed to enhance the travel experience with personalized recommendations, itinerary planning, and immersive audio guides for popular destinations.',
    challenges: 'The main challenge was creating an intuitive interface that could present complex information about various destinations while keeping the user experience simple and engaging. Additionally, integrating location-based services and offline functionality posed technical hurdles.',
    solutions: 'We implemented a card-based UI with progressive disclosure to manage information complexity. Location services were optimized for battery efficiency, and we developed a sophisticated caching system for offline access to essential information.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
    ],
    slug: 'travelact',
    tools: ['React Native', 'TypeScript', 'Firebase', 'Figma'],
    liveUrl: 'https://example.com/travelact',
    repoUrl: 'https://github.com/example/travelact'
  },
  {
    title: 'Maimon',
    category: 'Mobile App',
    year: '2022',
    description: 'Financial management app helping people track expenses and save more effectively.',
    fullDescription: 'Maimon is a personal finance management application focused on helping users track their expenses, set savings goals, and develop better financial habits through intuitive visualizations and gentle nudges.',
    challenges: 'Building trust with users regarding financial data security was paramount. We also needed to simplify complex financial concepts and make expense tracking a habit rather than a chore.',
    solutions: 'We implemented bank-level encryption for data security and created an automated categorization system using machine learning. The app features a gamified approach to savings goals with visual progress indicators and celebration animations upon milestone completion.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
    ],
    slug: 'maimon',
    tools: ['Flutter', 'Dart', 'Firebase', 'TensorFlow Lite', 'Adobe XD'],
    liveUrl: 'https://example.com/maimon',
    repoUrl: 'https://github.com/example/maimon'
  },
  {
    title: 'Elyon Entertainment',
    category: 'Website',
    year: '2023',
    description: 'Event organizer website showcasing premium events and booking services.',
    fullDescription: 'Elyon Entertainment is a premium website for an event organization company that specializes in high-end corporate events, conferences, and social gatherings. The website serves as both a portfolio of past events and a booking platform for potential clients.',
    challenges: 'The client needed a website that conveyed luxury and exclusivity while remaining functional and easy to navigate. Showcasing the diversity of events in an elegant manner and implementing a seamless booking system were key challenges.',
    solutions: 'We designed a minimalist black and gold color scheme with subtle animations to create a sense of sophistication. A masonry grid gallery with category filtering allows visitors to browse past events, while an integrated calendar and booking system streamlines the inquiry process.',
    image: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&q=80'
    ],
    slug: 'elyon',
    tools: ['React', 'Next.js', 'TailwindCSS', 'Framer Motion', 'Strapi CMS'],
    liveUrl: 'https://example.com/elyon',
    repoUrl: 'https://github.com/example/elyon'
  },
];

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const foundProject = projects.find(p => p.slug === slug);
    if (foundProject) {
      setProject(foundProject);
      // Reset image index when project changes
      setActiveImageIndex(0);
    }
  }, [slug]);

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-6 py-32 text-center">
          <h1 className="text-2xl font-serif mb-4">Project not found</h1>
          <Link to="/projects" className="text-pink-dark hover:underline">
            Back to projects
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-10 px-6">
        <div className="container mx-auto">
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 text-gray-500 hover:text-pink-dark mb-6 transition-colors"
          >
            <ArrowLeft size={16} /> Back to all projects
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="opacity-0 animate-fade-up-delay-1">
              <h1 className="text-4xl md:text-5xl font-serif font-bold">
                {project.title}
              </h1>
              <div className="flex gap-2 mt-4">
                <span className="tag bg-lavender-light text-lavender-dark">{project.category}</span>
                <span className="tag bg-gray-100 text-gray-600">{project.year}</span>
              </div>
              <p className="text-xl text-gray-700 mt-6">
                {project.description}
              </p>
              
              {(project.liveUrl || project.repoUrl) && (
                <div className="flex gap-4 mt-8">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="button-primary"
                    >
                      View Live <ExternalLink size={16} className="ml-1" />
                    </a>
                  )}
                  {project.repoUrl && (
                    <a 
                      href={project.repoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="button-primary bg-gray-100 text-gray-800 hover:bg-gray-200"
                    >
                      View Code <Github size={16} className="ml-1" />
                    </a>
                  )}
                </div>
              )}
            </div>
            
            <div className="opacity-0 animate-fade-up-delay-2">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={project.galleryImages[activeImageIndex]} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {project.galleryImages.length > 1 && (
                <div className="flex gap-2 mt-4">
                  {project.galleryImages.map((img, index) => (
                    <button 
                      key={index}
                      className={`w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                        activeImageIndex === index ? 'border-pink-dark scale-105' : 'border-transparent'
                      }`}
                      onClick={() => setActiveImageIndex(index)}
                    >
                      <img 
                        src={img} 
                        alt={`${project.title} gallery ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Details Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 opacity-0 animate-fade-up">
              <h2 className="section-heading mb-6">Project Overview</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                {project.fullDescription}
              </p>
              
              <h3 className="text-2xl font-serif font-semibold mb-4">Challenges</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                {project.challenges}
              </p>
              
              <h3 className="text-2xl font-serif font-semibold mb-4">Solutions</h3>
              <p className="text-gray-700 leading-relaxed">
                {project.solutions}
              </p>
            </div>
            
            <div className="opacity-0 animate-slide-in-right">
              <div className="bg-gray-50 rounded-xl p-8 sticky top-32">
                <h3 className="text-xl font-serif font-semibold mb-6">Project Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm text-gray-500 mb-1">Category</h4>
                    <p className="font-medium">{project.category}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-gray-500 mb-1">Year</h4>
                    <p className="font-medium">{project.year}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-gray-500 mb-1">Tools & Technologies</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tools.map((tool, index) => (
                        <span 
                          key={index}
                          className="tag bg-cream-light text-cream-dark"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Next/Prev Projects */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="section-heading text-center mb-12">More Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects
              .filter(p => p.slug !== project.slug)
              .slice(0, 2)
              .map((p, index) => (
                <div 
                  key={p.slug}
                  className="opacity-0"
                  style={{ 
                    animation: `fade-up 0.6s ease-out ${index * 0.1 + 0.2}s forwards`
                  }}
                >
                  <Link to={`/projects/${p.slug}`} className="block group">
                    <div className="project-card">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={p.image} 
                          alt={p.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-serif text-lg font-semibold">{p.title}</h3>
                        <div className="flex gap-2 mt-1">
                          <span className="tag bg-lavender-light text-lavender-dark">{p.category}</span>
                          <span className="tag bg-gray-100 text-gray-600">{p.year}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-100">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Portfolio. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ProjectDetail;
