import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'СВАДЬБЫ',
      description: 'Создаю атмосферу любви и радости, делаю каждый момент незабываемым',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg'
    },
    {
      title: 'КОРПОРАТИВЫ',
      description: 'Профессиональное ведение корпоративных мероприятий любого масштаба',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg'
    },
    {
      title: 'ТИМБИЛДИНГ',
      description: 'Сплочение команды через интерактивные игры и активности',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
    },
    {
      title: 'ОБУЧЕНИЕ',
      description: 'Курсы по ораторскому мастерству и публичным выступлениям',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg'
    }
  ];

  return (
    <section id="services" className="section-padding bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">
              МОИ УСЛУГИ
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Могу, умею, практикую: свадьбы, юбилеи, девичники, гендер-пати, 
              выездные церемонии, тимбилдинг, городские мероприятия.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-40 transition-all duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;