import React, { useEffect, useState } from "react";
import { Button, TabelMaster, Row, Col, useDispatch, useSelector } from "components";
import { actionMaster, selectorMaster, } from "reduxStore";

const Tabelpengajuancuti = () => {
  const dispatch = useDispatch();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  useEffect(() => {
    dispatch(actionMaster.getDataPengajuanCuti());
  }, [dispatch]);

  const handleDelete = (row) => {
    console.log("Menghapus data:", row);
    dispatch(actionMaster.deletepengajuancuti(row._id));
  };

  const columns = [
    { title: "Nama Karyawan", dataIndex: "nama_karyawan", key: "nama_karyawan" },
    { title: "Tanggal Mulai", dataIndex: "tanggal_mulai", key: "tanggal_mulai" },
    { title: "Tanggal Akhir", dataIndex: "tanggal_akhir", key: "tanggal_akhir" },
    { title: "Alasan", dataIndex: "alasan", key: "alasan" },
    { title: "Tanggal Permohonan", dataIndex: "tanggal_permohonan", key: "tanggal_permohonan" },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      align: "center",
      render: (cell, row) => (
        <Row className={`text-center`}>
          <Col size="12" className="mr-3 text-center">
          &nbsp;
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

  const DataUser = useSelector(selectorMaster.getDataPengajuanCuti);

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
        dataSource={DataUser || []}
        rowSelection={rowSelection}
      />
    </>
  );
};

export default Tabelpengajuancuti;
