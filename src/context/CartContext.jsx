import { createContext, useContext, useEffect, useState } from "react";

// Create context
export const cartcontext = createContext();

// Context Provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Load from localStorage initially
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Persist cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const exists = prevCart.find((p) => p.id === item.id);
      if (exists) {
        // If exists, update quantity
        return prevCart.map((p) =>
          p.id === item.id ? { ...p, amount: p.amount + 1 } : p
        );
      }
      return [...prevCart, { ...item, amount: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, amount) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, amount } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <cartcontext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity }}
    >
      {children}
    </cartcontext.Provider>
  );
};

// Hook to use the cart context
export const useCart = () => useContext(cartcontext);
