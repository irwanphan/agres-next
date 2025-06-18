import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-rose-600 text-white mt-8 pt-8">
      <div className="container mx-auto px-4">
        {/* Top: WhatsApp & Subscribe */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
          <div className="flex items-center gap-4">
            <FaWhatsapp className="w-12 h-12 md:w-16 md:h-16 text-white" />
            <div>
              <div className="text-lg md:text-xl font-semibold">ORDER & SERVICES</div>
              <div className="text-3xl md:text-4xl font-bold tracking-wide">0821-8080-9090</div>
            </div>
          </div>
          <div className="flex flex-col items-end w-full md:w-auto">
            <span className="font-semibold mb-2 text-right">SUBSCRIBE FOR MORE INFORMATION</span>
            <form className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL HERE"
                className="rounded-full bg-white/80 px-4 py-2 w-full text-gray-700 placeholder-gray-400 focus:outline-none"
              />
              <button type="submit" className="-ml-8 rounded-full bg-red-700 w-12 h-12 flex items-center justify-center text-white text-2xl hover:bg-red-800 transition">
                &gt;
              </button>
            </form>
          </div>
        </div>
        <hr className="border-white/40 mb-8" />
        {/* Grid Info */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-sm mb-8">
          <div>
            <h5 className="font-bold mb-2">Contact Info</h5>
            <div>AGRESKOMPUTER</div>
            <div>JL. GUNUNG SAHARI RAYA 1</div>
            <div>RUKO BLOK A NO 1</div>
            <div>ANCOL, KEC PADEMANGAN,</div>
            <div>JAKARTA UTARA 14420</div>
            <div className="mt-2">Everyday: 09:00 - 19:00</div>
            <div className="flex gap-4 mt-4 text-2xl">
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="TikTok"><FaTiktok /></a>
            </div>
          </div>
          <div>
            <h5 className="font-bold mb-2">Customer</h5>
            <div>Privacy Policy</div>
            <div>Return Policy</div>
            <div>Refund Policy</div>
            <div>Cancellation Policy</div>
            <div>Term & Conditions</div>
          </div>
          <div>
            <h5 className="font-bold mb-2">Support</h5>
            <div>FAQs</div>
            <div>Track Order</div>
            <div>Support Ticket</div>
            <div>Help & Support</div>
            <div>Wishlist</div>
          </div>
          <div>
            <h5 className="font-bold mb-2">Quick Link</h5>
            <div>Search</div>
            <div>Gift Cards</div>
            <div>Site Map</div>
            <div>Blog</div>
            <div>Affiliates</div>
          </div>
          <div>
            <h5 className="font-bold mb-2">About Us</h5>
            <div>About AGRESKOMPUTER</div>
            <div>Press Release</div>
            <div>Careers</div>
            <div>Collaboration</div>
            <div>Reviews</div>
          </div>
        </div>
      </div>
      <div className="text-center py-2 bg-red-900 text-xs">
        Copyright © AGRESKOMPUTER
      </div>
    </footer>
  );
}
