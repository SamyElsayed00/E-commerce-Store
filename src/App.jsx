import Header from "./components/Header";
import Footer from "./components/Footer";
import { Home } from "./pages/Home";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Products from "./pages/Products";
import Product from "./pages/Product";
import { ToastContainer } from "react-toastify";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import SellerLayout from "./components/SellerLayout"; // new layout
import SellerAddProduct from "./pages/SellerAddProduct";
import SellerOrders from "./pages/SellerOrders";
import SellerProductList from "./pages/SellerProductList";
import { useTheme } from "./hooks/useTheme";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

function App() {
  const location = useLocation();
  const hideLayout = location.pathname.startsWith("/seller");
  const [mode, setMode] = useTheme();

  return (
    <>
      {!hideLayout && <Header mode={mode} setMode={setMode} />}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Products />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />

        {/* Seller Routes with their own layout */}
        <Route path="/seller" element={<SellerLayout />}>
          <Route
            path="/seller"
            element={<Navigate to="/seller/add" replace />}
          />
          <Route path="add" element={<SellerAddProduct />} />
          <Route path="product-list" element={<SellerProductList />} />
          <Route path="orders" element={<SellerOrders />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer position="top-right" autoClose={1000} />
      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
