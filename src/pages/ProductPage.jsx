import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { watchData } from "../data/watchesData";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/slices/cartSlice";

function ProductPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state);
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  const { id } = useParams();
  const product = watchData.find((product) => product.id == parseInt(id));

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  // const handleRemoveFromCart = () => {
  //   dispatch(removeFromCart(product.id));
  // };

  const handleShowCart = () => {
    navigate("/cart");
  };

  return (
    <>
      <section className={`${isDarkMode && "dark"}`}>
        <div className="w-full min-h-screen bg-gray-300 dark:bg-gray-800 flex justify-center items-center">
          <div className="container mx-auto bg-gray-100 dark:bg-gray-700 rounded-xl px-4 py-8">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-8">
                <img
                  src={product?.imageUrl}
                  alt={product?.name}
                  className="w-full h-auto rounded-lg shadow-md mb-4"
                  id="mainImage"
                />
              </div>

              <div className="w-full md:w-1/2 px-4">
                <h2 className="text-3xl font-bold mb-2 dark:text-gray-50">
                  {product?.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {product?.brand}
                </p>
                <div className="mb-4">
                  <span className="text-2xl font-bold mr-2 dark:text-gray-100">
                    ${product?.price}
                  </span>
                </div>
                <div className="flex items-center mb-4 dark:text-gray-400">
                  Ratings:
                  <span className="ml-2 text-gray-600 dark:text-gray-200">
                    {product?.rating}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {product?.description}
                </p>

                <div className="mb-6">
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1"
                  >
                    Quantity:
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    defaultValue="1"
                    className="w-12 text-center rounded-md border-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-400"
                  />
                </div>

                <div className="flex space-x-4 mb-6">
                  <button
                    onClick={
                      cart.some((item) => item.id === product.id)
                        ? handleShowCart
                        : handleAddToCart
                    }
                    className="bg-purple-700 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:ring-offset-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                    {cart.some((item) => item.id === product.id)
                      ? "Show Cart"
                      : "Add to Cart"}
                  </button>
                  <button className="bg-gray-200 dark:bg-gray-600 flex gap-2 items-center  text-gray-800 dark:text-gray-300 px-6 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                    Wishlist
                  </button>
                </div>

                <div>
                  <h3 className="text-lg dark:text-gray-200 font-semibold mb-2">
                    Key Features:
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
                    <li>Elegant design</li>
                    <li>Lifetime warranty</li>
                    <li>Completely water resistant</li>
                    <li>Value for money</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductPage;
