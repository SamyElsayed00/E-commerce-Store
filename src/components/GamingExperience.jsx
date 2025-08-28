import md_controller_image from "../assets/md_controller_image.png";
import sm_controller_image from "../assets/sm_controller_image.png";
import soundbox_image from "../assets/jbl_soundbox_image.png";
import arrow_icon from "../assets/arrow_icon_white.svg";

const GamingExperience = () => {
  return (
    <div className="container flex-col mb-10">
      <div className="bg-gray-100 dark:bg-gray-800 pl-5 flex flex-col lg:flex-row items-center justify-between w-full rounded-[7px] overflow-hidden">
        {/* Left Image */}
        <div>
          <img
            src={soundbox_image}
            alt="jbl_soundbox_image"
            loading="lazy"
            width="669"
            height="783"
            decoding="async"
            className="max-w-56"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col items-center justify-center text-center space-y-2 px-4 md:px-0">
          <h2 className="text-2xl md:text-[32px] text-title dark:text-white -tracking-wide font-semibold max-w-[280px]">
            Level Up Your Gaming Experience
          </h2>
          <p className="max-w-[343px] font-medium text-subtitle dark:text-gray-300">
            From immersive sound to precise controls—everything you need to win
          </p>
          <button className="group cursor-pointer flex items-center justify-center gap-1 px-12 py-2.5 bg-orange-600 rounded text-white">
            Buy now
            <img
              className="group-hover:translate-x-1 duration-200 transition"
              src={arrow_icon}
              alt="Arrow Icon"
            />
          </button>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={md_controller_image}
            alt="md_controller_image"
            loading="lazy"
            width="1173"
            height="1110"
            decoding="async"
            className="hidden md:block max-w-80"
          />
          <img
            src={sm_controller_image}
            alt="sm_controller_image"
            loading="lazy"
            width="1173"
            height="1110"
            decoding="async"
            className="md:hidden max-w-100"
          />
        </div>
      </div>
    </div>
  );
};

export default GamingExperience;
