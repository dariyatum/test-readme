import { useState, useEffect } from "react";

function Home() {
  const [products, setProducts] = useState([]);

async function getProducts() {
  const response = await fetch("/products.json");
  const data = await response.json();

  console.log("Data:", data);
  console.log("Type:", typeof data);
  console.log("Is Array:", Array.isArray(data));

setProducts(data.products);
}

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="p-10">
      <h1>Welcome to Home Page</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
