import React from "react";
import "./cake-details.css"

const CakeDetails = ({ product }) => {
  return (
    <div className="cake-detail">
      <div className="cake-image">Cake image coming soon</div>

      <div className="cake-info">
        <h1 className="cake-title">{product.name}</h1>
        <p className="cake-price">${product.price}</p>

        <div className="cake-meta">
          <span>🍫 Chocolate</span>
          <span>🎂 1kg</span>
          <span>✅ Available</span>
        </div>

        <p className="cake-description">
          Rich chocolate sponge layered with smooth truffle cream, perfect for
          birthdays and celebrations.
        </p>

        <button className="cake-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default CakeDetails;
