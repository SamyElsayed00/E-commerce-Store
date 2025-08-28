import img from "../assets/boy_with_laptop_image.png";
import redirect_icon from "../assets/redirect_icon.svg";

const FeaturedProducts = () => {
  return (
    <div className="container flex-col mb-10">
      <h2 className="text-3xl font-medium">Featured Products</h2>
      <div className="w-28 h-0.5 bg-orange-600 mt-2"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 mt-12 md:px-14 px-4">
        {[1, 2, 3].map((p, i) => (
          <div key={i} className="relative group">
            <img
              className="group-hover:brightness-75 transition duration-300 w-full h-auto object-cover"
              src={img}
              alt="boy_with_laptop_image"
              loading="lazy"
              width="1020"
              height="1284"
              decoding="async"
            />
            <div className="absolute bottom-0 text-white p-7 group-hover:-translate-y-4 duration-200">
              <h2 className="text-2xl font-medium">Power in Every Pixel</h2>
              <p className="my-3">
                Shop the latest laptops for work, gaming, and more.
              </p>
              <button className="flex gap-x-2 bg-primary px-4 py-2 rounded cursor-pointer">
                Buy now
                <img src={redirect_icon} alt="redirect icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
