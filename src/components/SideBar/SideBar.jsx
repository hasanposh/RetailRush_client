import { useState } from "react";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-72">
      <div className="bg-customRed text-xl text-white p-2 flex justify-between items-center">
        <p>Filter By</p>
        <button>Reset</button>
      </div>
      <h2 id="">
        <button
          className="flex items-center bg-white justify-between w-full p-3 font-medium rtl:text-right text-gray-500 focus:ring-0 focus:bg-customBlue border-b focus:text-white dark:focus:ring-gray-800 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          onClick={toggleAccordion}
          aria-expanded={isOpen}
          aria-controls="accordion-collapse-body-1"
        >
          <span>Category</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 ${isOpen ? "rotate-180" : ""} shrink-0`}
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
        className={`${isOpen ? "" : "hidden"}`}
        aria-labelledby=""
      >
        <div className="p-5 bg-white dark:bg-gray-900">
          <p>Brand Name</p>
          <p>Category Name</p>
          <p>Price Range</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
