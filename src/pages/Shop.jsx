import React from "react";
import { useSelector } from "react-redux";
import { watchData } from "../data/watchesData";
import HeroSection from "../components/shared/HeroSection";
import ProductCard from "../components/shared/ProductCard";
import ProductHeading from "../components/shared/ProductHeading";

function Shop() {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <section className={`${isDarkMode && "dark"}`}>
      <HeroSection />
      <ProductHeading text={"Shop the Best Watches"} />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-800 py-6  sm:py-12">
        <section
          id="Projects"
          className="w-fit mx-auto grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
        >
          {watchData.map((item) => (
            <ProductCard
              productTitle={item.name}
              productImage={item.imageUrl}
              brand={item.brand}
              price={item.price}
              productId={item.id}
            />
          ))}
        </section>
      </div>
    </section>
  );
}

export default Shop;
