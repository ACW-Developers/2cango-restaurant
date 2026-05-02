import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import StoreNavigation from "@/components/store/StoreNavigation";
import StoreFooter from "@/components/store/StoreFooter";
import ProductCard from "@/components/store/ProductCard";
import HeroCarousel from "@/components/store/HeroCarousel";
import MarketingBanner from "@/components/store/MarketingBanner";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import PageLoadingScreen from "@/components/PageLoadingScreen";
import { useProducts, useFeaturedProducts, useSaleProducts, useCategories } from "@/hooks/useProducts";
import ProductFetchError from "@/components/store/ProductFetchError";
import ClearCacheButton from "@/components/store/ClearCacheButton";
import { Sparkles, Flame, ShoppingBag, Search, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import interior1 from "@/assets/restaurant/interior-1.jpg";
import interior2 from "@/assets/restaurant/interior-2.jpg";
import storefront from "@/assets/restaurant/storefront.jpg";
import foodie1 from "@/assets/hero/foodie-1.jpg";
import foodie2 from "@/assets/hero/foodie-2.jpg";
import foodie3 from "@/assets/hero/foodie-3.jpg";

const boldBackgrounds = [interior1, interior2, storefront];
const transitions = ["fade", "slide", "zoom"] as const;

const StorePage = () => {
  const [pageLoading, setPageLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [bgIndex, setBgIndex] = useState(0);
  const { data: products = [], isLoading, isError } = useProducts(selectedCategory);
  const { data: featured = [] } = useFeaturedProducts();
  const { data: saleProducts = [] } = useSaleProducts();
  const { data: categories = ["All"] } = useCategories();

  useEffect(() => {
    const timer = setTimeout(() => setPageLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setBgIndex(i => (i + 1) % boldBackgrounds.length), 6000);
    return () => clearInterval(t);
  }, []);

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (p.description || "").toLowerCase().includes(searchQuery.toLowerCase())
  );

  const variantFor = (i: number) => {
    const kind = transitions[i % transitions.length];
    if (kind === "slide") return { initial: { x: "100%", opacity: 0 }, animate: { x: 0, opacity: 1 }, exit: { x: "-100%", opacity: 0 } };
    if (kind === "zoom") return { initial: { scale: 1.2, opacity: 0 }, animate: { scale: 1, opacity: 1 }, exit: { scale: 0.95, opacity: 0 } };
    return { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } };
  };

  return (
    <>
      <AnimatePresence>{pageLoading && <PageLoadingScreen label="Store" />}</AnimatePresence>
      <div className="min-h-screen bg-background">
        <StoreNavigation />
        <main className="pt-20">
          {/* Decorative HD foodie images framing the hero carousel */}
          <div className="relative">
            <HeroCarousel />
            <div className="hidden xl:block absolute -left-2 top-8 w-28 h-28 rounded-2xl overflow-hidden shadow-2xl border-4 border-background rotate-[-6deg] z-30 animate-float">
              <img src={foodie1} alt="Jollof rice" className="w-full h-full object-cover" loading="eager" width={300} height={300} />
            </div>
            <div className="hidden xl:block absolute -right-2 top-20 w-32 h-32 rounded-full overflow-hidden shadow-2xl border-4 border-background z-30" style={{ animation: "float 6s ease-in-out infinite", animationDelay: "1s" }}>
              <img src={foodie2} alt="Shawarma" className="w-full h-full object-cover" loading="eager" width={300} height={300} />
            </div>
            <div className="hidden xl:block absolute right-12 bottom-4 w-24 h-24 rounded-2xl overflow-hidden shadow-xl border-4 border-background rotate-[8deg] z-30" style={{ animation: "float 7s ease-in-out infinite", animationDelay: "2s" }}>
              <img src={foodie3} alt="Tilapia" className="w-full h-full object-cover" loading="eager" width={300} height={300} />
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 mt-8">
            <MarketingBanner position="hero" />
          </div>

          {featured.length > 0 && (
            <section className="py-16 px-6">
              <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between gap-3 mb-8 flex-wrap">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-primary" />
                    <h2 className="text-3xl font-bold font-space">Featured Dishes</h2>
                  </div>
                  <ClearCacheButton />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {featured.map(p => <ProductCard key={p.id} product={p} />)}
                </div>
              </div>
            </section>
          )}

          <div className="max-w-7xl mx-auto px-6">
            <MarketingBanner position="home-mid" />
          </div>

          {saleProducts.length > 0 && (
            <section className="py-16 px-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-destructive/5 via-transparent to-destructive/5" />
              <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <Flame className="w-6 h-6 text-destructive" />
                  <h2 className="text-3xl font-bold font-space">On Sale</h2>
                  <span className="bg-destructive text-destructive-foreground text-xs font-bold px-3 py-1 rounded-full">HOT</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {saleProducts.map(p => <ProductCard key={p.id} product={p} />)}
                </div>
              </div>
            </section>
          )}

          <section className="py-16 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[420px] flex items-center justify-center">
                {/* Carousel of restaurant photos */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={bgIndex}
                    {...variantFor(bgIndex)}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <img
                      src={boldBackgrounds[bgIndex]}
                      alt="2Cango Restaurant"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navy blue slight overlay so contents stay visible */}
                <div className="absolute inset-0 bg-[hsl(220_60%_15%)]/65" />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_60%_10%)]/80 via-transparent to-transparent" />

                {/* Content */}
                <div className="relative z-10 p-10 md:p-16 text-center max-w-3xl mx-auto">
                  <TrendingUp className="w-12 h-12 text-white mx-auto mb-4 drop-shadow-lg" />
                  <h2 className="text-3xl md:text-5xl font-bold font-space mb-4 text-white drop-shadow-lg">
                    Taste the <span className="text-primary">Bold Side</span> of Phoenix
                  </h2>
                  <p className="text-white/95 text-lg max-w-2xl mx-auto mb-6 drop-shadow">
                    From smoky jollof and grilled tilapia to sizzling shawarma — every plate is made to order with fresh ingredients and big West African flavor.
                  </p>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white shadow-xl"
                    onClick={() => window.open("https://wa.me/17024265181?text=" + encodeURIComponent("Hi 2Cango! I'd like to place an order."), "_blank")}
                  >
                    Order on WhatsApp
                  </Button>

                  {/* Dots */}
                  <div className="flex justify-center gap-2 mt-8">
                    {boldBackgrounds.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setBgIndex(i)}
                        className={`h-2 rounded-full transition-all ${i === bgIndex ? "w-8 bg-white" : "w-2 bg-white/40"}`}
                        aria-label={`Show photo ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 px-6" id="products">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <ShoppingBag className="w-6 h-6 text-primary" />
                  <h2 className="text-3xl font-bold font-space">Our Menu</h2>
                </div>
                <ClearCacheButton />
              </div>

              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Search the menu..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10" />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {categories.map((cat) => (
                    <Button key={cat} variant={selectedCategory === cat ? "default" : "outline"} size="sm" onClick={() => setSelectedCategory(cat)}>
                      {cat}
                    </Button>
                  ))}
                </div>
              </div>

              {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {Array.from({ length: 8 }).map((_, i) => <div key={i} className="glass-card h-80 animate-pulse" />)}
                </div>
              ) : isError ? (
                <ProductFetchError />
              ) : filteredProducts.length === 0 ? (
                <div className="text-center py-20">
                  <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-xl text-muted-foreground">No products found</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map(p => <ProductCard key={p.id} product={p} />)}
                </div>
              )}
            </div>
          </section>

          <div className="max-w-7xl mx-auto px-6 pb-8">
            <MarketingBanner position="home-bottom" />
          </div>
        </main>
        <StoreFooter />
        <WhatsAppWidget />
      </div>
    </>
  );
};

export default StorePage;
