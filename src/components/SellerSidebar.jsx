import { NavLink } from "react-router-dom";
import add_icon from "../assets/add_icon.svg";
import order_icon from "../assets/order_icon.svg";
import product_list_icon from "../assets/product_list_icon.svg";

const SellerSidebar = () => {
  const SIDE_LINKS = [
    { img: add_icon, text: "Add Product", to: "/seller/add" },
    {
      img: product_list_icon,
      text: "Product List",
      to: "/seller/product-list",
    },
    { img: order_icon, text: "Orders", to: "/seller/orders" },
  ];

  return (
    <aside className="border-r border-gray-200 dark:border-gray-700 max-w-56 md:w-full min-h-screen bg-white dark:bg-gray-900 shadow-sm">
      <ul className="flex flex-col gap-2 p-4">
        {SIDE_LINKS.map((link) => (
          <li key={link.text}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `flex items-center gap-x-3 p-3 rounded-lg transition-all duration-200 group
                 ${
                   isActive
                     ? "bg-gradient-to-r from-primary/20 to-primary/10 text-primary dark:from-primary/30 dark:to-primary/20 font-medium shadow-sm"
                     : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                 }`
              }
            >
              <img
                className={`max-w-6 max-h-6 transition-transform dark:invert duration-200 group-hover:scale-110 ${
                  link.text === "Orders" ? "invert-[.2]" : ""
                } `} // Hides when viewport < 400px
                src={link.img}
                alt={link.text}
              />

              <span className="hidden md:block">{link.text}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SellerSidebar;
