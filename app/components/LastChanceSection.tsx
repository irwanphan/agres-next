export default function LastChanceSection() {
  return (
    <section className="container mx-auto py-4">
      <h4 className="font-bold mb-2">Last Chance to Buy!</h4>
      <div className="flex gap-4">
        <div className="bg-white shadow rounded p-4 flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-200 mb-2" />
          <div className="font-semibold text-center">Nama Produk</div>
          <div className="text-red-600 font-bold">RpX.XXX.XXX</div>
          <button className="mt-2 bg-green-500 text-white px-3 py-1 rounded">Lihat Detail</button>
        </div>
      </div>
    </section>
  );
}