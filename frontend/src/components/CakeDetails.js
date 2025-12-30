import "./cake-details.css";

const CakeDetails = ({ product }) => {
  return (
    <div className="cake-detail">
      <div className="cake-image">
        <img
          src={product.image ? product.image : "/placeholder.png"}
          alt={product.name}
        />
      </div>

      <div className="cake-info">
        <h1 className="cake-title">{product.name}</h1>
        <p className="cake-price">${product.price}</p>

        <div className="cake-meta">
          <span>{product.description}</span>
          <span>🎂 1kg</span>
          <span>✅ Available</span>
        </div>

        <p className="cake-description">{product.description}</p>

        <button className="cake-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default CakeDetails;
