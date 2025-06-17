'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import ProductCard from './ProductCard';

export type ProductSectionProps = {
  title: string;
  children?: React.ReactNode;
};

const placeholderProducts = Array.from({ length: 8 });

export default function ProductSection({ title, children }: ProductSectionProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  // Pastikan productItems selalu array
  const productItems = children ? React.Children.toArray(children) : placeholderProducts.map((_, i) => (
    <div key={i} className="bg-white flex flex-col items-center rounded-xl shadow p-4 mx-1">
      <div className="w-24 h-24 bg-gray-200 mb-2 rounded" />
      <div className="font-semibold text-center">Nama Produk</div>
      <div className="text-red-600 font-bold">RpX.XXX.XXX</div>
      <button className="mt-2 bg-green-500 text-white px-3 py-1 rounded">Lihat Detail</button>
    </div>
  ));

  return (
    <section className="container mx-auto py-6 bg-white rounded-xl shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="flex w-full justify-between relative top-36 z-10">
        <button
          aria-label="Previous"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-700 transition shadow"
          onClick={() => swiperRef.current?.slidePrev()}
          type="button"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button
          aria-label="Next"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-700 transition shadow"
          onClick={() => swiperRef.current?.slideNext()}
          type="button"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={16}
        slidesPerView={2}
        onSwiper={swiper => (swiperRef.current = swiper)}
        navigation={false}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={productItems.length > 5}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 }
        }}
        className="pb-8"
      >
        {children
          ? React.Children.toArray(children).map((child, idx) => (
              <SwiperSlide key={idx}>{child}</SwiperSlide>
            ))
          : placeholderProducts.map((_, idx) => (
              <SwiperSlide key={idx}>
                <ProductCard
                  name="Nama Produk"
                  image="/images/placeholder.png"
                  price="X.XXX.XXX"
                />
              </SwiperSlide>
            ))}
      </Swiper>
    </section>
  );
}
