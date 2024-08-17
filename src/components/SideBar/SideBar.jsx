import axios from "axios";
import { useEffect, useState } from "react";

const SideBar = ({ handleReset }) => {
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

  const toggleAccordionBrandName = () => {
    setIsOpenBrandName(!isOpenBrandName);
  };

  const toggleAccordionCategory = () => {
    setIsOpenCategory(!isOpenCategory);
  };

  const toggleAccordionPriceRange = () => {
    setIsOpenPriceRange(!isOpenPriceRange);
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
  console.log(products);

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
        <form className="p-5 bg-white dark:bg-gray-900 h-60 overflow-auto">
          <ul>
            {uniqueBrands.map((brand, index) => (
              <li key={brand}>{brand}</li>
            ))}
          </ul>
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
            className={`w-3 h-3 ${
              isOpenCategory ? "rotate-180" : ""} shrink-0`}
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
        <form className="p-5 bg-white dark:bg-gray-900 h-60 overflow-auto">
          <ul>
            {uniqueCategories.map((category, index) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
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
              isOpenPriceRange ? "rotate-180" : ""} shrink-0`}
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
        <form className="p-5 bg-white dark:bg-gray-900 h-40 overflow-auto">
          <ul>
            <li>$0-$100</li>
            <li>$101-$500</li>
            <li>$500-Above</li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default SideBar;
