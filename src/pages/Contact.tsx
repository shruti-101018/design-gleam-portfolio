
import { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <h1 className="opacity-0 animate-fade-up-delay-1 text-4xl md:text-5xl font-serif font-bold text-center">
            Let's Connect
          </h1>
          <div className="w-20 h-1 bg-pink-dark mt-4 mb-8 mx-auto opacity-0 animate-fade-up-delay-2"></div>
          <p className="text-xl text-gray-600 max-w-xl mx-auto text-center opacity-0 animate-fade-up-delay-3">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1 opacity-0 animate-fade-up-delay-1">
              <div className="bg-gray-50 p-8 rounded-xl h-full">
                <h2 className="text-2xl font-serif mb-6">Contact Information</h2>
                
                <div className="space-y-6 mt-8">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-lavender-light rounded-lg text-lavender-dark">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-600">hello@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-pink-light rounded-lg text-pink-dark">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-600">+1 (123) 456-7890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-mint-light rounded-lg text-mint-dark">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-gray-600">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="font-medium mb-4">Connect with me</h3>
                  <div className="flex gap-4">
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-full hover:bg-black hover:text-white transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-full hover:bg-[#0077B5] hover:text-white transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href="mailto:hello@example.com"
                      className="p-2 bg-gray-100 rounded-full hover:bg-pink-dark hover:text-white transition-colors"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2 opacity-0 animate-fade-up-delay-2">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-serif mb-6">Send Me a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can I help you?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Your message here..."
                      className="resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-black hover:bg-gray-800 text-white py-6 px-8 rounded-full w-full md:w-auto flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={16} />
                  </Button>
                </form>
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
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
