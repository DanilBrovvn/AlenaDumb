import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-xl text-white">
            Алена Думбадзе
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {['about', 'services', 'portfolio', 'course', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                {item === 'about' && 'Обо мне'}
                {item === 'services' && 'Услуги'}
                {item === 'portfolio' && 'Портфолио'}
                {item === 'course' && 'Курс'}
                {item === 'contact' && 'Контакты'}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-black border border-gray-800 rounded-lg mt-2 py-4">
            {['about', 'services', 'portfolio', 'course', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-2 text-white hover:bg-gray-900"
              >
                {item === 'about' && 'Обо мне'}
                {item === 'services' && 'Услуги'}
                {item === 'portfolio' && 'Портфолио'}
                {item === 'course' && 'Курс'}
                {item === 'contact' && 'Контакты'}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;