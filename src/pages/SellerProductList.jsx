import { Link } from "react-router-dom";
import redirect_icon from "../assets/redirect_icon.svg";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const SellerProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );

  return (
    <div className="p-3">
      <div>
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">
          All Products
        </p>
        <div className="overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
          <table className="table-auto w-full">
            <thead className="bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm font-medium border-b border-gray-300 dark:border-gray-700">
              <tr>
                <th className="px-4 py-3 text-left">Product</th>
                <th className="px-4 py-3 text-left max-sm:hidden">Category</th>
                <th className="px-4 py-3 text-left">Price</th>
                <th className="px-4 py-3 text-left max-sm:hidden">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-600 dark:text-gray-300">
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  {/* Product Name + Image */}
                  <td className="px-4 py-3 flex items-center gap-3">
                    <div className="bg-gray-100 dark:bg-gray-700 p-1.5 rounded-lg">
                      <img
                        src={product.image}
                        alt={product.title}
                        loading="lazy"
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <p className="truncate max-w-[180px]" title={product.title}>
                      {product.title}
                    </p>
                  </td>

                  {/* Category */}
                  <td className="px-4 py-3 capitalize max-sm:hidden">
                    {product.category}
                  </td>

                  {/* Price */}
                  <td className="px-4 py-3 font-medium text-gray-800 dark:text-gray-100">
                    ${product.price.toFixed(2)}
                  </td>

                  {/* Action Button */}
                  <td className="px-4 py-3 max-sm:hidden">
                    <Link
                      to={`/product/${product.id}`}
                      className="flex items-center gap-2 px-3 py-1.5 w-fit bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                    >
                      <span className="hidden md:block">View</span>
                      <img
                        src={redirect_icon}
                        alt="View product"
                        className="w-4 h-4"
                      />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SellerProductList;
