import moment from "moment";

const ProductCard = ({ product }) => {
  // const [timeAgo, setTimeAgo] = useState("");
  const {
    productName,
    brandName,
    productImage,
    description,
    price,
    category,
    ratings,
    creationDate,
  } = product;

  const formattedDate = moment.utc(product.creationDate).add(6, 'hours').fromNow();


  // console.log(timeAgo);

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className=" rounded-t-lg" src={productImage} alt="product image" />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {productName}
          </h5>
        </a>
        <a href="#">
          <h5 className="text-base font-semibold tracking-tight text-customBlue dark:text-white">
            {brandName}
          </h5>
        </a>

        <h5 className="text-sm font-semibold tracking-tight dark:text-white">
          {description}
        </h5>
        <p className="text-sm">Uploaded {formattedDate}</p>
        <div className="flex items-center mt-2.5 mb-5">
         Rating:
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {ratings}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
