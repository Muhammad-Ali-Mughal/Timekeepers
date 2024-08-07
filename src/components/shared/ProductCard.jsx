import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ productTitle, productImage, brand, price, productId }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${productId}`);
  };

  return (
    <div
      className="w-72 cursor-pointer bg-white dark:bg-gray-900 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
      onClick={handleCardClick}
    >
      <div className="h-60 w-full flex justify-center items-center overflow-hidden rounded-t-xl">
        <img
          src={productImage}
          alt={productTitle}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-110 hover:shadow-lg"
        />
      </div>
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">{brand}</span>
        <p className="text-lg font-bold text-black dark:text-gray-300 truncate block capitalize">
          {productTitle}
        </p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black dark:text-gray-200 cursor-auto my-3">
            ${price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
