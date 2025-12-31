import React, { useEffect, useState } from "react";
import CakeCard from "../components/CakeCard";
import "./home.css"
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const [products, setProducts] = useState(null);
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch("/api/products/", {
        headers:{
          'Authorization': `Bearer ${user.token}`
        }
      });
      const data = await res.json();
      if (res.ok) {
        setProducts(data);
      }
    };
    if(user){
      fetchProduct();
    }
    
  }, [user]);

  return (
    <div className="home">
      <section className="home-hero">
        <h1>Freshly Baked Cakes for Every Occasion</h1>
        <p>Handcrafted with love, delivered fresh to your doorstep</p>
      </section>

      <section className="cake-grid">
        {products &&
          products.map((product) => (
            <CakeCard key={product._id} product={product} />
          ))}
      </section>
    </div>
  );
};

export default Home;
