const LoginButton = () => {
  return (
    <a className="relative px-6 py-3 font-bold text-white rounded-lg group">
      <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-customBlue ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-customRed ease  group-hover:translate-x-0 group-hover:translate-y-0 "></span>
      <span className="relative">Login</span>
    </a>
  );
};

export default LoginButton;
