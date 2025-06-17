export default function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-8" />
          <span className="font-bold text-lg text-red-600">AGRESKOMPUTER</span>
        </div>
        <div className="flex-1 mx-4">
          <input className="w-full border rounded px-3 py-1" placeholder="Cari produk, kategori, brand..." />
        </div>
        <div className="flex gap-4">
          <button>Login</button>
          <button>Cart</button>
        </div>
      </div>
      <div className="bg-red-600 text-white py-1 px-4">
        <div className="container mx-auto flex gap-4 text-sm overflow-x-auto">
          <span>KATEGORI</span>
          <span>PC BRAND</span>
          <span>PROCESSOR</span>
          <span>MOTHERBOARD</span>
          <span>VGA</span>
          <span>STORAGE</span>
          <span>RAM</span>
          <span>CASING</span>
          <span>PSU</span>
          <span>MONITOR</span>
          {/* ... */}
        </div>
      </div>
    </nav>
  );
}
