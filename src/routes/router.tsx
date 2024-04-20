import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import FindDoctors from "../pages/FindDoctors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/find-doctors",
        element: <FindDoctors />,
      },
    ],
  },
]);

export default router;
