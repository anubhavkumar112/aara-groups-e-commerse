import { useNavigate } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";

/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
  const { id, variant_name, image, stock_status, price, actual_price, discount_percent, variant_id } = product;
  const navigate = useNavigate();

  const formattedPrice = typeof price === 'number' && !isNaN(price) ? price.toFixed(2) : 'N/A';

  const handleCardClick = () => {
    navigate(`/product/${id}/${variant_id}`);
  };

  return (
    <div onClick={handleCardClick} className="max-w-xs rounded overflow-hidden shadow-lg m-4 border border-gray-200 cursor-pointer">
      <div className="relative">
        <img className="w-full" src={image} alt={variant_name} />
        <span className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md heart-icon-container">
          <CiHeart />
        </span>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2">{variant_name}</div>
        <p className={`font-semibold ${stock_status === 'In-stock' ? 'text-green-500' : 'text-red-500'}`}>
          {stock_status}
        </p>
        <p className="text-gray-700 text-xl font-bold">₹{formattedPrice}</p>
        <p className="text-gray-400 text-base line-through">₹{actual_price}</p>
        <p className="text-red-500 text-base">{discount_percent}% off</p>
      </div>
    </div>
  );
};

export default ProductCard;
