import React from "react";

const ProductInfo = () => {
  const product = {
    name: "Laptop",
    price: 1200,
    availability: "In Stock",
  };
  return (
    <div>
      <p className="product" style={{fontSize: "20px"}}>
        <ul>
          <li>Name: {product.name}</li>
          <li>Price: ${product.price}</li>
          <li>Availability: {product.availability}</li>
        </ul>
      </p>
    </div>
  );
};

export default ProductInfo;
