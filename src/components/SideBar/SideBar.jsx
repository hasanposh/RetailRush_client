import axios from "axios";
import { useEffect, useState } from "react";

const SideBar = ({
  handleReset,
  handlePriceRange,
  handleCategoryChange,
  selectedCategory,
  selectedBrand,
  handleBrandChange,
  handleDateSort,
  selectedDateSort,
  handlePriceSort,
  selectedPriceSort,
}) => {
  const [products, setProducts] = useState([]);
  const uniqueBrands = [
    ...new Set(products?.map((product) => product.brandName)),
  ];
  const uniqueCategories = [
    ...new Set(products?.map((product) => product.category)),
  ];
  const [isOpenBrandName, setIsOpenBrandName] = useState(false);
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenPriceRange, setIsOpenPriceRange] = useState(false);
  const [isOpenSorting, setIsOpenSorting] = useState(false);

  const toggleAccordionBrandName = () => {
    setIsOpenBrandName(!isOpenBrandName);
  };

  const toggleAccordionCategory = () => {
    setIsOpenCategory(!isOpenCategory);
  };

  const toggleAccordionPriceRange = () => {
    setIsOpenPriceRange(!isOpenPriceRange);
  };
  const toggleAccordionSorting = () => {
    setIsOpenSorting(!isOpenSorting);
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/allproducts`
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  // console.log(products);

  return (
    <div className="w-72">
      <div className="bg-customRed text-xl text-white p-2 flex justify-between items-center">
        <p>Filter By</p>
        <button onClick={handleReset}>Reset</button>
      </div>

      <h2>
        <button
          className="flex items-center bg-white justify-between w-full p-3 font-medium rtl:text-right text-gray-500 focus:ring-0 focus:bg-customBlue border-b focus:text-white dark:focus:ring-gray-800 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          onClick={toggleAccordionBrandName}
          aria-expanded={isOpenBrandName}
          aria-controls="accordion-collapse-body-1"
        >
          <span>Brand Name</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 ${
              isOpenBrandName ? "rotate-180" : ""
            } shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-1"
        className={`${isOpenBrandName ? "" : "hidden"}`}
        aria-labelledby=""
      >
        <form className="p-5 bg-white dark:bg-gray-900">
          <select
            onChange={handleBrandChange}
            value={selectedBrand}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {uniqueBrands.map((brand, index) => (
              <option key={index} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </form>
      </div>

      <h2>
        <button
          className="flex items-center bg-white justify-between w-full p-3 font-medium rtl:text-right text-gray-500 focus:ring-0 focus:bg-customBlue border-b focus:text-white dark:focus:ring-gray-800 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          onClick={toggleAccordionCategory}
          aria-expanded={isOpenCategory}
          aria-controls="accordion-collapse-body-2"
        >
          <span>Category</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 ${isOpenCategory ? "rotate-180" : ""} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-2"
        className={`${isOpenCategory ? "" : "hidden"}`}
        aria-labelledby=""
      >
        <form className="p-5 bg-white dark:bg-gray-900">
          <select
            onChange={handleCategoryChange}
            value={selectedCategory}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {uniqueCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </form>
      </div>

      <h2>
        <button
          className="flex items-center bg-white justify-between w-full p-3 font-medium rtl:text-right text-gray-500 focus:ring-0 focus:bg-customBlue border-b focus:text-white dark:focus:ring-gray-800 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          onClick={toggleAccordionPriceRange}
          aria-expanded={isOpenPriceRange}
          aria-controls="accordion-collapse-body-3"
        >
          <span>Price Range</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 ${
              isOpenPriceRange ? "rotate-180" : ""
            } shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-3"
        className={`${isOpenPriceRange ? "" : "hidden"}`}
        aria-labelledby=""
      >
        <form
          onSubmit={handlePriceRange}
          className="p-5 bg-white dark:bg-gray-900 overflow-auto"
        >
          <p>From</p>
          <input name="minPrice" type="number" />
          <p>To</p>
          <input name="maxPrice" type="number" />
          <button
            type="submit"
            className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Search
          </button>
        </form>
      </div>
      <h2>
        <button
          className="flex items-center bg-white justify-between w-full p-3 font-medium rtl:text-right text-gray-500 focus:ring-0 focus:bg-customBlue border-b focus:text-white dark:focus:ring-gray-800 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          onClick={toggleAccordionSorting}
          aria-expanded={isOpenSorting}
          aria-controls="accordion-collapse-body-3"
        >
          <span>Sort By</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 ${isOpenSorting ? "rotate-180" : ""} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-3"
        className={`${isOpenSorting ? "" : "hidden"}`}
        aria-labelledby=""
      >
        <form className="p-5 bg-white dark:bg-gray-900 overflow-auto">
          <p>Upload Date</p>
          <select
            onChange={handleDateSort}
            value={selectedDateSort}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="dateDesc">New to Old</option>
            <option value="dateAsc">Old to New</option>
          </select>
          <p>Price</p>
          <select
            onChange={handlePriceSort}
            value={selectedPriceSort}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="priceDesc">High to Low</option>
            <option value="priceAsc">Low to High</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default SideBar;
