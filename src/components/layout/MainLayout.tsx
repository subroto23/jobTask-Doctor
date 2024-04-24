import { Outlet } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
