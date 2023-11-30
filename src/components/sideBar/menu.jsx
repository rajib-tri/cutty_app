const menu = [
  {
    path: "/dashboard",
    icon: "nav-icon fas fa-tachometer-alt",
    title: "Dashboard",
  },

  {
    navheader : true,
    title: "MULTI LEVEL EXAMPLE",
  },
  {
    path: "#",
    icon: "nav-icon fas fa-database",
    title: "Data Master",
    children: [
      {
        path: "/data-user",
        title: "Data User",
        is_show: false,
      },
      {
        path: "/data-pengajuan-cuti",
        title: "Data pengajuan cuti",
        is_show: false,
      },
    
    ]
  },

 
];
export default menu;
