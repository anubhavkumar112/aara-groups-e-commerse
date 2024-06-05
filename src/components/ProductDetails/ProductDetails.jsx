import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId, variantId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://app1.crazzyhub.com/api/product-details-api/?product_id=${productId}&variant_id=${variantId}`, {
          method: 'GET',
          headers: {
            'Authorization': '7c2b8693d001c79d4b5ed6ebc387ad6b862989dfjhjjhj',
          }
        });

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Product not found');
          } else {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        }

        const data = await response.json();
        console.log('API response data:', data); 
        setProduct(data.data); 
      } catch (error) {
        setError(error.toString());
      }
    };

    fetchProductDetails();
  }, [productId, variantId]);

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (!product) {
    return <p>Loading...</p>;
  }

  // Dummy data for frequently bought together products
  const dummyFrequentlyBoughtTogether = [
    {
      id: 1,
      name: "OnePlus Buds Pro",
      price: 9999,
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSNkPDaqfnm34eY67K3xOocFxPY3wZ7Bj0QbAO_8uNgUEVyLnhr13-flrgEIofFKC2LHFTZ4TqFODZpCBM5OPndBiwovTNdizWG5Xwmmd01t1SrvD3Vr_4ddLzE0Jhsc-9hhHie_ymRd2A&usqp=CAc",
    },
    {
      id: 2,
      name: "OnePlus 11 pro",
      price: 39999,
      image: "data:image/jpeg;base64,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",
    },
    {
      id: 3,
      name: "OnePlus Watch",
      price: 15999,
      image: "data:image/webp;base64,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",
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
              <img className="w-full h-50 object-cover" src={product.variant_image} alt={product.product_variant_name} />
              <div className="flex space-x-2 mt-4">
                {product.variant_images.length > 0 ? product.variant_images.map((img, idx) => (
                  <img key={idx} className="w-16 h-16 border border-gray-200" src={img} alt={`variant ${idx}`} />
                )) : <p>No additional images available</p>}
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <h1 className="text-2xl font-bold mb-2">{product.product_variant_name}</h1>
              <div className="flex items-center mb-2">
                <span className={`font-semibold ${product.stock_sataus === 'In-stock' ? 'text-green-500' : 'text-red-500'}`}>
                  {product.stock_sataus}
                </span>
              </div>
              <div className="text-xl text-red-500 font-bold mb-2">₹{product.price?.toFixed(2) || 'N/A'}</div>
              {product.mrp && (
                <div className="text-gray-500 line-through mb-2">M.R.P: ₹{product.mrp}</div>
              )}
              {product.discount_percent && (
                <div className="text-green-500 font-bold mb-4">{product.discount_percent}% off</div>
              )}

              <div className="flex flex-col mb-4">
                <label className="text-gray-700 font-semibold mb-2">RAM</label>
                <div className="text-gray-900">{product.other_variant_name}</div>
              </div>

              <div className="flex flex-col mb-4">
                <label className="text-gray-700 font-semibold mb-2">Storage</label>
                <div className="text-gray-900">{product.storage_variant_name}</div>
              </div>

              <div className="flex flex-col mb-4">
                <label className="text-gray-700 font-semibold mb-2">Dimensions</label>
                <div className="text-gray-900">
                  Length: {product.length} cm, Breadth: {product.breadth} cm, Height: {product.height} cm
                </div>
              </div>

              <div className="flex flex-col mb-4">
                <label className="text-gray-700 font-semibold mb-2">Weight</label>
                <div className="text-gray-900">{product.weight} kg</div>
              </div>

              <div className="flex flex-col mb-4">
                <label className="text-gray-700 font-semibold mb-2">Tax Information</label>
                <div className="text-gray-900">
                  CGST: {product.cgst_percent}%, SGST: {product.sgst_percent}%, IGST: {product.igst_percent}%
                </div>
              </div>

              {product.rating && (
                <div className="flex flex-col mb-4">
                  <label className="text-gray-700 font-semibold mb-2">Rating</label>
                  <div className="text-gray-900">{product.rating} / 5</div>
                </div>
              )}

              <div className="flex space-x-4 mb-4">
                <button className="bg-orange-500 text-white px-4 py-2 rounded">Buy Now</button>
                <button className="bg-green-500 text-white px-4 py-2 rounded">Add to Cart</button>
              </div>

              <div className="flex space-x-4 mb-4">
                <button className="text-gray-700 px-4 py-2 rounded border border-gray-200">Share</button>
                <button className="text-gray-700 px-4 py-2 rounded border border-gray-200">Compare</button>
                <button className="text-gray-700 px-4 py-2 rounded border border-gray-200">Wishlist</button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:pl-4 mt-8 lg:mt-[6rem]">
          <h2 className="text-xl font-bold mb-4">Frequently Bought Together</h2>
          <div className="space-y-4">
            {dummyFrequentlyBoughtTogether.map((relatedProduct, idx) => (
              <div key={idx} className="flex justify-between items-center border-b border-gray-200 py-2">
                <div className="flex items-center space-x-2">
                  <img className="w-16 h-16" src={relatedProduct.image} alt={relatedProduct.name} />
                  <div>{relatedProduct.name}</div>
                </div>
                <div className="text-gray-900 font-bold">₹{relatedProduct.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
