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
  title?: string;
  price?: string;
  oldPrice?: string;
}

const mainSlide = {
  id: 1,
  image: 'https://placehold.co/1200x600/1e3a8a/ffffff?text=PC+RAKITAN+READY',
};

const productSlides: SlideData[] = [
  {
    id: 2,
    image: 'https://placehold.co/600x600/1e3a8a/ffffff?text=Intel+Core+i7',
    title: 'Intel® Core™ i7 processor 14700',
    price: '6.775.000',
    oldPrice: '7.275.000'
  },
  {
    id: 3,
    image: 'https://placehold.co/600x600/1e3a8a/ffffff?text=RTX+4060',
    title: 'MSI RTX4060 VENTUS 2X',
    price: '5.340.000',
    oldPrice: '5.840.000'
  },
];

export default function HeroBanner() {
  return (
    <section className="w-full bg-gradient-to-b from-blue-950 to-blue-900 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Main Banner */}
          <div className="lg:col-span-2">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src={mainSlide.image}
                alt="PC Rakitan Ready"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex flex-col justify-between p-8">
                <div className="flex gap-4 text-white text-sm">
                  <span>GAMING</span>
                  <span>|</span>
                  <span>MULTIMEDIA</span>
                  <span>|</span>
                  <span>OFFICE</span>
                  <span>|</span>
                  <span>CONCEPT SCHOOL</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <img src="/images/agres-pc-logo.png" alt="Agres PC" className="h-8" />
                  </div>
                  <h2 className="text-5xl font-bold text-white">PC RAKITAN READY</h2>
                  <div className="flex flex-col gap-4">
                    <div className="bg-[#25D366] text-white w-fit px-4 py-2 rounded-full font-bold flex items-center gap-2 text-xl">
                      <span>0821 8080 9090</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="text-4xl font-bold text-white">START FROM</span>
                      <span className="text-6xl font-bold text-white">2JT-AN</span>
                    </div>
                  </div>
                </div>
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
                  <div className="bg-gradient-to-r from-blue-900 to-black rounded-2xl overflow-hidden p-4 h-[192px] relative group hover:scale-[1.02] transition-transform">
                    <div className="flex h-full gap-4">
                      <div className="relative w-1/2">
                        <Image
                          src={slide.image}
                          alt={slide.title || ''}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="w-1/2 flex flex-col justify-between">
                        <div>
                          <h3 className="text-white font-bold text-lg leading-tight">{slide.title}</h3>
                          {slide.oldPrice && (
                            <span className="text-gray-400 line-through text-sm">Rp {slide.oldPrice}</span>
                          )}
                        </div>
                        {slide.price && (
                          <div className="space-y-1">
                            <div className="bg-yellow-400 text-black text-xs px-2 py-0.5 rounded-full w-fit">
                              Save 500K
                            </div>
                            <div className="flex items-baseline gap-1">
                              <span className="text-yellow-400 font-bold">Rp</span>
                              <span className="text-yellow-400 text-xl font-bold">{slide.price}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
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
