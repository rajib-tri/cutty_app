import React, { useEffect, useState } from "react";
import { Button, TabelMaster, Row, Col, useDispatch, useSelector } from "components";
import { actionMaster, selectorMaster, utilityAction } from "reduxStore";

const TabelUser = () => {
  const dispatch = useDispatch();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  useEffect(() => {
    dispatch(actionMaster.getDataUser());
  }, [dispatch]);

  

  const handleDelete = (row) => {
    console.log("Menghapus data:", row);
    dispatch(actionMaster.deleteUser(row._id));
  };

  const columns = [
    {
      title: "nama Lengkap",
      dataIndex: "nama_lengkap",
      key: "nama_lengkap",
    },
    {
      title: "No Telepon",
      dataIndex: "no_telepon",
      key: "no_telepon",
    },
    {
      title: "Jabatan",
      dataIndex: "jabatan",
      key: "jabatan",
    },
    {
      title: "Level",
      dataIndex: "level",
      key: "level",
    },
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
              onClick={() => dispatch(
                  utilityAction.modalShow({
                    isModalShow: true,
                    isEdit: true,
                    data: row,
                  })
                )
              }
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

  const DataUser = useSelector(selectorMaster.getDataUser);

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

export default TabelUser;
