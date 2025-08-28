// ✅ All required imports
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import star_icon from "../assets/star_icon.svg";
import star_dull from "../assets/star_dull_icon.svg";
import heart_icon from "../assets/heart_icon.svg";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { useCart } from "../context/Cartcontext";
import Loader from "../components/Loader";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { loggedInUser } = useAuth();

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!loggedInUser) {
      toast.warn("Login please.");
      return;
    }

    addToCart(product);
    toast.success("Item added to cart");
  };

  const handleBuy = () => {
    if (!loggedInUser) {
      toast.warn("Login please.");
      return;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productRes = await fetch(
          `https://fakestoreapi.com/products/${id}`
        );
        const productData = await productRes.json();
        setProduct(productData);

        const allRes = await fetch("https://fakestoreapi.com/products");
        const allData = await allRes.json();
        setAllProducts(allData);
      } catch (error) {
        console.error("Failed to fetch product data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const getRandomFeatured = () => {
    const filtered = allProducts.filter((item) => item.id !== Number(id));
    return filtered.sort(() => 0.5 - Math.random()).slice(0, 5);
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  if (!product)
    return (
      <div className="text-center py-10 text-red-500">Product not found</div>
    );

  const featured = getRandomFeatured();

  return (
    <div className="container flex-col mt-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        {/* Left Section - Images */}
        <div className="space-y-6">
          <div className="bg-gray-100 dark:bg-neutral-300 rounded-lg overflow-hidden p-4">
            <img
              loading="lazy"
              width="500"
              height="500"
              className="mix-blend-multiply w-full h-auto max-w-[300px] mx-auto object-contain"
              src={product.image}
              alt={product.title}
            />
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-6 gap-x-5">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="cursor-pointer bg-gray-100 dark:bg-neutral-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-orange-500"
                >
                  <img
                    src={product.image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
          </div>
        </div>

        {/* Right Section - Details */}
        <div>
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            {product.title}
          </h1>

          <div className="flex items-center gap-4 mb-4">
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
            <p className="text-gray-500 dark:text-gray-400">
              ({product.rating?.rate ?? 0})
            </p>
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {product.description}
          </p>

          <div className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            ${product.price}
          </div>

          <hr className="bg-gray-300 dark:bg-gray-700 h-[1px] my-6 border-0" />

          {/* Specs */}
          <table className="table-auto w-full max-w-sm text-left mb-8">
            <tbody>
              <tr>
                <td className="py-2 text-gray-600 dark:text-gray-400 font-medium">
                  Brand
                </td>
                <td className="py-2 text-gray-700 dark:text-gray-300">
                  Generic
                </td>
              </tr>
              <tr>
                <td className="py-2 text-gray-600 dark:text-gray-400 font-medium">
                  Category
                </td>
                <td className="py-2 text-gray-700 dark:text-gray-300 capitalize">
                  {product.category}
                </td>
              </tr>
            </tbody>
          </table>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleAddToCart}
              className="cursor-pointer w-full py-3.5 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              Add to Cart
            </button>
            <Link
              to={"/checkout"}
              onClick={handleBuy}
              className="cursor-pointer text-center w-full py-3.5 bg-orange-500 text-white font-medium hover:bg-orange-600 transition"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="w-full my-12 text-center">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-medium text-gray-800 dark:text-gray-100">
            Featured <span className="text-primary">Products</span>
          </h2>
          <div className="w-[150px] h-0.5 bg-primary mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-7 gap-x-14">
          {featured.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="bg-white dark:bg-neutral-900 rounded-lg flex flex-col cursor-pointer h-[350px] justify-between"
            >
              <div className="relative group bg-gray-100 dark:bg-neutral-300 rounded-lg w-full h-52 flex items-center justify-center overflow-hidden">
                <img
                  alt={product.title}
                  loading="lazy"
                  className="object-contain mix-blend-multiply w-[85%] h-[85%] transition-transform duration-300 group-hover:scale-105"
                  src={product.image}
                />
                <img
                  className="bg-white dark:bg-neutral-700 absolute top-2 right-2 w-[22px] h-[22px] p-1 cursor-pointer rounded-full shadow"
                  src={heart_icon}
                  alt="Heart Icon"
                />
              </div>

              <div className="flex flex-col flex-1 justify-between p-3">
                <div className="space-y-1 text-left">
                  <h3 className="font-semibold text-sm sm:text-base line-clamp-2 min-h-[40px] text-gray-800 dark:text-gray-100">
                    {product.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 min-h-[32px]">
                    {product.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
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

                <div className="flex justify-between items-center mt-3">
                  <p className="font-semibold text-[16px] text-gray-800 dark:text-gray-100">
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
          className="w-fit mt-11 mx-auto flex justify-center opacity-60 border-1 border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-[7px] hover:bg-slate-100 dark:hover:bg-gray-700 py-3 px-13 transition-colors duration-200"
        >
          See more
        </Link>
      </div>
    </div>
  );
};

export default Product;
