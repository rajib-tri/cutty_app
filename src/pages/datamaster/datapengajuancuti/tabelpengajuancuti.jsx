import React, { useEffect, useState } from "react";
import { Button, TabelMaster, Row, Col, useDispatch, useSelector } from "components";
import { actionMaster, selectorMaster, utilityAction } from "reduxStore";

const TabelPengajuanCuti = () => {
  const dispatch = useDispatch();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  useEffect(() => {
    dispatch(actionMaster.getDataPengajuanCuti());
  }, [dispatch]);

  const handleDelete = (row) => {
    console.log("Menghapus data:", row);
    dispatch(actionMaster.deletePengajuanCuti(row._id)); // Updated action name
  };

  const columns = [
    { title: "Nama Karyawan", dataIndex: "nama_karyawan", key: "nama_karyawan" },
    { title: "Tanggal Mulai", dataIndex: "tanggal_mulai", key: "tanggal_mulai" },
    { title: "Tanggal Akhir", dataIndex: "tanggal_akhir", key: "tanggal_akhir" },
    { title: "Alasan", dataIndex: "alasan", key: "alasan" },
    { title: "Tanggal Permohonan", dataIndex: "tanggal_permohonan", key: "tanggal_permohonan" },
    { title: "Status", dataIndex: "status", key: "status" },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      align: "center",
      render: (cell, row) => (
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
                    data: row,
                  })
                )
              }
            />
            <Button
              type="button"
              color="danger"
              icon="fa-trash"
              onClick={() => handleDelete(row)}
            />
          </Col>
        </Row>
      ),
    },
  ];

  const dataPengajuanCuti = useSelector(selectorMaster.getDataPengajuanCuti); // Updated variable name

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedKeys) => setSelectedRowKeys(selectedKeys),
  };

  return (
    <>
      <TabelMaster
        rowKey={"_id"}
        createData={true}
        columns={columns}
        dataSource={dataPengajuanCuti || []}
        rowSelection={rowSelection}
      />
    </>
  );
};

export default TabelPengajuanCuti;
