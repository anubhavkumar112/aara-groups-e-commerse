import { useEffect, useState } from "react";
import favoriteIcon from "../../assets/free-heart.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [itemData, setItemData] = useState([]);
  const [fetchError, setFetchError] = useState("");
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const navigateToItemDetail = (product) => {
    navigate("/product", { state: product });
  };

  const itemList = itemData.map((product, idx) => (
    <div
      className="w-[300px] h-[400px] border-2 border-gray-300 rounded-lg shadow-lg shadow-gray-300 hover:scale-x-105 hover:scale-y-105 transition-all cursor-pointer"
      key={idx}
      onClick={() => navigateToItemDetail(product)}
    >
      <div className="w-[80%] h-[220px] m-auto flex">
        <img src={product?.image} width="90%" height="100%" alt="productImage" />
      </div>
      <img
        src={favoriteIcon}
        width="25px"
        height="25px"
        alt="HeartIcon"
        className="float-right relative -top-52 -left-5 cursor-pointer"
      />
      <h1 className="px-3 font-bold text-xl">{product?.variant_name}</h1>
      <div className="text-lg text-green-500 px-3 font-semibold">
        {product?.stock_status}
      </div>
      <div className="text-lg px-3 font-bold">₹{product?.actual_price}</div>
      <div className="px-3 flex gap-1">
        <div className="text-lg text-gray-400 font-bold line-through">
          {product?.price}
        </div>
        <div className="bg-green-500 flex items-center rounded-sm">
          <span className="text-white px-1">
            {product.discount_percent} %off
          </span>
        </div>
      </div>
    </div>
  ));

  useEffect(() => {
    setLoading(true);
    setHasError(false);
    const retrieveProducts = async () => {
      try {
        const response = await axios.post(
          "https://app1.crazzyhub.com/api/all-filter-product-list",
          new URLSearchParams({
            category_id: "28",
            brand_id: "226",
            color_id: "",
          }),
          {
            headers: {
              Authorization: "7c2b8693d001c79d4b5ed6ebc387ad6b862989dfjhjjhj",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setItemData(response.data.data.product_list);
        setLoading(false);
        setHasError(false);
      } catch (err) {
        setLoading(false);
        setHasError(true);
        setFetchError("Error while fetching the Data. Please try again!");
      }
    };

    retrieveProducts();
  }, []);

  return (
    <div className="w-[90%] h-auto flex justify-center items-center flex-wrap m-auto mt-5 gap-5 mb-3">
      {!loading && !hasError && itemList}
      {!loading && hasError && (
        <div className="mt-10 text-red-600 text-bold text-3xl">{fetchError}</div>
      )}
      {loading && !hasError && (
        <div className="mt-10 text-3xl w-auto h-[55px] bg-cyan-600 text-white px-5 py-2 rounded-md">
          Loading..
        </div>
      )}
    </div>
  );
};

export default Products;
