import { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import logoDark from "../assets/logoDark.png";
import user_icon from "../assets/user_icon.svg";
import login_img from "../assets/login.jpg";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import GoUp from "../components/GoUp";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const LINKS = ["/", "Shop", "About Us", "Contact"];

const Header = ({ mode, setMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAccountForm, setShowAccountForm] = useState(false);
  const [showMobileAccountMenu, setShowMobileAccountMenu] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true); // true = login, false = register

  const { loggedInUser, setLoggedInUser } = useAuth();

  const { cart } = useCart();
  useEffect(() => {
    const stored = localStorage.getItem("loggedInUser");
    if (stored) {
      setLoggedInUser(JSON.parse(stored));
    }
  }, [setLoggedInUser]);

  // Handle Logo img in Dark mode
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const updateDark = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    updateDark();

    const observer = new MutationObserver(updateDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Handle Dark Mode
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "system";
    setMode(storedTheme);

    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (storedTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  const RegisterSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Min 6 characters").required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Required"),
  });

  return (
    <header className="container m-h-[58.53] sticky top-0 z-50 border-b border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-4 ">
      {showAccountForm && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-[100]">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-[90%] max-w-md relative text-gray-800 dark:text-white">
            {/* Close Button */}
            <button
              onClick={() => setShowAccountForm(false)}
              className="absolute top-2 right-3 cursor-pointer text-gray-500 hover:text-gray-800 dark:hover:text-white text-lg"
            >
              &times;
            </button>

            {/* Title */}
            <h2 className="text-xl font-semibold mb-4 text-center">
              {isLoginForm ? "Login to Your Account" : "Create a New Account"}
            </h2>

            <Formik
              initialValues={{
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={isLoginForm ? LoginSchema : RegisterSchema}
              onSubmit={(values, { resetForm }) => {
                const storedUsers =
                  JSON.parse(localStorage.getItem("users")) || [];

                if (isLoginForm) {
                  const user = storedUsers.find(
                    (u) =>
                      u.email === values.email && u.password === values.password
                  );
                  if (user) {
                    const logged = { email: values.email };
                    localStorage.setItem(
                      "loggedInUser",
                      JSON.stringify(logged)
                    );
                    setLoggedInUser(logged);
                    toast.success("Login successful!");
                    setShowAccountForm(false);
                  } else {
                    toast.error("Invalid email or password");
                  }
                } else {
                  const exists = storedUsers.find(
                    (u) => u.email === values.email
                  );
                  if (exists) {
                    toast.error("User already exists");
                    return;
                  }

                  const updated = [
                    ...storedUsers,
                    { email: values.email, password: values.password },
                  ];
                  localStorage.setItem("users", JSON.stringify(updated));
                  const logged = { email: values.email };
                  localStorage.setItem("loggedInUser", JSON.stringify(logged));
                  setLoggedInUser(logged);
                  toast.success("Account created successfully!");
                  setShowAccountForm(false);
                }
                resetForm();
              }}
            >
              {({ resetForm }) => (
                <Form className="flex flex-col gap-4">
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="border p-2 rounded"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-sm text-red-500 -mt-3"
                  />

                  <Field
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="border p-2 rounded"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-sm text-red-500 -mt-3"
                  />

                  {!isLoginForm && (
                    <>
                      <Field
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        className="border p-2 rounded"
                      />
                      <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className="text-sm text-red-500 -mt-3"
                      />
                    </>
                  )}

                  <button
                    type="submit"
                    className="bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition cursor-pointer"
                  >
                    {isLoginForm ? "Login" : "Register"}
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    {isLoginForm
                      ? "Don’t have an account?"
                      : "Already have an account?"}{" "}
                    <button
                      type="button"
                      onClick={() => {
                        setIsLoginForm((prev) => !prev);
                        resetForm(); // ← Clears all fields
                      }}
                      className="text-orange-600 font-medium hover:underline cursor-pointer"
                    >
                      {isLoginForm ? "Sign up" : "Log in"}
                    </button>
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}

      {/* Logo */}
      <Link to={"/"}>
        <div className="w-32 h-10 flex items-center justify-center">
          <img
            src={isDark ? logoDark : Logo}
            className={`max-h-full max-w-full object-contain ${
              isDark ? "scale-[2.5]" : ""
            }`}
            alt="Logo"
          />
        </div>
      </Link>

      {/* Desktop Links */}
      <ul className="hidden lg:flex items-center gap-4 lg:gap-8">
        {LINKS.map((link) => (
          <li key={link}>
            <NavLink
              to={`${link.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={({ isActive }) =>
                `transition duration-200 hover:text-gray-900 dark:hover:text-gray-300 ${
                  isActive
                    ? "text-orange-600 font-semibold"
                    : "text-gray-700 dark:text-gray-100"
                }`
              }
            >
              {link === "/" ? "Home" : link}
            </NavLink>
          </li>
        ))}
        <Link
          to={"/seller"}
          className="text-xs cursor-pointer border px-4 py-1.5 rounded-full border-[#e5e7eb] dark:border-gray-600 dark:text-white"
        >
          Seller Dashboard
        </Link>
      </ul>

      {/* Right Icons */}
      <div className="flex items-center gap-4 select-none">
        <select
          value={mode}
          onChange={(e) => {
            const theme = e.target.value;
            setMode(theme);

            if (theme === "dark") {
              document.documentElement.classList.add("dark");
              localStorage.setItem("theme", "dark");
            } else if (theme === "light") {
              document.documentElement.classList.remove("dark");
              localStorage.setItem("theme", "light");
            } else {
              localStorage.removeItem("theme");
              if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                document.documentElement.classList.add("dark");
              } else {
                document.documentElement.classList.remove("dark");
              }
            }
          }}
          className=" cursor-pointer border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm bg-white dark:bg-gray-800 dark:text-white"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System</option>
        </select>
        <Link
          to={"/cart"}
          className="hidden md:block text-gray-700 dark:text-gray-300 relative cursor-pointer"
        >
          <FaShoppingCart size={20} />
          <span className="absolute w-3 h-3 flex justify-center items-center text-[10px] text-white -top-1 -right-2 rounded-full bg-primary">
            {cart.length}
          </span>
        </Link>
        {/* Mobile Menu Toggle */}
        <FaBars
          className="lg:hidden cursor-pointer text-gray-800 dark:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />

        {/* Register/Login Section */}
        {/* Account Section */}
        {loggedInUser ? (
          <>
            <div className="relative ">
              <img
                src={login_img}
                alt="User"
                className="w-7 h-7 rounded-full object-cover cursor-pointer"
                onClick={() => setShowMobileAccountMenu((prev) => !prev)}
              />
              {showMobileAccountMenu && (
                <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-md z-50">
                  <button
                    onClick={() => {
                      localStorage.removeItem("loggedInUser");
                      setLoggedInUser(null);
                      setShowMobileAccountMenu(false);
                      toast.info("Logged out");
                    }}
                    className="block px-4 py-2 text-sm text-red-600 font-bold cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <button
            onClick={() => {
              setShowAccountForm(true);
              setIsLoginForm(true);
            }}
            className="flex items-center gap-x-1.5 hover:text-gray-900 dark:hover:text-gray-300 cursor-pointer"
          >
            <img src={user_icon} alt="User Icon" />
            <span className="hidden lg:block">Login</span>
          </button>
        )}
      </div>

      {/* Mobile Links */}
      <ul
        className={`absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-md flex flex-col gap-4 p-6 transition-all duration-300 ease-in-out z-50 lg:hidden ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {LINKS.map((link) => (
          <li key={link}>
            <NavLink
              to={`${link.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `transition duration-200 hover:text-gray-900 dark:hover:text-gray-300 ${
                  isActive
                    ? "text-orange-600 font-semibold"
                    : "text-gray-700 dark:text-white"
                }`
              }
            >
              {link === "/" ? "Home" : link}
            </NavLink>
          </li>
        ))}

        {/* Cart Icon inside Mobile Menu */}
        <li>
          <Link
            to={"/cart"}
            className="flex items-center gap-2 text-gray-700 dark:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaShoppingCart />
            <span>Cart ({cart.length})</span>
          </Link>
        </li>

        <Link
          to={"/seller"}
          className="text-sm text-center border px-4 py-2 rounded-full border-[#e5e7eb] dark:border-gray-600 dark:text-white"
        >
          Seller Dashboard
        </Link>
      </ul>

      {/* Go Up Btn */}
      <GoUp />
    </header>
  );
};

export default Header;
