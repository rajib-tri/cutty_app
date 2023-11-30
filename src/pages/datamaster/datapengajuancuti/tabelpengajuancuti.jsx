import { React,  TabelMaster,  useDispatch, useEffect, useSelector,  } from "components";
// import { ToastNotification } from "components/helper";
import { actionMaster, selectorMaster } from "reduxStore";
const Tabelpengajuancuti = () => {
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actionMaster.getDataPengajuanCuti());
  }, [dispatch]);

  const columns = [
    {
      title: "_Id",
      dataIndex: "_id",
      key: "_id"
    },
   
    {
      title: "Tanggal_mulai",
      dataIndex: "tanggal_mulai",
      key: "tanggal_mulai"
    },
    {
      title: "Tanggal_akhir",
      dataIndex: "tanggal_akhir",
      key: "tanggal_akhir"
    },
    {
      title: "Alasan",
      dataIndex: "alasan",
      key: "alasan"
    },
    {
      title: "Tanggal_permohonan",
      dataIndex: "tanggal_permohonan",
      key: "tanggal_permohonan"
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status"
    },
   
  ];
  

  const Datapengajuancuti = useSelector(selectorMaster.getDataPengajuanCuti);

  // const handleEdit = (record) => {
  //   dispatch(
  //     utilityAction.modalShow({
  //       isModalShow: true,
  //       isEdit: true,
  //       data: record,
  //     })
  //   );
  // };

  // const handleDelete = async (recordId) => {
  //   try {
  //      dispatch(actionMaster.deletepengajuancuti(recordId));
  //      dispatch(actionMaster.getDataPengajuanCuti());
  //     console.log("Data deleted successfully!");
  //   } catch (error) {
  //     ToastNotification("info",error.message || "Terjadi Kesalahan Saat Menghapus Data")
  //     console.error("Error deleting data:", error.message);
  //   }
  // };
  


  return (
    <>
      <TabelMaster rowKey={"_id"} createData={true} columns={columns} dataSource={Datapengajuancuti || []} />

    </>
  );
};

export default Tabelpengajuancuti;
