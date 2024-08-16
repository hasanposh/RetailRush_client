import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import GoogleLoginBtn from "../../components/buttons/GoogleLoginBtn";

const LoginPage = () => {
  const { signInUser, signInWithGoogle, setLoading } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  // const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(location);
    // console.log(email, password);
    signInUser(email, password)
      .then((request) => {
        console.log(request.user);
        toast("Login Successful");
        navigate(location?.state ? location.state : "/");
        // console.log(location);
      })
      .catch((error) => {
        console.log(error);
        toast("Please Enter a Valid Email & Password");
      });
  };

  const handleGooglelogin = () => {
    signInWithGoogle();
    setLoading(true);
    navigate(location?.state ? location.state : "/");
  };

  return (
    <div className="relative flex  items-center justify-center min-h-[calc(100vh-341px)] bg-center bg-cover bg-[url('https://images.pexels.com/photos/34577/pexels-photo.jpg')]">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center flex-col  gap-3 h-full">
        <form onSubmit={handleSignIn} className="max-w-sm mx-auto">
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-white dark:text-white">
              Your email
            </label>
            <input
              type="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-white dark:text-white">
              Your password
            </label>
            <input
              type="password"
              name="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </button>
          <GoogleLoginBtn handleGooglelogin={handleGooglelogin} />
        </form>
        <h2 className="text-white">
          Dont have any account?{" "}
          <Link to={"/register"} className="hover:text-customBlue">
            Register
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default LoginPage;
