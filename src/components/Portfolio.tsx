import React, { useState } from 'react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'ВСЕ' },
    { id: 'wedding', name: 'СВАДЬБЫ' },
    { id: 'corporate', name: 'КОРПОРАТИВ' },
    { id: 'teambuilding', name: 'ТИМБИЛДИНГ' },
    { id: 'education', name: 'ОБУЧЕНИЕ' }
  ];

  const portfolioItems = [
    {
      id: 1,
      category: 'wedding',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
      title: 'Свадьба Анны и Михаила'
    },
    {
      id: 2,
      category: 'corporate',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg',
      title: 'Корпоратив IT-компании'
    },
    {
      id: 3,
      category: 'teambuilding',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      title: 'Тимбилдинг для банка'
    },
    {
      id: 4,
      category: 'education',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      title: 'Мастер-класс по ораторскому мастерству'
    },
    {
      id: 5,
      category: 'wedding',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
      title: 'Выездная церемония'
    },
    {
      id: 6,
      category: 'corporate',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg',
      title: 'Юбилей компании'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">
              ПОРТФОЛИО
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              За моими плечами гавайские, советские, гангстерские, самые разные тематики. 
              Я учитываю ваши пожелания, шучу тактично, танцую вместе с вами.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 border transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-white text-black border-white'
                      : 'bg-transparent text-white border-gray-600 hover:bg-white hover:text-black hover:border-white'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="group cursor-pointer hover-scale">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg font-bold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;