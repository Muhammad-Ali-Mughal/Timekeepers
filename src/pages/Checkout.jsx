import React from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  const hanldeCheckoutFormSubmit = () => {
    toast?.success("Your order has been placed!", {
      id: "checkout",
    });
    navigate("/shop");
  };

  return (
    <section className={`${isDarkMode && "dark"}`}>
      <div className="bg-gray-100 dark:bg-gray-800">
        <div className="w-full max-w-3xl mx-auto p-8">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md border dark:border-gray-700">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Checkout
            </h1>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">
                Shipping Address
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    for="first_name"
                    className="block text-gray-700 dark:text-white mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  />
                </div>
                <div>
                  <label
                    for="last_name"
                    className="block text-gray-700 dark:text-white mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label
                  for="address"
                  className="block text-gray-700 dark:text-white mb-1"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                />
              </div>

              <div className="mt-4">
                <label
                  for="city"
                  className="block text-gray-700 dark:text-white mb-1"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label
                    for="state"
                    className="block text-gray-700 dark:text-white mb-1"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  />
                </div>
                <div>
                  <label
                    for="zip"
                    className="block text-gray-700 dark:text-white mb-1"
                  >
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    id="zip"
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">
                Payment Information
              </h2>
              <div className="mt-4">
                <label
                  for="card_number"
                  className="block text-gray-700 dark:text-white mb-1"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  id="card_number"
                  className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label
                    for="exp_date"
                    className="block text-gray-700 dark:text-white mb-1"
                  >
                    Expiration Date
                  </label>
                  <input
                    type="text"
                    id="exp_date"
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  />
                </div>
                <div>
                  <label
                    for="cvv"
                    className="block text-gray-700 dark:text-white mb-1"
                  >
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={hanldeCheckoutFormSubmit}
                className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
