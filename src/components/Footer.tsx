import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="font-bold text-xl text-white">Алена Думбадзе</div>
              <div className="text-gray-400 text-sm">Ведущая • Радиоведущая • Тренер</div>
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-400">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-white transition-colors duration-300"
              >
                Обо мне
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-white transition-colors duration-300"
              >
                Услуги
              </button>
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-white transition-colors duration-300"
              >
                Портфолио
              </button>
              <button 
                onClick={() => document.getElementById('course')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-white transition-colors duration-300"
              >
                Курс
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-white transition-colors duration-300"
              >
                Контакты
              </button>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            © 2024 Алена Думбадзе. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;