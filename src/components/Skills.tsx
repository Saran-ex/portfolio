import React from 'react';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  logo: string;
  category: string;
}

const skills: Skill[] = [
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'Languages' },
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'Languages' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'Languages' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'Languages' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', category: 'Frameworks' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'Frameworks' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'Databases' },
  { name: 'Supabase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg', category: 'Databases' },
  { name: 'Appwrite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/appwrite/appwrite-original.svg', category: 'Backend' },
  { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'Tools' },
  { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', category: 'Tools' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'Runtime' },
];

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="text-center">
        <div className="mb-4 group-hover:scale-110 transition-transform duration-200 flex justify-center">
          <img 
            src={skill.logo} 
            alt={skill.name}
            className="w-12 h-12 object-contain"
          />
        </div>
        <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
        <p className="text-sm text-gray-500">{skill.category}</p>
      </div>
      
      {/* Progress bar effect */}
      <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-500 rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: inView ? `${85 + Math.random() * 15}%` : '0%',
            transitionDelay: `${index * 100 + 500}ms`
          }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } transition-all duration-1000`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 font-serif">
            Technical <span className="text-blue-600">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Git-style commit visualization */}
        <div className={`mt-16 p-6 bg-gray-900 rounded-lg font-mono text-sm ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } transition-all duration-1000 delay-500`}>
          <div className="text-green-400 mb-4">
            <span className="text-gray-500">$</span> git log --oneline --graph
          </div>
          <div className="space-y-2 text-gray-300">
            <div className="flex items-center space-x-2">
              <span className="text-yellow-400">*</span>
              <span className="text-blue-400">a7f8d92</span>
              <span>Added advanced TypeScript skills</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-400">*</span>
              <span className="text-blue-400">3e4b1c8</span>
              <span>Implemented Next.js projects</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-400">*</span>
              <span className="text-blue-400">9d2a5f1</span>
              <span>Mastered MongoDB operations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;