import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Hero = ({ banners }) => {
  return (
    <section className="relative bg-[url('/assets/background.png')] bg-cover py-8 md:py-16">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-custom',
          renderBullet: (index, className) =>
            `<span class="${className} bg-[#7AA65A] w-4 h-4 rounded-full mx-1"></span>`,
        }}
        className="w-full max-w-screen-xl mx-auto"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row md:items-center justify-between">
              <div className="text-center md:text-left md:w-1/2 px-4 order-2 md:order-1 mt-8 md:mt-0">
                <h1 className="text-3xl md:text-5xl text-[#7AA65A] leading-tight mb-4">
                  {banner.title}
                </h1>
                <p className="text-lg md:text-xl text-[#7AA65A] mb-8 hidden-phone">
                  Nunc porttitor tortor metus, nec sagittis lectus accumsan
                  quis. Aenean euismod mollis tempor.
                </p>
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 hero-flex-box">
                  <button className="w-[227px] bg-[#7AA65A] text-white px-6 py-3 rounded-lg hover:bg-[#4B7A44] flex items-center justify-center md:justify-start">
                    SHOP NOW
                    <FaArrowRight className="ml-12" />
                  </button>
                  <button className="w-[227px] bg-transparent text-[#7AA65A] border border-[#7AA65A] px-6 py-3 rounded-lg hover:bg-green-100 flex items-center justify-center md:justify-start">
                    TAKE THE QUIZ
                    <FaArrowRight className="ml-6" />
                  </button>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center md:justify-end px-4 order-1 md:order-2">
                <div className="relative w-[300px] h-[350px] md:w-[400px] md:h-[500px]">
                  <Image
                    src={banner.images.edges[0]?.node.originalSrc}
                    alt={banner.title}
                    fill
                    priority
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="pagination-button">
          <div className="phone-relative swiper-button-prev-custom absolute left-8 bottom-8 md:bottom-1 z-10">
            <button className="bg-transparent text-[#7AA65A] border border-[#7AA65A] px-2 py-1 rounded-[15px] hover:bg-[#4B7A44] hover:text-white flex items-center justify-center md:justify-start">
              <FaArrowLeft />
            </button>
          </div>
          <div className="phone-relative swiper-button-next-custom absolute left-20 bottom-8 md:bottom-1 z-10">
            <button className="bg-transparent text-[#7AA65A] border border-[#7AA65A] px-2 py-1 rounded-[15px] hover:bg-[#4B7A44] hover:text-white flex items-center justify-center md:justify-start">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default Hero;
