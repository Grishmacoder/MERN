import { Link } from "react-router-dom";
import "./cake-card.css"

const CakeCard = ({ product }) => {
  return (
    <div className="cake-card">
      <div className="cake-card-image">
        Image coming soon
      </div>

      <div className="cake-card-body">
        <h3 className="cake-card-title">{product.name}</h3>
        <p className="cake-card-price">${product.price}</p>
        <p className="cake-card-desc">
          {product.description?.substring(0, 80)}...
        </p>

        <div className="cake-card-actions">
          <Link to={`/products/${product._id}`} className="cake-card-link">
            View Details
          </Link>
          <button className="cake-card-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default CakeCard;
