import { useCart } from "../context/Cartcontext";

const SellerOrders = () => {
  const { cart } = useCart();
  console.log(cart);

  return (
    <div className="p-4">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        Orders
      </h1>

      {/* 📌 Table View (Desktop & Tablet) */}
      <div className="overflow-x-auto rounded-lg shadow-sm hidden md:block">
        <table className="min-w-full border border-gray-200 dark:border-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
            <tr>
              <th className="px-4 py-3 text-left">Product</th>
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-left">Price</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-600 dark:text-gray-300">
            {cart.map((item) => (
              <tr
                key={item.id}
                className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                {/* Product Info */}
                <td className="px-4 py-3 flex items-center gap-3">
                  <div className="bg-gray-100 dark:bg-gray-700 p-1.5 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p
                      className="truncate max-w-[180px] mb-1"
                      title={item.title}
                    >
                      {item.title}
                    </p>
                    <span className="text-xs text-gray-500">
                      Items: {item.amount}
                    </span>
                  </div>
                </td>

                {/* Category */}
                <td className="px-4 py-3 capitalize">{item.category}</td>

                {/* Price */}
                <td className="px-4 py-3 font-medium text-gray-800 dark:text-gray-100">
                  ${item.price.toFixed(2)}
                </td>

                {/* Status */}
                <td className="px-4 py-3">
                  <span className="px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                    Pending
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 📌 Card View (Mobile) */}
      <div className="grid gap-3 md:hidden">
        {cart.map((item) => (
          <div
            key={item.id}
            className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm flex gap-3"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 object-contain bg-gray-100 dark:bg-gray-700 p-1.5 rounded-lg"
            />
            <div className="flex-1">
              <p className="font-medium truncate" title={item.title}>
                {item.title}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                {item.category}
              </p>
              <p className="text-sm font-semibold">${item.price.toFixed(2)}</p>
              <p className="text-xs text-gray-500">Items: {item.amount}</p>
              <span className="inline-block mt-2 px-2 py-0.5 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                Pending
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerOrders;
