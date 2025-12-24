import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CakeDetails from "../components/CakeDetails";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`/api/products/${id}`);
      const data = await res.json();

      if (res.ok) {
        setProduct(data);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="pages">{product && <CakeDetails product={product} />}</div>
  );
};

export default ProductDetails;
