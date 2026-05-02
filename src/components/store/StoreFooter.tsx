import { Mail, Phone, MapPin, UtensilsCrossed, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo/logo.png";

const StoreFooter = () => {
  return (
    <footer className="relative bg-[hsl(220_45%_12%)] text-slate-200 pt-14 pb-8 px-6 overflow-hidden">
      {/* Decorative top gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
      <div className="absolute -top-32 -right-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="2Cango" className="h-12 w-12 object-contain rounded-lg bg-white/5 p-1" />
              <h3 className="text-2xl font-bold font-space text-white">2Cango Restaurant</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Bold West African flavors, grilled, wrapped and served fresh in the heart of Phoenix, Arizona.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold font-space mb-4 text-white flex items-center gap-2">
              <UtensilsCrossed className="w-4 h-4 text-primary" /> Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/" className="text-slate-300 hover:text-primary transition-colors">Home</a></li>
              <li><a href="/shop" className="text-slate-300 hover:text-primary transition-colors">Menu</a></li>
              <li><a href="/track" className="text-slate-300 hover:text-primary transition-colors">Track Order</a></li>
              <li><a href="/contact" className="text-slate-300 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold font-space mb-4 text-white">Visit & Order</h4>
            <div className="space-y-3 text-sm">
              <a href="mailto:info@2cangorestaurants.com" className="flex items-center gap-3 group">
                <span className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="w-4 h-4 text-primary group-hover:text-white" />
                </span>
                <span className="text-slate-200 group-hover:text-white">info@2cangorestaurants.com</span>
              </a>
              <a href="tel:+17024265181" className="flex items-center gap-3 group">
                <span className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-4 h-4 text-primary group-hover:text-white" />
                </span>
                <span className="text-slate-200 group-hover:text-white">+1 (702) 426-5181</span>
              </a>
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </span>
                <span className="text-slate-200">Phoenix, Arizona</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm text-slate-400">© 2026 2Cango Restaurant. All rights reserved.</p>
          <p className="text-xs text-slate-500">Where every bite is packed with real flavor.</p>
        </div>
      </div>
    </footer>
  );
};

export default StoreFooter;
