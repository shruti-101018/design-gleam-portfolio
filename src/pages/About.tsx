
import { Camera, Code, FileCode, Layout, Lightbulb, PaintBucket, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';

const About = () => {
  const experiences = [
    {
      period: '2021 - Present',
      role: 'Senior UI/UX Designer',
      company: 'DesignCraft Studio',
      description: 'Leading design initiatives for web and mobile applications, collaborating with development teams, and creating design systems.'
    },
    {
      period: '2019 - 2021',
      role: 'UI Developer',
      company: 'TechForward',
      description: 'Implemented responsive interfaces using React and modern CSS frameworks, working closely with designers to ensure pixel-perfect implementation.'
    },
    {
      period: '2018 - 2019',
      role: 'UX Designer',
      company: 'Innovation Labs',
      description: 'Conducted user research, created wireframes and prototypes, and worked on improving user flows for various digital products.'
    }
  ];

  const services = [
    {
      icon: <Layout />,
      title: 'UI Design',
      description: 'Creating visually appealing interfaces that align with brand guidelines and user expectations.'
    },
    {
      icon: <Users />,
      title: 'UX Research',
      description: 'Conducting user research to gather insights that inform design decisions and product strategy.'
    },
    {
      icon: <Code />,
      title: 'Frontend Development',
      description: 'Building responsive, accessible, and performant web applications using modern technologies.'
    },
    {
      icon: <PaintBucket />,
      title: 'Design Systems',
      description: 'Creating comprehensive design systems that ensure consistency across products and platforms.'
    },
    {
      icon: <FileCode />,
      title: 'Prototyping',
      description: 'Developing interactive prototypes to test ideas and validate design concepts early in the process.'
    },
    {
      icon: <Lightbulb />,
      title: 'Creative Direction',
      description: 'Providing strategic guidance for visual identity and design language across projects.'
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <h1 className="opacity-0 animate-fade-up-delay-1 text-4xl md:text-5xl font-serif font-bold">
            About Me
          </h1>
          <div className="w-20 h-1 bg-pink-dark mt-4 mb-8 opacity-0 animate-fade-up-delay-2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            <div className="opacity-0 animate-fade-up-delay-2">
              <h2 className="text-2xl font-serif mb-4">My Story</h2>
              <p className="text-gray-700 mb-4">
                I began my journey in design and development over 5 years ago, driven by a passion for creating digital experiences that are both beautiful and functional.
              </p>
              <p className="text-gray-700 mb-4">
                With a background in both design and development, I bring a unique perspective to projects, 
                understanding both the creative and technical aspects of digital product creation.
              </p>
              <p className="text-gray-700">
                I believe in a user-centered approach to design, focusing on creating solutions that not only look good but also solve real problems for users.
              </p>
            </div>
            
            <div className="opacity-0 animate-fade-up-delay-3">
              <div className="h-full bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-serif mb-6">Design Philosophy</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-pink-light rounded-lg text-pink-dark">
                      <Users size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">User-Centered</h3>
                      <p className="text-gray-600 text-sm">Putting user needs at the heart of every design decision</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-mint-light rounded-lg text-mint-dark">
                      <Lightbulb size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">Purposeful Simplicity</h3>
                      <p className="text-gray-600 text-sm">Creating intuitive interfaces through thoughtful simplification</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-lavender-light rounded-lg text-lavender-dark">
                      <Camera size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">Attention to Detail</h3>
                      <p className="text-gray-600 text-sm">Focusing on the small details that elevate the overall experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="section-heading text-center mb-16">Experience</h2>
          
          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="mb-12 relative opacity-0"
                style={{ 
                  animation: `fade-up 0.6s ease-out ${index * 0.1 + 0.2}s forwards`,
                  paddingLeft: '2rem'
                }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-pink-dark"></div>
                
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-1.5 top-4 w-0.5 h-full bg-gray-200"></div>
                )}
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <span className="text-sm font-medium text-pink-dark">{exp.period}</span>
                  <h3 className="text-xl font-semibold mt-1">{exp.role}</h3>
                  <p className="text-gray-600 font-medium">{exp.company}</p>
                  <p className="mt-2 text-gray-700">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="section-heading text-center mb-16">Services I Offer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-100 opacity-0"
                style={{ 
                  animation: `fade-up 0.6s ease-out ${index * 0.1}s forwards` 
                }}
              >
                <div className="mb-4 text-pink-dark">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
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

export default About;
