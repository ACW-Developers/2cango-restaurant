import { Mail, Phone, MapPin, UtensilsCrossed } from "lucide-react";

const StoreFooter = () => {
  return (
    <footer className="bg-gradient-to-br from-card to-muted border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <UtensilsCrossed className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold font-space gradient-text">2Cango Restaurant</h3>
            </div>
            <p className="text-muted-foreground text-sm">Bold West African flavors, grilled, wrapped and served fresh in the heart of Phoenix, Arizona.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold font-space mb-3 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="/shop" className="text-muted-foreground hover:text-primary transition-colors">Menu</a></li>
              <li><a href="/track" className="text-muted-foreground hover:text-primary transition-colors">Track Order</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold font-space mb-3 text-foreground">Visit & Order</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /><span className="text-muted-foreground">hello@2cango.com</span></div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /><span className="text-muted-foreground">+1 (520) 736-1677</span></div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /><span className="text-muted-foreground">Phoenix, Arizona</span></div>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">© 2026 2Cango Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default StoreFooter;
