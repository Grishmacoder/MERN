import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CakeCard from "../components/CakeCard";

const CategoryPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const res = await fetch(
        `/api/products?category=${encodeURIComponent(category)}`
      );
      const data = res.json();
      if (res.ok) {
        setProducts(data);
      }
      setLoading(false);
    };
    fetchProduct();
  }, [category]);

  return (
    <div className="pages">
      <h2 className="text-primary" style={{ marginBottom: "30px" }}>
        {category.replace("-", " ")}Cakes
      </h2>
      {loading && <p>Loading cakes...</p>}
      {!loading && (
        <div className="cake-grid">
          {products.length > 0 ? (
            products.map((product) => (
              <CakeCard key={product._id} product={product} />
            ))
          ) : (
            <p>No cakes found in this category.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
