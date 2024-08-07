import React, { useState } from "react";

function CartProduct({ product }) {
  const [quantity, setQuantity] = useState(product.quantity || 1);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateLocalStorage(product.id, newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateLocalStorage(product.id, newQuantity);
    }
  };

  const updateLocalStorage = (productId, newQuantity) => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <tbody>
      <tr>
        <td className="py-4">
          <div className="flex items-center">
            <img
              className="h-16 w-16 mr-4"
              src={product.imageUrl}
              alt={product.name}
            />
            <span className="font-semibold dark:text-gray-200">
              {product.name}
            </span>
          </div>
        </td>
        <td className="py-4 dark:text-gray-200">${product.price}</td>
        <td className="py-4">
          <div className="flex items-center">
            <button
              className="border rounded-md py-2 px-4 mr-2 dark:text-gray-300 dark:hover:bg-gray-800"
              onClick={handleDecrement}
            >
              -
            </button>
            <span className="text-center w-8 dark:text-gray-200">
              {quantity}
            </span>
            <button
              className="border rounded-md py-2 px-4 ml-2 dark:text-gray-300 dark:hover:bg-gray-800"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
        </td>
        <td className="py-4 font-bold dark:text-gray-200">${totalPrice}</td>
      </tr>
    </tbody>
  );
}

export default CartProduct;
