import React, { useEffect } from "react";
import { Button, TabelMaster, Row, Col, useDispatch, useSelector } from "components";
import {  getItem } from "components/helper";
import { actionMaster, selectorMaster } from "reduxStore";

const TabelUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionMaster.getDataUser());
  }, [dispatch]);


  const columns = [
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Nama_lengkap",
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
      dataIndex: "role_id",
      key: "role_id",
    },
    {
      title: "kuota",
      dataIndex: "kuota",
      key: "kuota",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      align: "center",
      render: (cell, row) => {
          return (
            <Row className={`text-center`}>
              <Col size="12" className="mr-3 text-center">
                <Button type="button" color="danger"  icon="fa-trash" disabled={getItem("datauser").user.email === row.email ? true : false} />
                &nbsp;
                {/* <Button type="button" color="info" icon="fa-edit" onClick={() => handleEdit(row)} /> */}
              </Col>
            </Row>
          );
      },
    },
  ];

  const DataUser = useSelector(selectorMaster.getDataUser);




  return (
    <>
      <TabelMaster rowKey={"_id"} createData={true} columns={columns} dataSource={DataUser || []} />
    </>
  );
};



export default TabelUser;
