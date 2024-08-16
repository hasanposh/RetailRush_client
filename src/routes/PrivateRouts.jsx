import { Navigate, useLocation } from "react-router-dom";
import LoadingPage from "../pages/LoadingPage/LoadingPage";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location);

  if (loading) {
    return <LoadingPage />;
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"} />;
};

PrivateRoutes.propTypes = {
  children: PropTypes.any,
};
export default PrivateRoutes;
