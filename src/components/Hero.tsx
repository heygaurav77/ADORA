export function Hero() {
  return (
    <div className="relative w-full h-[400px] overflow-hidden bg-gray-100 mb-12">
      <img
        src="https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=2000&auto=format&fit=crop"
        alt="Hero Sneakers"
        className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1]"
      />
      <div className="absolute inset-0 bg-black/5" />
      <div className="absolute bottom-12 left-8 md:left-16 max-w-lg">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-white drop-shadow-sm uppercase">
          New Collection 2026
        </h1>
        <p className="text-white/90 text-sm md:text-base mb-6 font-medium drop-shadow-sm">
          Discover ADORA's premium range of organic cotton t-shirts, hoodies, and footwear designed for modern comfort.
        </p>
        <button className="bg-white/90 backdrop-blur-sm text-black px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors">
          Explore All
        </button>
      </div>
    </div>
  );
}
