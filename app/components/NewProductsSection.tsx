import React from "react";
import Image from "next/image";

export interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  oldPrice?: string;
}

interface NewProductsSectionProps {
  products: Product[];
}

const dummyProducts: Product[] = [
  {
    id: 1,
    name: "Intel Core i7 14700",
    image: "/images/products/intel-i7.png",
    price: "6.775.000",
    oldPrice: "7.275.000"
  },
  {
    id: 2,
    name: "MSI RTX4060 VENTUS 2X",
    image: "/images/products/rtx4060.png",
    price: "5.340.000",
    oldPrice: "5.840.000"
  },
  {
    id: 3,
    name: "Team Vulcan Z SSD",
    image: "/images/products/vulcan-ssd.png",
    price: "285.000",
    oldPrice: "325.000"
  },
  {
    id: 4,
    name: "ASUS TUF B660M",
    image: "/images/products/tuf-b660m.png",
    price: "2.150.000"
  }
];

export default function NewProductsSection({ products = dummyProducts }: NewProductsSectionProps) {
  return (
    <section className="w-full py-4 bg-pink-600 rounded-xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-6">
          <Image src="/images/produk-terbaru.png" alt="Produk Terbaru" width={350} height={100} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center">
              <div className="relative w-full h-40 mb-2">
                <Image src={product.image} alt={product.name} fill className="object-contain" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-gray-800 text-base mb-1 line-clamp-2">{product.name}</h3>
                {product.oldPrice && (
                  <div className="text-xs text-gray-400 line-through">Rp {product.oldPrice}</div>
                )}
                <div className="text-lg font-bold text-yellow-500">Rp {product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 