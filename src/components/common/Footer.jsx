const Footer = () => {
  return (
    <footer className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/RetailRushLogo.png"
            className="h-16 md:h-20"
            alt="Flowbite Logo"
          />
          <h2 className="self-center text-2xl md:text-3xl font-extrabold whitespace-nowrap text-customRed dark:text-white font-PlayfairDisplay">
            Retail
            <span className="text-customBlue">Rush</span>
          </h2>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2024{" "}
        <a href="" className="hover:underline">
          RetailRush™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
