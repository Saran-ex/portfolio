import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with diagonal slice effect */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Architecture"
          className="w-full h-full object-cover grayscale"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        
        {/* Diagonal slice overlay */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-black transform skew-x-12 origin-top-right opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-black transform -skew-y-12 opacity-40"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <div className="overflow-hidden">
          <h1 className="text-8xl md:text-9xl font-bold mb-4 font-serif animate-slide-up">
            SARAN
          </h1>
        </div>
        
        {/* Animated overlay text */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl md:text-7xl font-bold text-blue-400 opacity-20 animate-float">
              FILO
            </span>
          </div>
        </div>

        <div className="space-y-4 animate-fade-in-delay">
          <p className="text-xl md:text-2xl font-light">
            AI & DS Final Year Student | Web Developer
          </p>
          <p className="text-sm md:text-base text-gray-300">
            Passionate about building innovative solutions and exploring the world of technology.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;