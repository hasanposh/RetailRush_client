import axios from "axios";
import ProductCard from "../../Products/ProductCard/ProductCard";
import HomeSlider from "../HomeSlider/HomeSlider";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/products`
      );
      setProducts(response.data.products);
      // setCurrentPage(response.data.currentPage);
      // setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <div>
      <HomeSlider />
      <h2 className="text-3xl text-center md:text-4xl font-bold font-PlayfairDisplay md:mb-4">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {products?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
