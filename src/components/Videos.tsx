import React from 'react';

const Videos = () => {
  const videoCategories = [
    {
      title: 'СВАДЬБЫ',
      videos: [
        { id: 1, title: 'Свадебная церемония', thumbnail: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg' },
        { id: 2, title: 'Выездная регистрация', thumbnail: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg' }
      ]
    },
    {
      title: 'КОРПОРАТИВ',
      videos: [
        { id: 3, title: 'Новогодний корпоратив', thumbnail: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg' },
        { id: 4, title: 'День рождения компании', thumbnail: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg' }
      ]
    },
    {
      title: 'ТИМБИЛДИНГ',
      videos: [
        { id: 5, title: 'Активности на природе', thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg' },
        { id: 6, title: 'Интеллектуальные игры', thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg' }
      ]
    },
    {
      title: 'ОБУЧЕНИЕ',
      videos: [
        { id: 7, title: 'Мастер-класс по ораторскому мастерству', thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg' },
        { id: 8, title: 'Курс "Говорить не страшно"', thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg' }
      ]
    }
  ];

  return (
    <section className="section-padding bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">
              ВИДЕО
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Посмотрите, как проходят мои мероприятия. Эмоции, смех и незабываемые моменты.
            </p>
          </div>
          
          <div className="space-y-12">
            {videoCategories.map((category, index) => (
              <div key={index}>
                <h3 className="text-2xl font-light mb-6 text-center text-white">{category.title}</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {category.videos.map((video) => (
                    <div key={video.id} className="group cursor-pointer hover-scale">
                      <div className="relative overflow-hidden">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h4 className="font-medium">{video.title}</h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;