import { Dashboard, Datauser, Login, } from "pages";
import Datapengajuancuti from "pages/datamaster/datapengajuancuti";
import { ProtectedRoute } from "./ProtectedRouter";

const MenuRoutes = [
  {
    path: "/",
    exact: true,
    title: "Login",
    component: () => <Login />
  },
  {
    path: "/dashboard",
    exact: true,
    title: "Dashboard",
    component: () => <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  },


  {
    path: "/data-user",
    exact: true,
    title: "Form Control",
    component: () => <ProtectedRoute>
    <Datauser />
    </ProtectedRoute>
  },
  {
    path: "/data-pengajuan-cuti",
    exact: true,
    title: "Form Control",
    component: () => <ProtectedRoute>
     <Datapengajuancuti />
     </ProtectedRoute>
  },
  


];

export default MenuRoutes;
