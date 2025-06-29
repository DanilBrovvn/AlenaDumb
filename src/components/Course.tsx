import React from 'react';

const Course = () => {
  return (
    <section id="course" className="section-padding bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-light text-white">
                КУРС
                <br />
                <span className="font-bold">"ГОВОРИТЬ НЕ СТРАШНО"</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Ну, а раз в три месяца провожу курс по публичным выступлениям и ораторскому мастерству 
                  "Говорить не страшно".
                </p>
                <p>
                  На radiokult.ru ежедневно веду рубрику о красивой речи. 8:30 каждое утро.
                </p>
                <p>
                  Курс поможет вам преодолеть страх публичных выступлений, научиться говорить уверенно 
                  и убедительно, работать с голосом и телом.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white"></div>
                  <span className="text-gray-300">Преодоление страха выступлений</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white"></div>
                  <span className="text-gray-300">Работа с голосом и дикцией</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white"></div>
                  <span className="text-gray-300">Язык тела и жестикуляция</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white"></div>
                  <span className="text-gray-300">Структура убедительной речи</span>
                </div>
              </div>
              
              <button className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300">
                ЗАПИСАТЬСЯ НА КУРС
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                  alt="Курс Говорить не страшно"
                  className="w-full h-64 object-cover grayscale"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
              
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg"
                  alt="Обучение ораторскому мастерству"
                  className="w-full h-48 object-cover grayscale"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Course;