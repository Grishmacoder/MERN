import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CakeDetails from "../components/CakeDetails";
import { useAuthContext } from "../hooks/useAuthContext";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const {user} = useAuthContext();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`/api/products/${id}`,   {
        headers:{
          'Authorization': `Bearer ${user.token}`
        }});
      const data = await res.json();

      if (res.ok) {
        setProduct(data);
      }
    };
    if(user){
      fetchProduct();
    }
    
  }, [id, user]);

  return (
    <div className="pages">{product && <CakeDetails product={product} />}</div>
  );
};

export default ProductDetails;
