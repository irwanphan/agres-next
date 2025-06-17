import React from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

interface ProductCardProps {
  name: string;
  image: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  waLink?: string;
  onDetail?: () => void;
}

export default function ProductCard({
  name,
  image,
  price,
  oldPrice,
  discount,
  waLink = '#',
  onDetail
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow p-4 flex flex-col items-center w-full max-w-xs mx-auto">
      <div className="relative w-full h-40 mb-4 flex items-center justify-center">
        <Image src={image} alt={name} fill className="object-contain" />
      </div>
      <div className="text-center mb-4">
        <div className="font-semibold text-gray-800 text-base mb-2 min-h-[48px] flex items-center justify-center">{name}</div>
        <hr className="my-2 border-gray-300" />
        <div className="text-lg font-bold text-red-600 mb-1">Rp {price}</div>
        {oldPrice && (
          <div className="text-base">
            <span className="line-through text-gray-500 mr-1">Rp{oldPrice}</span>
            {discount && <span className="text-red-500">(hemat: {discount})</span>}
          </div>
        )}
      </div>
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-5 h-5 rounded-full bg-green-400 hover:bg-green-500 mb-4 shadow transition"
      >
        <FaWhatsapp className="w-5 h-5 text-white" />
      </a>
      <button
        className="w-full border-1 border-red-500 text-grey-600 text-xs font-bold py-2 rounded-xl hover:bg-red-50 transition"
        onClick={onDetail}
      >
        VIEW DETAIL
      </button>
    </div>
  );
} 