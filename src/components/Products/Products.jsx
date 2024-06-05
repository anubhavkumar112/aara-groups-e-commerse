// App.js
import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://app1.crazzyhub.com/api/all-filter-product-list', {
        method: 'POST',
        headers: {
          'Authorization': '7c2b8693d001c79d4b5ed6ebc387ad6b862989dfjhjjhj',
        },
        body: new URLSearchParams({
          category_id: '28',
          brand_id: '226',
          color_id: ''
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('API response:', data);

      // Ensure data is properly structured and parsed
      const productList = data.data.product_list.map(product => ({
        ...product,
        price: parseFloat(product.price),
        old_price: parseFloat(product.old_price),
        discount: parseFloat(product.discount)
      }));

      setProducts(productList);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError(error.toString());
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex flex-wrap">
        {Array.isArray(products) && products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
