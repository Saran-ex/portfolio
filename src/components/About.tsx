import React from 'react';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className={`transition-all duration-1000 ${
            inView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-serif">
              About <span className="text-blue-600">Me</span>
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                Hi, I'm <strong>Saran P</strong>.
              </p>
              <p>
                Final-year AI & DS student with a passion for building real-world web solutions. 
                I've developed live websites for clients and created internal company systems 
                that solve real problems.
              </p>
              <p>
                I believe in creating simple, powerful tools through thoughtful design and development. 
                My approach combines technical expertise with user-centered thinking to deliver 
                solutions that make a difference.
              </p>
            </div>
            
            {/* Git-style commit info */}
            <div className="mt-8 p-4 bg-gray-100 rounded-lg font-mono text-sm">
              <div className="flex items-center space-x-2 text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Latest commit: Developing innovative solutions</span>
              </div>
              <div className="mt-2 text-gray-500">
                <span>Status:</span> <span className="text-green-600">Active Development</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className={`transition-all duration-1000 delay-300 ${
            inView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="relative">
              {/* Code-style visual */}
              <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-2">
                  <div><span className="text-blue-400">const</span> <span className="text-white">developer</span> = {`{`}</div>
                  <div className="ml-4"><span className="text-orange-400">name:</span> <span className="text-green-300">"Saran P"</span>,</div>
                  <div className="ml-4"><span className="text-orange-400">role:</span> <span className="text-green-300">"Full Stack Developer"</span>,</div>
                  <div className="ml-4"><span className="text-orange-400">focus:</span> <span className="text-green-300">"AI & Data Science"</span>,</div>
                  <div className="ml-4"><span className="text-orange-400">passion:</span> <span className="text-green-300">"Problem Solving"</span></div>
                  <div>{`};`}</div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-gray-300 rounded-full animate-float-delay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;