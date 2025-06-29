import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
          alt="Алена Думбадзе"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-light mb-6 text-shadow">
          АЛЕНА
          <br />
          <span className="font-bold">ДУМБАДЗЕ</span>
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 text-gray-300 text-shadow">
          ВЕДУЩАЯ • РАДИОВЕДУЩАЯ • ТРЕНЕР ПО ПУБЛИЧНЫМ ВЫСТУПЛЕНИЯМ
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            СВЯЗАТЬСЯ СО МНОЙ
          </button>
          <button 
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-white text-black hover:bg-gray-200 transition-all duration-300"
          >
            ПОРТФОЛИО
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;