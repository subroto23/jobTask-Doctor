import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import FindDoctors from "../pages/FindDoctors";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>Page Not Found</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/find-doctors",
        element: <FindDoctors />,
      },
    ],
  },
]);

export default router;
