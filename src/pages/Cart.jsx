import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartProduct from "../components/shared/CartProduct.jsx";

function Cart() {
  const [cartProducts, setCartProducts] = useState([]);
  const navigate = useNavigate();
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  const handleToCheckout = () => {
    navigate("/checkout");
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartProducts(storedCart);
  }, []);

  const calculateSubtotal = () => {
    return cartProducts
      .reduce((acc, product) => {
        return acc + product.price * (product.quantity || 1);
      }, 0)
      .toFixed(2);
  };

  const subtotal = calculateSubtotal();
  const taxes = 1.99;
  const total = (parseFloat(subtotal) + taxes).toFixed(2);

  return (
    <section className={`${isDarkMode && "dark"}`}>
      <div className="bg-gray-100 dark:bg-gray-800 h-screen py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl dark:text-white font-semibold mb-4">
            Shopping Cart
          </h1>

          <div className="flex flex-col md:flex-row gap-4 ">
            <div className="md:w-3/4">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 mb-4">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left font-semibold dark:text-gray-200">
                        Product
                      </th>
                      <th className="text-left font-semibold dark:text-gray-300">
                        Price
                      </th>
                      <th className="text-left font-semibold dark:text-gray-300">
                        Quantity
                      </th>
                      <th className="text-left font-semibold dark:text-gray-300">
                        Total
                      </th>
                    </tr>
                  </thead>
                  {cartProducts.map((product) => (
                    <CartProduct key={product.id} product={product} />
                  ))}
                </table>
              </div>
            </div>

            <div className="md:w-1/4">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4 dark:text-gray-200">
                  Summary
                </h2>
                <div className="flex justify-between mb-2">
                  <span className="dark:text-gray-300">Subtotal</span>
                  <span className="dark:text-gray-300">${subtotal}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="dark:text-gray-300">Taxes</span>
                  <span className="dark:text-gray-300">
                    ${taxes.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="dark:text-gray-300">Shipping</span>
                  <span className="dark:text-gray-300">$0.00</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                  <span className="font-semibold dark:text-gray-200">
                    Total
                  </span>
                  <span className="font-semibold dark:text-gray-200">
                    ${total}
                  </span>
                </div>
                <button
                  onClick={handleToCheckout}
                  className="bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded-lg mt-4 w-full"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
