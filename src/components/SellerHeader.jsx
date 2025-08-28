import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import logoDark from "../assets/logoDark.png";
import { useEffect, useState } from "react";

const SellerHeader = () => {
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
  return (
    <header className="flex items-center justify-between mx-auto px-7 m-h-[58.53] border-b border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-3 ">
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
      <Link to={"/"}
      className="text-[15px] bg-gray-700 p-2 px-7 rounded-full text-white"
      >Logout</Link>
    </header>
  );
};

export default SellerHeader;
