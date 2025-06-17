import HeroBanner from './components/HeroBanner';
import PromoCategories from './components/PromoCategories';
import NewProductsSection from './components/NewProductsSection';
import ProductSection from './components/ProductSection';
import BrandsSection from './components/BrandsSection';
import LastChanceSection from './components/LastChanceSection';

const dummyProducts = [

  {
    id: 1,
    name: "ASUS TUF B660M",
    image: "/images/products/tuf-b660m.png",
    price: "2.150.000"
  }
];

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <HeroBanner />
      <PromoCategories />
      <NewProductsSection products={dummyProducts} />
      <BrandsSection />
      <LastChanceSection />
      <ProductSection title="PC Rakitan Ready" />
      <ProductSection title="Komponen PC" />
      <ProductSection title="Monitor" />
      <ProductSection title="Supplies / Printer" />
      <ProductSection title="Aksesoris Komputer" />
    </div>
  );
}
