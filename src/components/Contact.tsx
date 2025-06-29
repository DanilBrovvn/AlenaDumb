import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">
              КОНТАКТЫ
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Готова обсудить ваше мероприятие или ответить на вопросы о курсах
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-light mb-6 text-white">Свяжитесь со мной</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-6 h-6 border border-gray-600 flex items-center justify-center">
                      <span className="text-xs text-gray-400">@</span>
                    </div>
                    <span className="text-gray-300">alena@example.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-6 h-6 border border-gray-600 flex items-center justify-center">
                      <span className="text-xs text-gray-400">📱</span>
                    </div>
                    <span className="text-gray-300">+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-6 h-6 border border-gray-600 flex items-center justify-center">
                      <span className="text-xs text-gray-400">📻</span>
                    </div>
                    <span className="text-gray-300">radiokult.ru - каждое утро в 8:30</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-light mb-6 text-white">Социальные сети</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                    <span className="text-sm text-gray-300 hover:text-black">IG</span>
                  </a>
                  <a href="#" className="w-12 h-12 border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                    <span className="text-sm text-gray-300 hover:text-black">TG</span>
                  </a>
                  <a href="#" className="w-12 h-12 border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                    <span className="text-sm text-gray-300 hover:text-black">VK</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full p-4 bg-black border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-4 bg-black border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors duration-300"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="w-full p-4 bg-black border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors duration-300"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Расскажите о вашем мероприятии"
                    className="w-full p-4 bg-black border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors duration-300 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  ОТПРАВИТЬ СООБЩЕНИЕ
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;