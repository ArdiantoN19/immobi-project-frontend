import { createBrowserRouter } from "react-router-dom";
import RootLayouts from "../components/layouts/RootLayouts";
import Home from "../pages/Home";
import Karyawan from "../pages/Karyawan";
import NewKaryawan from "../pages/NewKaryawan";

const router = createBrowserRouter([
  {
    element: <RootLayouts />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/karyawan",
        element: <Karyawan />,
      },
      {
        path: "/karyawan/new",
        element: <NewKaryawan />,
      },
    ],
  },
]);

export default router;
