export default function HeroBanner() {
  return (
    <section className="w-full bg-blue-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <img src="/banner-pc.png" alt="PC Rakitan Ready" className="w-full md:w-1/2 rounded-lg shadow-lg" />
        <div>
          <h2 className="text-3xl font-bold mb-2">PC RAKITAN READY</h2>
          <p className="mb-4">Mulai dari 2 Jutaan</p>
          <button className="bg-yellow-400 text-black px-6 py-2 rounded font-bold">Chat WhatsApp</button>
        </div>
      </div>
    </section>
  );
}
