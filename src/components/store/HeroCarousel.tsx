import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import slide1 from "@/assets/carousel/slide-1.jpg";
import slide2 from "@/assets/carousel/slide-2.jpg";
import slide3 from "@/assets/carousel/slide-3.jpg";

const slides = [
  {
    image: slide1,
    title: "Smoky Jollof & Chicken",
    subtitle: "Signature West African Mains",
    description: "Bottom-pot smoky jollof rice with juicy grilled chicken — Phoenix's favorite comfort plate.",
    cta: "Order Now",
  },
  {
    image: slide2,
    title: "Char-Grilled Tilapia",
    subtitle: "From the Grill, Fresh Daily",
    description: "Whole tilapia marinated in our house pepper rub and flame-grilled to perfection.",
    cta: "View Menu",
  },
  {
    image: slide3,
    title: "Sizzling Shawarma Wraps",
    subtitle: "Wraps, Bowls & Sides",
    description: "Tender spiced beef, fresh greens and our garlic-pepper sauce in a toasted flatbread.",
    cta: "Order Wraps",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + slides.length) % slides.length);
  };

  const leftIdx = (current - 1 + slides.length) % slides.length;
  const rightIdx = (current + 1) % slides.length;

  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-background">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background z-0" />

      <div className="relative h-full max-w-7xl mx-auto flex items-center px-4 md:px-6">
        {/* Left side panel - slides in */}
        <div className="hidden lg:block w-1/4 relative h-[350px] z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={`left-${leftIdx}`}
              initial={{ x: -100, opacity: 0, scale: 0.85 }}
              animate={{ x: 0, opacity: 0.7, scale: 0.85 }}
              exit={{ x: -100, opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => go(-1)}
            >
              <img
                src={slides[leftIdx].image}
                alt={slides[leftIdx].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white/70 text-sm font-medium">{slides[leftIdx].subtitle}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Center main slide - static position */}
        <div className="flex-1 lg:w-1/2 h-[400px] md:h-[450px] relative z-20 mx-2 lg:mx-4">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`center-${current}`}
              custom={direction}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-white/10"
            >
              <img
                src={slides[current].image}
                alt={slides[current].title}
                className="w-full h-full object-cover"
              />
              {/* Subtle bottom-only darkening so the title/description stay legible without tinting the food */}
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full mb-3">
                    <ShoppingBag className="w-3.5 h-3.5 text-white" />
                    <span className="text-xs font-medium text-white">{slides[current].subtitle}</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold font-space text-white mb-2">
                    {slides[current].title}
                  </h2>
                  <p className="text-white/80 text-sm md:text-base mb-4 max-w-md">
                    {slides[current].description}
                  </p>
                  <Link to="/shop">
                    <Button size="lg" className="gap-2 bg-white text-black hover:bg-white/90 font-semibold">
                      <ShoppingBag className="w-4 h-4" />
                      {slides[current].cta}
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right side panel - slides in */}
        <div className="hidden lg:block w-1/4 relative h-[350px] z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={`right-${rightIdx}`}
              initial={{ x: 100, opacity: 0, scale: 0.85 }}
              animate={{ x: 0, opacity: 0.7, scale: 0.85 }}
              exit={{ x: 100, opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => go(1)}
            >
              <img
                src={slides[rightIdx].image}
                alt={slides[rightIdx].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white/70 text-sm font-medium">{slides[rightIdx].subtitle}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => go(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>
      <button
        onClick={() => go(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
            className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-white" : "w-2 bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
