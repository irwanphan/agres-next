'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// Register Swiper modules
import { register } from 'swiper/element/bundle';
register();

interface SlideData {
  id: number;
  image: string;
}

const mainSlide = {
  id: 1,
  image: '/images/hero-slider-main/slide1-1.png',
};

const productSlides: SlideData[] = [
  {
    id: 1,
    image: 'https://placehold.co/800x800/1e3a8a/ffffff?text=Intel+Core+i7',
  },
  {
    id: 2,
    image: 'https://placehold.co/800x800/1e3a8a/ffffff?text=RTX+4060',
  },
  {
    id: 3,
    image: 'https://placehold.co/800x800/1e3a8a/ffffff?text=Product+3',
  },
];

export default function HeroBanner() {
  return (
    <section className="w-full">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 mb-2">
          {/* Main Banner */}
          <div className="lg:col-span-3">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src={mainSlide.image}
                alt="slide alt, change later"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 
                flex flex-col justify-between p-8">
              </div>
            </div>
          </div>

          {/* Product Slides */}
          <div className="lg:col-span-1">
            <Swiper
              modules={[Navigation, Autoplay]}
              direction="vertical"
              spaceBetween={16}
              slidesPerView={2}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="h-[400px]"
            >
              {productSlides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="relative w-full h-[192px] rounded-2xl overflow-hidden">
                    <Image
                      src={slide.image}
                      alt="Product"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
