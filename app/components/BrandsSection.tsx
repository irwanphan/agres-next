export default function BrandsSection() {
  return (
    <section className="container mx-auto py-4">
      <h4 className="font-bold mb-2">Featured Brands</h4>
      <div className="flex gap-4 overflow-x-auto">
        {/* Ganti dengan logo brand asli */}
        {[...Array(10)].map((_, i) => (
          <div key={i} className="w-20 h-10 bg-gray-200 rounded flex items-center justify-center">Brand</div>
        ))}
      </div>
    </section>
  );
}
