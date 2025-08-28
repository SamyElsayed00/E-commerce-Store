import { useEffect, useRef, useState } from "react";
import playstationImg from "../assets/header_playstation_image.png";
import headphoneImg from "../assets/header_headphone_image.png";
import macbookImg from "../assets/header_macbook_image.png";
import arrow_icon from "../assets/arrow_icon.svg";

const ADS = [
  {
    para: "Limited Time Offer 30% Off",
    title: "Experience Pure Sound - Your Perfect Headphones Awaits!",
    btn: "Buy Now",
    link: "Find More",
    arrow: arrow_icon,
    img: headphoneImg,
  },
  {
    para: "Hurry up only few lefts!",
    title: "Next-Level Gaming Starts Here - Discover PlayStation 5 Today!",
    btn: "Shop Now",
    link: "Explore Deals",
    arrow: arrow_icon,
    img: playstationImg,
  },
  {
    para: "Exclusive Deal 40% Off",
    title: "Power Meets Elegance - Apple MacBook Pro is Here for you!",
    btn: "Order Now",
    link: "Learn More",
    arrow: arrow_icon,
    img: macbookImg,
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  // Auto-slide every 3 second
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % ADS.length);
    }, 3000);

    return () => clearInterval(timerRef.current);
  }, []);
  // Manual bullet navigation
  const goToSlide = (i) => {
    setIndex(i);
  };

  return (
    <div className="container flex-col mt-3">
      <div className="relative bg-[rgb(230,233,242)] dark:bg-neutral-800 w-full py-8 rounded-[7px] overflow-hidden">
        {/* Sliding wrapper */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {ADS.map((ad, i) => (
            <div
              key={i}
              className="flex-col-reverse lg:flex-row flex-shrink-0 flex items-center justify-around gap-x-7 w-full px-4"
            >
              {/* Left Content */}
              <div>
                <p className="text-primary dark:text-orange-400 text-[15px] lg:text-[17px]">
                  {ad.para}
                </p>
                <h2 className="max-w-lg text-[25px] lg:text-[40px] leading-8 lg:leading-12 font-bold mt-1 mb-6 dark:text-white">
                  {ad.title}
                </h2>
                <div className="flex gap-2">
                  <button className="text-white cursor-pointer rounded-full  px-8 py-2.5 lg:px-10 mr-3 font-medium bg-primary">
                    {ad.btn}
                  </button>
                  <a
                    className="group flex items-center gap-2 text-gray-700 dark:text-gray-300"
                    href="#"
                  >
                    {ad.link}
                    <img
                      className="group-hover:translate-x-2 duration-200"
                      src={ad.arrow}
                      alt="arrow"
                    />
                  </a>
                </div>
              </div>

              {/* Right Image */}
              <div>
                <img
                  src={ad.img}
                  loading="lazy"
                  width="654"
                  height="747"
                  alt="Product"
                  className="lg:w-72 w-48 mb-10 lg:mb-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Bullets */}
      <div className="flex justify-center mt-6 gap-3">
        {ADS.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-2 h-2 cursor-pointer rounded-full transition-all duration-300 ${
              i === index ? "bg-primary dark:bg-orange-400" : "bg-[#6b72804d]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
