import FeaturedProducts from "../components/FeaturedProducts";
import GamingExperience from "../components/GamingExperience";
import HeroSection from "../components/HeroSection";
import PopularProducts from "../components/PopularProducts";
import Subscribe from "../components/Subscribe";

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <PopularProducts />
      <FeaturedProducts />
      <GamingExperience />
      <Subscribe />
    </div>
  );
};
