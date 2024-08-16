import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import GoogleLoginBtn from "../../components/buttons/GoogleLoginBtn";

const RegisterPage = () => {
  const { createUser, signOutUser } = useContext(AuthContext);
  // const [showPassword, setShowPassword] = useState(false);
  // const location = useLocation();
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    // const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // const emailValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // const passwordValidate = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]{6,}$/;

    // if (!emailValidate.test(email)) {
    //   toast("Invalid email address");
    //   return;
    // }

    // if (password.length < 6) {
    //   toast("Password must be at least 6 characters");
    //   return;
    // }

    // if (!passwordValidate.test(password)) {
    //   toast(
    //     "Password must contain at least one Uppercase and one Lowercase letter and one number."
    //   );
    //   return;
    // }
    // console.log(name, photoURL, email, password);
    createUser(email, password)
      .then((request) => {
        const user = request.user;
        updateProfile(user, { displayName: name, photoURL: "null" }).then(
          () => {
            // console.log("Display name set successfully");
          }
        );
        // console.log(request.user);
        toast("Registered Successfully");
        signOutUser();
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        // const errorMessage = error.message;
        const errorCode = error.code;
        toast(errorCode);
      });
  };

  return (
    <div className="relative flex  items-center justify-center  min-h-[calc(100vh-341px)] bg-center bg-cover bg-[url('https://images.pexels.com/photos/4449785/pexels-photo-4449785.jpeg')]">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center flex-col  gap-3 h-full">
        <form onSubmit={handleSignUp} className="max-w-sm mx-auto">
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-white dark:text-white">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required
            />
          </div>
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
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register
          </button>

          <GoogleLoginBtn />
        </form>
        <h2 className="text-white">
          Already have an account?{" "}
          <Link to={"/login"} className="hover:text-customBlue">
            Login
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default RegisterPage;
