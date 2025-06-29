import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      text: 'Алена провела нашу свадьбу на высшем уровне! Все гости были в восторге.',
      author: 'Анна и Михаил'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
      text: 'Корпоратив прошел великолепно. Алена смогла объединить всю команду.',
      author: 'IT-компания "Инновации"'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      text: 'Курс "Говорить не страшно" изменил мою жизнь. Теперь выступаю с удовольствием!',
      author: 'Елена Петрова'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      text: 'Профессионализм и харизма Алены покорили всех участников тимбилдинга.',
      author: 'Банк "Развитие"'
    }
  ];

  return (
    <section className="section-padding bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">
              ОТЗЫВЫ
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Что говорят мои клиенты о работе со мной
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-900 p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 object-cover grayscale rounded-full"
                  />
                  <div className="flex-1">
                    <p className="text-gray-300 mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="text-white font-medium">
                      {testimonial.author}
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

export default Testimonials;