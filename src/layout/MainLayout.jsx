import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";
import NavBar from "../components/common/NavBar";

const MainLayout = () => {
  return (
    <div className="bg-gray-200 ">
      <div className="max-w-screen-xl mx-auto">
        <NavBar />
        <div className="min-h-[calc(100vh-321px)] md:min-h-[calc(100vh-359px)]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
