export default function Footer() {
  return (
    <footer className="bg-red-700 text-white mt-8">
      <div className="container mx-auto py-8 grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
        <div>
          <h5 className="font-bold mb-2">Contact Info</h5>
          <div>0821-8080-9090</div>
          <div>Instagram, Facebook, TikTok</div>
        </div>
        <div>
          <h5 className="font-bold mb-2">Customer</h5>
          <div>How to Order</div>
          <div>Payment</div>
        </div>
        <div>
          <h5 className="font-bold mb-2">Support</h5>
          <div>FAQ</div>
          <div>Warranty</div>
        </div>
        <div>
          <h5 className="font-bold mb-2">Quick Link</h5>
          <div>Promo</div>
          <div>PC Rakitan</div>
        </div>
        <div>
          <h5 className="font-bold mb-2">About Us</h5>
          <div>Company Profile</div>
        </div>
      </div>
      <div className="text-center py-2 bg-red-900 text-xs">
        Copyright © AGRESKOMPUTER
      </div>
    </footer>
  );
}
