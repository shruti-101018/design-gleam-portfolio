
import { useEffect, useRef } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import SkillTag from '@/components/SkillTag';
import ProjectCard from '@/components/ProjectCard';

const Index = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = e.clientX + 'px';
        cursorDotRef.current.style.top = e.clientY + 'px';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: 'Travelact',
      category: 'Mobile App',
      year: '2023',
      description: 'Interactive travel app with personalized recommendations and immersive experiences.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
      slug: 'travelact',
    },
    {
      title: 'Maimon',
      category: 'Mobile App',
      year: '2022',
      description: 'Financial management app helping people track expenses and save more effectively.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      slug: 'maimon',
    },
    {
      title: 'Elyon Entertainment',
      category: 'Website',
      year: '2023',
      description: 'Event organizer website showcasing premium events and booking services.',
      image: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&w=800&q=80',
      slug: 'elyon',
    },
  ];

  return (
    <>
      <div ref={cursorDotRef} className="cursor-dot hidden md:block"></div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="opacity-0 animate-fade-up-delay-1">
              <span className="hero-heading">
                I craft
                <span className="relative inline-block ml-2">
                  <SkillTag variant="pink" className="absolute -top-8 -left-6">UI Design</SkillTag>
                  intuitive,
                </span>
                <span className="relative inline-block ml-2">
                  <SkillTag variant="mint" className="absolute -top-6 left-16">Development</SkillTag>
                  clean designs,
                </span>
              </span>
            </h1>

            <h2 className="opacity-0 animate-fade-up-delay-2 mt-3">
              <span className="hero-heading">
                also
                <span className="relative inline-block ml-2 italic">
                  <SkillTag variant="lavender" className="absolute -top-6 left-20">UX Research</SkillTag>
                  unique
                </span>
                & 
                <span className="relative inline-block ml-2">
                  <SkillTag variant="cream" className="absolute -top-6 right-10">Animation</SkillTag>
                  empathic experiences.
                </span>
              </span>
            </h2>

            <p className="hero-subheading opacity-0 animate-fade-up-delay-3 mt-8 max-w-2xl">
              I'm a passionate web developer and UI/UX designer dedicated to creating beautiful, 
              functional, and user-centered digital experiences.
            </p>

            <div className="mt-10 flex gap-4 items-center opacity-0 animate-fade-up-delay-4">
              <a 
                href="#contact" 
                className="button-primary"
              >
                Let's work together
              </a>
              <Link 
                to="/projects" 
                className="inline-flex items-center gap-1 text-gray-800 hover:text-pink-dark hover:gap-2 transition-all duration-300"
              >
                View all projects <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-2/5 aspect-square rounded-full overflow-hidden">
              <img 
                src="/lovable-uploads/c88d1ba8-f9c4-4b31-8fbe-58ddfb5cf1ef.png" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-3/5">
              <h2 className="section-heading">About Me</h2>
              <p className="text-gray-700 mb-4">
                Born and raised with a passion for design and technology, I've dedicated over 5 years to refining
                seamless user experiences using tools like Figma and modern web technologies.
              </p>
              <p className="text-gray-700 mb-6">
                I specialize in translating client requirements into user-focused designs, effectively
                improving user experience through enhanced workflows and adaptable designs.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div>
                  <h3 className="font-medium text-lg mb-2">Design Skills</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>UI/UX Design</li>
                    <li>Wireframing</li>
                    <li>Prototyping</li>
                    <li>Design Systems</li>
                    <li>User Research</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Dev Skills</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>React & Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Frontend Architecture</li>
                    <li>Responsive Design</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <Link 
                  to="/about" 
                  className="inline-flex items-center gap-1 text-pink-dark hover:gap-2 transition-all"
                >
                  More about me <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-10">
            <h2 className="section-heading">Selected Projects</h2>
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-1 text-gray-800 hover:text-pink-dark hover:gap-2 transition-all"
            >
              View all <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
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
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-heading">Let's Connect</h2>
            
            <div className="mt-8 flex items-center justify-center mb-10">
              <div className="w-20 h-0.5 bg-pink-dark"></div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 mt-6 mb-12">
              <a href="mailto:hello@example.com" className="contact-item">
                <Mail size={20} /> hello@example.com
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-item">
                <Github size={20} /> github.com/username
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-item">
                <Linkedin size={20} /> linkedin.com/in/username
              </a>
            </div>

            <div className="mt-10 relative">
              <div className="absolute -top-20 -left-10 opacity-20 rotate-12">
                <img 
                  src="/lovable-uploads/e69f6b7c-721d-49f3-909d-8fec72834ea5.png" 
                  alt="Email decoration" 
                  className="w-20"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 opacity-20 -rotate-12">
                <img 
                  src="/lovable-uploads/e69f6b7c-721d-49f3-909d-8fec72834ea5.png" 
                  alt="Email decoration" 
                  className="w-20"
                />
              </div>
              
              <div className="relative bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-serif mb-6">
                  Just send an email
                </h3>
                <p className="mb-6">
                  I'd <span className="text-pink-dark">♥</span> to join your design team to build great products together.
                </p>
                <a 
                  href="mailto:hello@example.com" 
                  className="button-primary"
                >
                  Let's Connect
                </a>
              </div>
            </div>
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
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-pink-dark transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-dark transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-dark transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
