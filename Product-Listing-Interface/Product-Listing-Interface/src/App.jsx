import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchProducts() {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        "https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&query=mens-watches"
      );

      const data = await response.json();

      setProducts(data?.data?.data || []);
    } catch (err) {
      setError("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="app">
        <p className="status">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <p className="status error">{error}</p>
        <button onClick={fetchProducts}>Retry</button>
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="app">
        <p>No products found</p>
      </div>
    );
  }

  return (
    <div className="app">
      <h1>Product Listing</h1>

      <button onClick={fetchProducts}>Refresh</button>

      <div className="container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;