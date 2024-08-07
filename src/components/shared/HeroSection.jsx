import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section class="bg-gray-200 dark:bg-gray-800 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium dark:text-white">
            Dimension of reality
            <br class="hidden lg:inline-block" />
            that makes change possible
          </h1>
          <p class="mb-8 leading-relaxed dark:text-gray-300">
            Dimension of reality that makes change possible and understandable.
            An indefinite and homogeneous environment in which natural events
            and human existence take place.
          </p>
          <div class="flex justify-center">
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
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="https://www.tailwind-kit.com/images/object/10.png"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
