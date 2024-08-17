import axios from "axios";
import SideBar from "../../../components/SideBar/SideBar";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";

const Products = () => {
  // const { axiosPublic } = useAxiosPublic;
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchProducts = async (page = 1, search = "") => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/products`,
        {
          params: { page, search },
        }
      );
      setProducts(response.data.products);
      setCurrentPage(response.data.currentPage);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  const handleSearch = () => {
    fetchProducts(1, searchTerm);
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      fetchProducts(page, searchTerm);
    }
  };

  const handleReset = () => {
    setSearchTerm("");
    setCurrentPage(1);
    fetchProducts(); // Fetch default products list
  };

  // console.log(searchTerm)
  return (
    <div className="flex flex-col md:flex-row p-4 gap-4">
      <SideBar handleReset={handleReset} products={products} />
      <div className="space-y-4">
        <div className="relative w-full max-w-xl mx-auto bg-white rounded-full">
          <input
            placeholder="What do you want?"
            className="rounded-full w-full h-16 bg-transparent py-2 pl-8 pr-32 outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-blue-200 focus:border-blue-200"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="absolute inline-flex items-center h-10 px-4 py-2 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none right-3 top-3 bg-blue-600 sm:px-6 sm:text-base sm:font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <svg
              className="-ml-0.5 sm:-ml-1 mr-2 w-4 h-4 sm:h-5 sm:w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            Search
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {products?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        <div className="mt-4">
          <ul className="inline-flex flex-wrap justify-center sm:justify-start">
            {/* Previous Button */}
            <li>
              <button
                className="h-8 px-3 sm:px-5 text-gray-400 font-bold transition-colors duration-150 bg-white border border-r-0 border-gray-500 rounded-l-lg focus:shadow-outline hover:bg-indigo-100"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index}>
                <button
                  className={`h-8 px-3 sm:px-5 ${
                    currentPage === index + 1
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-indigo-600"
                  } font-bold transition-colors duration-150 border border-r-0 border-gray-500 focus:shadow-outline hover:bg-indigo-100`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}

            {/* Next Button */}
            <li>
              <button
                className="h-8 px-3 sm:px-5 text-gray-400 font-bold transition-colors duration-150 bg-white border border-gray-500 rounded-r-lg focus:shadow-outline hover:bg-indigo-100"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Products;
