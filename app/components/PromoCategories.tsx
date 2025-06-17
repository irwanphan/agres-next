import Image from "next/image";

export default function PromoCategories() {
  return (
    <section className="container grid grid-cols-4 w-full mb-4 gap-2 overflow-x-auto">
      <div className="bg-white shadow rounded-xl overflow-hidden text-center">
        <Image src="/images/promo-categories/banner4-1.png" alt="PC Rakitan Ready" width={100} height={100} className="w-full" />
      </div>
      <div className="bg-white shadow rounded-xl overflow-hidden text-center">
        <Image src="/images/promo-categories/banner4-2.png" alt="PC AIO" width={100} height={100} className="w-full" />
      </div>
      <div className="bg-white shadow rounded-xl overflow-hidden text-center">
        <Image src="/images/promo-categories/banner4-3.png" alt="PC Brand" width={100} height={100} className="w-full" />
      </div>
      <div className="bg-white shadow rounded-xl overflow-hidden text-center">
        <Image src="/images/promo-categories/banner4-4.png" alt="Processor" width={100} height={100} className="w-full" />
      </div>
      {/* ... */}
    </section>
  );
}
