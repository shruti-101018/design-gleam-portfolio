
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      title: 'Travelact',
      category: 'Mobile App',
      year: '2023',
      description: 'Interactive travel app with personalized recommendations and immersive experiences.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
      slug: 'travelact',
      tags: ['mobile', 'ux']
    },
    {
      title: 'Maimon',
      category: 'Mobile App',
      year: '2022',
      description: 'Financial management app helping people track expenses and save more effectively.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      slug: 'maimon',
      tags: ['mobile', 'ui']
    },
    {
      title: 'Elyon Entertainment',
      category: 'Website',
      year: '2023',
      description: 'Event organizer website showcasing premium events and booking services.',
      image: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&w=800&q=80',
      slug: 'elyon',
      tags: ['web', 'ui']
    },
    {
      title: 'HealthTrack',
      category: 'Mobile App',
      year: '2022',
      description: 'Health tracking application with personalized insights and progress monitoring.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
      slug: 'healthtrack',
      tags: ['mobile', 'ux']
    },
    {
      title: 'CodeVault',
      category: 'Web App',
      year: '2023',
      description: 'Code snippet management platform for developers with sharing capabilities.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      slug: 'codevault',
      tags: ['web', 'ui']
    },
    {
      title: 'Wanderlust',
      category: 'Website',
      year: '2021',
      description: 'Travel blog website with immersive storytelling and visual experiences.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      slug: 'wanderlust',
      tags: ['web', 'ux']
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-10 px-6">
        <div className="container mx-auto">
          <h1 className="opacity-0 animate-fade-up-delay-1 text-4xl md:text-5xl font-serif font-bold">
            My Projects
          </h1>
          <div className="w-20 h-1 bg-pink-dark mt-4 mb-8 opacity-0 animate-fade-up-delay-2"></div>
          <p className="text-xl text-gray-600 max-w-3xl opacity-0 animate-fade-up-delay-3">
            A collection of my recent work spanning mobile applications, websites, and design systems.
          </p>
        </div>
      </section>
      
      {/* Filter Section */}
      <section className="pb-10 pt-4 px-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-3 mb-10">
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'all' 
                  ? 'bg-black text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'web' 
                  ? 'bg-black text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setFilter('web')}
            >
              Websites
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'mobile' 
                  ? 'bg-black text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setFilter('mobile')}
            >
              Mobile Apps
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'ui' 
                  ? 'bg-black text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setFilter('ui')}
            >
              UI Design
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'ux' 
                  ? 'bg-black text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setFilter('ux')}
            >
              UX Design
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.slug} 
                className="opacity-0"
                style={{ 
                  animation: `fade-up 0.6s ease-out ${index * 0.1 + 0.2}s forwards`
                }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500">No projects found with the selected filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-100 mt-10">
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

export default Projects;
