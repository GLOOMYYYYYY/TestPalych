import React from 'react';
import videoImage from '../assets/video.png';

const HeroSection = () => {
  return (
    <section className="w-full py-16 px-4 bg-black">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        {/* Левая часть: Текст с фоном на мобильной версии */}
        <div className="relative w-full pl-[20%] md:pl-0">
          {/* Фон КАРТИНКА: появляется только на мобилке */}
          <div className="block md:hidden absolute top-0 left-0 w-full h-full -z-10">
            <img
              src={videoImage}
              alt="Mobile Background"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Текст: поверх фонового изображения */}
          <div className="relative z-10">
            <h1 className="text-left text-6xl font-normal text-white leading-tight mb-2">THE</h1>
            <h1 className="text-right text-6xl font-normal text-white leading-tight mb-2 pr-10 break-words whitespace-normal">
              PYTH <wbr />AI
            </h1>
            <h1 className="text-left text-6xl font-normal text-gray-400 leading-tight">HOODIE</h1>
          </div>
        </div>

        {/* Правая часть: описание, кнопка и ссылки */}
        <div>
          <h2 className="text-2xl text-white font-normal mb-3">
            Ancient Wisdom <br /> For Modern Times.
          </h2>
          <p className="text-[#999] text-sm max-w-sm mb-6">
            In Ancient Greece the population would <br />
            seek advice from the Delphic Oracle, Pythia.
          </p>
          <a href="/product">
            <button className="border border-white text-white rounded-full py-3 px-6 hover:bg-white hover:text-black transition-colors">
              Buy Now
            </button>
          </a>
          <div className="mt-6 flex items-center space-x-6 text-white text-sm">
            <div className="flex items-center space-x-2 ml-3">
              <span className="text-xl inline-block" style={{ transform: 'scaleX(2)' }}>
                →
              </span>
            </div>
            <div>
              <span className="p-4">
                <a href="#message">MESSAGE</a>
              </span>
              <span className="p-4">
                <a href="#statement">STATEMENT</a>
              </span>
              <span className="p-4">
                <a href="#nft">NFT</a>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Видео снизу (на всех экранах) */}
      <div className="max-w-[1240px] mx-auto mt-10">
        <img
          src={videoImage}
          alt="Promo Documentary"
          className="w-full h-auto"
        />
        <div className="text-left text-gray-200 mt-2">
          <h4 className="text-sm font-light">PYTH AI</h4>
          <p className="text-xs text-gray-400">Promo Documentary</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
