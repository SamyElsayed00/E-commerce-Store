import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import logoDark from "../assets/logoDark.png";
import { useEffect, useState } from "react";

const Footer = () => {
  const LINKS = ["Home", "About us", "Contact us", "Privacy policy"];

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

  return (
    <div className="container flex-col">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-14 border-b border-gray-500/50 text-gray-500 dark:text-gray-400 dark:border-gray-700">
        {/* Left */}
        <div className="flex flex-col items-center lg:items-start w-full lg:w-4/5">
          <Link to={"/"}>
            <div className="w-32 h-10 mb-4 flex items-center justify-center">
              <img
                src={isDark ? logoDark : Logo}
                className={`max-h-full max-w-full object-contain ${
                  isDark ? "scale-[2.5]" : ""
                }`}
                alt="Logo"
              />
            </div>
          </Link>
          <p className="text-subtitled dark:text-white text-sm text-center lg:text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Center */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div>
            <h2 className="text-black dark:text-white mb-6 font-medium">
              Company
            </h2>
            <ul className="flex flex-col text-sm gap-y-2">
              {LINKS.map((link) => (
                <li
                  key={link}
                  className="hover:translate-x-2 transition duration-200"
                >
                  <a
                    className="hover:text-black dark:hover:text-white"
                    href={`/${link}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right */}
        <div className="w-full lg:w-1/2 flex items-start justify-start md:justify-center">
          <div className="w-full lg:w-fit text-center lg:text-left">
            <h2 className="text-black dark:text-white mb-6 font-medium">
              Get in touch
            </h2>
            <div className="flex flex-col gap-y-2 text-sm">
              <p>+1-234-567-890</p>
              <p>contact@greatstack.dev</p>
            </div>
          </div>
        </div>
      </div>

      <p className="flex justify-center items-center pt-3.5 py-2 text-center text-xs md:text-sm text-gray-500 dark:text-gray-400">
        Copyright 2025 © !T! All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
