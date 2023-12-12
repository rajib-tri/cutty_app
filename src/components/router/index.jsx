import { Dashboard,  Datauser, Login,  } from "pages";
import Datapengajuancuti from "pages/datamaster/datapengajuancuti";

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
    component: () => <Dashboard />
  },


  {
    path: "/data-user",
    exact: true,
    title: "Form Control",
    component: () => <Datauser />
  },
  {
    path: "/data-pengajuan-cuti",
    exact: true,
    title: "Form Control",
    component: () => <Datapengajuancuti/>
  },
  // {
  //   path: "/data-karyawan",
  //   exact: true,
  //   title: "Form Control",
  //   component: () => <DataKaryawan/>
  // },
  
 
];

export default MenuRoutes;
