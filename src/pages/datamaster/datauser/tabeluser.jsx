import React, { useEffect, useState } from "react";
import { Button, TabelMaster, Row, Col, useDispatch, useSelector, deletData } from "components";
import { ToastNotification } from "components/helper";
import { actionMaster, selectorMaster } from "reduxStore";

const TabelUser = () => {
  const dispatch = useDispatch();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  useEffect(() => {
    dispatch(actionMaster.getDataUser());
  }, [dispatch]);

  const handleDelete = async (data) => {
    try {
      await deletData('users/' + data.nama_lengkap, {
      });
      dispatch(actionMaster.getDataUser());
      ToastNotification('info', 'Data Berhasil Dihapus');
    } catch (error) {
      console.log(error);
      ToastNotification('info', 'Data Gagal Dihapus');
    }
    setSelectedRowKeys([]);
  };

  const onSelectChange = (selectedKeys) => {
    setSelectedRowKeys(selectedKeys);
  };

  const columns = [

    {
      title: "nama_lengkap",
      dataIndex: "nama_lengkap",
      key: "nama_lengkap",
    },
    {
      title: "No_telepon",
      dataIndex: "no_telepon",
      key: "no_telepon",
    },
    {
      title: "Jabatan",
      dataIndex: "jabatan",
      key: "jabatan",
    },
    // {
    //   title: "kuota",
    //   dataIndex: "kuota",
    //   key: "kuota",
    // },
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
              color="danger"
              icon="fa-trash"
              onClick={() => handleDelete(row)}

            // disabled={getItem("datauser").user.email === row.email ? true : false}
            />
            &nbsp;
            {/* <Button type="button" color="info" icon="fa-edit" onClick={() => handleEdit(row)} /> */}
          </Col>
        </Row>
      ),
    },
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const DataUser = useSelector(selectorMaster.getDataUser);

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




