import React from 'react';

const Videos = () => {
  const videoCategories = [
    {
      title: 'СВАДЬБЫ',
      videos: [
        { id: 1, title: 'Свадебная церемония', thumbnail: '/Свадьба/DSC_2232 (1).JPG' },
        { id: 2, title: 'Выездная регистрация', thumbnail: '/Свадьба/1109.jpg' },
        { id: 3, title: 'Свадебный банкет', thumbnail: '/Свадьба/1939.jpg' },
        { id: 4, title: 'Свадебные танцы', thumbnail: '/Свадьба/_-753.jpg' }
      ]
    },
    {
      title: 'КОРПОРАТИВ',
      videos: [
        { id: 5, title: 'Новогодний корпоратив', thumbnail: '/Аватарки, фото для всего/150 (1).jpg' },
        { id: 6, title: 'День рождения компании', thumbnail: '/Аватарки, фото для всего/011.jpg' },
        { id: 7, title: 'Корпоративная вечеринка', thumbnail: '/Аватарки, фото для всего/IMG_20230104_005252.jpg' }
      ]
    },
    {
      title: 'ТИМБИЛДИНГ',
      videos: [
        { id: 8, title: 'Кулинарный мастер-класс', video: '/Тимбилдинг/Кулинарный.mp4', thumbnail: '/Тимбилдинг/IMG_4949.jpeg' },
        { id: 9, title: 'Командные игры', thumbnail: '/Тимбилдинг/04.06.2023-1175.jpg' },
        { id: 10, title: 'Активности на природе', thumbnail: '/Тимбилдинг/04.06.2023-1745.jpg' }
      ]
    },
    {
      title: 'ОБУЧЕНИЕ',
      videos: [
        { id: 11, title: 'Мастер-класс по ораторскому мастерству', thumbnail: '/Аватарки, фото для всего/DSC_2066.JPG' },
        { id: 12, title: 'Курс "Говорить не страшно"', thumbnail: '/Аватарки, фото для всего/SH405397_resized (1).jpg' },
        { id: 13, title: 'Обучение публичным выступлениям', thumbnail: '/Аватарки, фото для всего/3L0A5183.jpg' }
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
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.videos.map((video) => (
                    <div key={video.id} className="group cursor-pointer hover-scale">
                      <div className="relative overflow-hidden">
                        {video.video ? (
                          <video
                            src={video.video}
                            poster={video.thumbnail}
                            className="w-full h-64 object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                            controls
                          />
                        ) : (
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-64 object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                          />
                        )}
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