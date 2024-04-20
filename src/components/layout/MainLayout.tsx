import { Outlet } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
