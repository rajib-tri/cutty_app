import React, { useEffect } from "react";
import { Button, TabelMaster, Row, Col, useDispatch, useSelector } from "components";
import { actionMaster, selectorMaster, utilityAction } from "reduxStore"; 
const Tabelpengajuancuti = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionMaster.getDataPengajuanCuti());
  }, [dispatch]);

  const columns = [
    { title: "Tanggal_permohonan", dataIndex: "tanggal_permohonan", key: "tanggal_permohonan" },
    { title: "Nama Karyawan", dataIndex: "nama_lengkap", key: "nama_lengkap" },
    { title: "Tanggal_mulai", dataIndex: "tanggal_mulai", key: "tanggal_mulai" },
    { title: "Tanggal_akhir", dataIndex: "tanggal_akhir", key: "tanggal_akhir" },
    { title: "Alasan", dataIndex: "alasan", key: "alasan" },
  
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      align: "center",
      render: (cell, row) => {
        return (
          <Row className={`text-center`}>
            <Col size="12" className="mr-3 text-center">
              <Button
                type="button"
                color="info"
                icon="fa-edit"
                onClick={() =>
                  dispatch(
                    utilityAction.modalShow({
                      isModalShow: true,
                      isEdit: true,
                      data: row
                    })
                  )
                }
              />
            </Col>
          </Row>
        );
      },
    },
  ];

  const Datapengajuancuti = useSelector(selectorMaster.getDataPengajuanCuti);

  return (
    <>
      <TabelMaster rowKey={"_id"} createData={true} columns={columns} dataSource={Datapengajuancuti || []} />
    </>
  );
};

export default Tabelpengajuancuti;
