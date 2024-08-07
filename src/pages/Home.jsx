import React from "react";
import { useSelector } from "react-redux";
import { watchData } from "../data/watchesData";
import ProductCard from "../components/shared/ProductCard";
import { Link } from "react-router-dom";
import ProductHeading from "../components/shared/ProductHeading";
import CompanyIconGrid from "../components/shared/CompanyIconGrid";

function Home() {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <section className={`${isDarkMode && "dark"}`}>
      <section>
        <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex relative py-16">
            <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
              <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
              <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                Be on
                <span className="text-5xl sm:text-7xl">Time</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                Dimension of reality that makes change possible and
                understandable. An indefinite and homogeneous environment in
                which natural events and human existence take place.
              </p>
              <div className="flex mt-8">
                <Link
                  to={"/product/6"}
                  className="uppercase py-2 px-4 rounded-lg bg-purple-600 border-2 border-transparent text-white text-md mr-4 hover:bg-purple-700"
                >
                  Buy Now
                </Link>

                <Link
                  to={"/shop"}
                  className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-purple-600 text-purple-600 dark:text-white hover:bg-purple-600 hover:text-white text-md"
                >
                  Shop more
                </Link>
              </div>
            </div>
            <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
              <img
                src="https://www.tailwind-kit.com/images/object/10.png"
                className="max-w-xs md:max-w-sm m-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <ProductHeading text={"Our Featured Products"} />
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
      <CompanyIconGrid />
      <section class="w-full h-auto p-2 pt-5 dark:bg-gray-800">
        <div class=" mx-auto max-w-7xl px-4 py-12 sm:px-6   lg:px-8  flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row dark:bg-gray-800">
          <div class="sm:text-center lg:text-left">
            <h1 class="text-4xl font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
              <span class="block xl:inline dark:text-white">Shop now!</span>
              <span class="block text-purple-600 xl:inline">
                {" "}
                Watch is ticking...
              </span>
            </h1>
            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"></div>
          </div>

          <div class="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4 ">
            <img
              class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full "
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              alt=""
            />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
