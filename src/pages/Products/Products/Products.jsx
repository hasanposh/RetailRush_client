import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  return (
 <div className="flex flex-col md:flex-row p-4 gap-4">
<div className="w-72 ">
  <div className="bg-customRed flex justify-between items-center">
    <p>Filter By</p>
    <p>Reset</p>
  </div>
</div>
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
