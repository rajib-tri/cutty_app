import React, { useEffect, useState } from "react";
import { Button, TabelMaster, Row, Col, useDispatch, useSelector } from "components";
import { actionMaster, selectorMaster, utilityAction } from "reduxStore";

const Tabelpengajuancuti = () => {
  const dispatch = useDispatch();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  useEffect(() => {
    dispatch(actionMaster.getDataPengajuanCuti());
  }, [dispatch]);

  const handleEdit = (row) => {
    dispatch(
      utilityAction.modalShow({
        isModalShow: true,
        isEdit: true,
        data: row,
      })
    );
  };

  const handleDelete = (row) => {
    dispatch(actionMaster.getDataPengajuanCuti());
  };

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
      render: (cell, row) => (
        <Row className={`text-center`}>
          <Col size="12" className="mr-3 text-center">
            <Button
              type="button"
              color="info"
              icon="fa-edit"
              onClick={() => handleEdit(row)}
            />
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
