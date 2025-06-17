'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

export type ProductSectionProps = {
  title: string;
  children?: React.ReactNode;
};

const placeholderProducts = Array.from({ length: 8 });

export default function ProductSection({ title, children }: ProductSectionProps) {
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
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={16}
        slidesPerView={2}
        navigation
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={productItems.length > 5}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 }
        }}
        className="pb-8"
      >
        {React.Children.map(productItems, (item, idx) => (
          <SwiperSlide key={idx}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
