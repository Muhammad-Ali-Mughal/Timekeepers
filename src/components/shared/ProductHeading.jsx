import React from "react";

function ProductHeading({ text }) {
  return (
    <div className="text-center p-10 bg-gray-100 dark:bg-gray-800">
      <h1 className="font-bold text-4xl mb-4 dark:text-gray-300">{text}</h1>
    </div>
  );
}

export default ProductHeading;
