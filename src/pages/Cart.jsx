import { Link } from "react-router-dom";
import { useCart } from "../context/Cartcontext";

const Cart = () => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();

  const getTotal = () =>
    cart.reduce((acc, item) => acc + item.price * item.amount, 0).toFixed(2);

  return (
    <div className="container flex-col mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-5">
        Your Shopping Cart
      </h2>

      {cart.length === 0 ? (
        <div className="text-center mt-10">
          <p className="text-gray-500 font-bold text-2xl md:text-4xl mb-10">
            No Items in Cart, Add Some..
          </p>
          <Link
            to="/"
            className="bg-orange-500 text-white px-4 md:px-6 py-2 md:py-3 rounded hover:bg-orange-600 transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          {/* Table for medium+ screens */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left text-sm uppercase text-gray-600">
                  <th className="py-3 px-4">Product</th>
                  <th className="py-3 px-4">Price</th>
                  <th className="py-3 px-4">Quantity</th>
                  <th className="py-3 px-4">Total</th>
                  <th className="py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-b text-center">
                    <td className="py-4 px-4 flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-contain"
                      />
                      <span className="font-medium">{item.title}</span>
                    </td>
                    <td className="py-4 px-4">${item.price}</td>
                    <td className="py-4 px-4">
                      <button
                        onClick={() => updateQuantity(item.id, item.amount + 1)}
                        className="px-2 py-1 cursor-pointer bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-800 transition rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                      <span className="px-3">{item.amount}</span>
                      <button
                        onClick={() =>
                          item.amount > 1 &&
                          updateQuantity(item.id, item.amount - 1)
                        }
                        className="px-2 py-1 cursor-pointer bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-800 transition rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                    </td>
                    <td className="py-4 px-4">
                      ${(item.price * item.amount).toFixed(2)}
                    </td>
                    <td className="py-4 px-4">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 cursor-pointer hover:underline"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Card layout for mobile */}
          <div className="grid grid-cols-1 gap-4 md:hidden">
            {cart.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg p-4 flex flex-col gap-3 bg-white"
              >
                <div className="flex gap-4 items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                    <p className="text-gray-500">${item.price}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <button
                      onClick={() => updateQuantity(item.id, item.amount + 1)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                    <span className="px-3">{item.amount}</span>
                    <button
                      onClick={() =>
                        item.amount > 1 &&
                        updateQuantity(item.id, item.amount - 1)
                      }
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                  </div>
                  <p className="font-semibold">
                    ${(item.price * item.amount).toFixed(2)}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline self-start"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <p className="text-xl font-semibold mt-5">
            Subtotal: <span className="text-orange-500">${getTotal()}</span>
          </p>

          <div className="flex flex-col md:flex-row gap-3 justify-between items-center mt-10 pt-6">
            <Link
              to="/checkout"
              className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition w-full md:w-auto text-center"
            >
              Proceed to Checkout
            </Link>
            <button
              onClick={clearCart}
              className="text-red-600 cursor-pointer hover:underline text-lg"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
