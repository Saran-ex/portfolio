import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  isLive?: boolean;
  isInternal?: boolean;
}

const projects: Project[] = [
  {
    title: "Component Management System",
    description: "Developed a company-specific request system to manage machine and electric parts. Replaced paper-based logs with a digital flow — allowing employees to request components, and admins to approve and track usage. Monthly downloadable reports and department filters included.",
    tech: ["Next.js", "MongoDB", "Tailwind CSS", "TypeScript"],
    image: "https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg?auto=compress&cs=tinysrgb&w=800",
    isInternal: true
  },
  {
    title: "Neesh – Home Interior Website",
    description: "Live client website for a home interior design firm. Showcases their portfolio, client services, and contact options. Modern UI with responsive design deployed via Vercel.",
    tech: ["Next.js", "MongoDB", "Tailwind CSS", "Vercel"],
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    isLive: true
  }
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className={`grid md:grid-cols-2 gap-12 items-center mb-32 ${
      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    } transition-all duration-1000`}>
      {/* Image */}
      <div className={`${isEven ? 'md:order-1' : 'md:order-2'} group`}>
        <div className="relative overflow-hidden rounded-lg shadow-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>

      {/* Content */}
      <div className={`${isEven ? 'md:order-2' : 'md:order-1'} space-y-6`}>
        <div className="flex items-center space-x-3">
          <h3 className="text-3xl md:text-4xl font-bold font-serif">{project.title}</h3>
          {project.isLive && (
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Live</span>
          )}
          {project.isInternal && (
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Internal</span>
          )}
        </div>
        
        <p className="text-gray-700 leading-relaxed text-lg">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4 pt-4">
          <a 
            href="https://github.com/Saran-ex/ITS-ME" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            <Github className="w-4 h-4" />
            <span>GIT PROFILE</span>
          </a>
          
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } transition-all duration-1000`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 font-serif">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of projects that showcase my skills in web development and problem-solving
          </p>
        </div>

        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;