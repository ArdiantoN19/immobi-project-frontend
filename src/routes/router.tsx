import { createBrowserRouter } from "react-router-dom";
import RootLayouts from "../components/layouts/RootLayouts";
import Home from "../pages/Home";
import Karyawan from "../pages/Karyawan";
import NewKaryawan from "../pages/NewKaryawan";
import Department from "../pages/Department";
import Jabatan from "../pages/Jabatan";
import EditKaryawan from "../pages/EditKaryawan";

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
      {
        path: "/karyawan/edit/:id",
        element: <EditKaryawan />,
      },
      {
        path: "/department",
        element: <Department />,
      },
      {
        path: "/jabatan",
        element: <Jabatan />,
      },
    ],
  },
]);

export default router;
