import ProductCard from "../../Products/ProductCard/ProductCard";
import HomeSlider from "../HomeSlider/HomeSlider";

const HomePage = () => {
  return (
    <div>
      <HomeSlider />
      <h2 className="text-4xl font-bold font-PlayfairDisplay mb-4">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default HomePage;
