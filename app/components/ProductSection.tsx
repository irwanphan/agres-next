type ProductSectionProps = {
  title: string;
  children?: React.ReactNode;
};

export default function ProductSection({ title, children }: ProductSectionProps) {
  return (
    <section className="container mx-auto py-6">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {/* Placeholder produk */}
        {[...Array(5)].map((_, i) => (
          <div key={i} className="bg-white shadow rounded p-4 flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-200 mb-2" />
            <div className="font-semibold text-center">Nama Produk</div>
            <div className="text-red-600 font-bold">RpX.XXX.XXX</div>
            <button className="mt-2 bg-green-500 text-white px-3 py-1 rounded">Lihat Detail</button>
          </div>
        ))}
        {children}
      </div>
    </section>
  );
}
