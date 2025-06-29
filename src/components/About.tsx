import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-light text-white">
                ОБО МНЕ
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Привет! Я Алена Думбадзе, ведущая, радиоведущая и тренер по публичным выступлениям. 
                  Рада вас видеть у себя на страничке.
                </p>
                <p>
                  Расскажу немного о том, что вы получаете на мероприятиях, если веду их я. 
                  Каждый гость будет чувствовать себя причастным к празднику и значимым на этом празднике. 
                  В конце мероприятия ваши гости будут одной большой и дружной семьёй, во всяком случае, 
                  я постараюсь все для этого сделать.
                </p>
                <p>
                  Будут эмоции, много! Посмеемся обязательно, но и трогательные моменты 
                  (если это юбилей или свадьба) точно будут. Я люблю и классику, и тематические вечеринки, 
                  с которыми всегда готова помочь.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/Аватарки, фото для всего/3L0A5317_1 (2).jpg"
                alt="Алена Думбадзе"
                className="w-full h-96 object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white"></div>
            </div>
          </div>
          
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-gray-400">лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400">мероприятий</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">8:30</div>
              <div className="text-gray-400">каждое утро на radiokult.ru</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;