import star_icon from "../assets/star_icon.svg";
import star_dull from "../assets/star_dull_icon.svg";
import heart_icon from "../assets/heart_icon.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PopularProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container flex-col mt-3 mb-10">
      <h2 className="text-2xl font-medium text-left w-full mb-5 dark:text-white">
        Popular products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-7 gap-x-14">
        {products?.slice(0, 10).map((product) => (
          <Link
            to={`product/${product.id}`}
            key={product.id}
            className="bg-white dark:bg-gray-900 rounded-lg flex flex-col cursor-pointer h-[350px] justify-between shadow-sm dark:shadow-md"
          >
            {/* Image Section */}
            <div className="relative group bg-gray-100 dark:bg-gray-200 rounded-lg w-full h-52 flex items-center justify-center overflow-hidden">
              <img
                alt={product.title}
                loading="lazy"
                decoding="async"
                className="object-contain mix-blend-multiply w-[85%] h-[85%] transition-transform duration-300 group-hover:scale-105 z-10 relative"
                src={product.image}
              />
              <img
                className="bg-white dark:bg-gray-700 dark:invert absolute top-2 right-2 w-[22px] h-[22px] p-1 cursor-pointer rounded-full shadow"
                src={heart_icon}
                alt="Heart Icon"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col flex-1 justify-between p-3">
              <div className="space-y-1">
                <h3 className="font-semibold text-sm sm:text-base line-clamp-2 min-h-[40px] dark:text-white">
                  {product.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 min-h-[32px]">
                  {product.description}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-2">
                <span className="text-sm font-medium dark:text-white">
                  {product.rating.rate}
                </span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <img
                      key={i}
                      src={product.rating.rate >= i ? star_icon : star_dull}
                      alt="Star"
                      className="w-[13px] h-[13px]"
                    />
                  ))}
                </div>
              </div>

              {/* Price + Button */}
              <div className="flex justify-between items-center mt-3">
                <p className="font-semibold text-[16px] dark:text-white">
                  ${product.price}
                </p>
                <button className="text-[#6b7280] dark:text-gray-300 border border-gray-400 dark:border-gray-600 hover:bg-slate-50 dark:hover:bg-gray-700 cursor-pointer px-3 py-1 rounded-full text-[13px] transition">
                  Buy now
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Link
        to="/shop"
        className="mt-11 inline-block text-center text-gray-600 dark:text-gray-300 border border-gray-400 dark:border-gray-600 rounded-[7px] hover:bg-slate-100 dark:hover:bg-gray-700 py-3 px-13 transition-colors duration-200"
      >
        See more
      </Link>
    </div>
  );
};

export default PopularProducts;
