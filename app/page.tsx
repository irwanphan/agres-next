import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import PromoCategories from './components/PromoCategories';
import ProductSection from './components/ProductSection';
import BrandsSection from './components/BrandsSection';
import LastChanceSection from './components/LastChanceSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <HeroBanner />
      <PromoCategories />
      <ProductSection title="Produk Terbaru" />
      <BrandsSection />
      <LastChanceSection />
      <ProductSection title="PC Rakitan Ready" />
      <ProductSection title="Komponen PC" />
      <ProductSection title="Monitor" />
      <ProductSection title="Supplies / Printer" />
      <ProductSection title="Aksesoris Komputer" />
      <Footer />
    </div>
  );
}
