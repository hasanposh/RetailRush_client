import SideBar from "../../../components/SideBar/SideBar";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 gap-4">
      <SideBar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <ProductCard />
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

export default Products;
