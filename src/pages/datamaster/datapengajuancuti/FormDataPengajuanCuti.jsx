
import React from "react";
import { Button, Col, HiiddenFiled, ReanderField, Row, converDate } from "components";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import TextArea from "antd/lib/input/TextArea";


let FormDataPengajuanCuti = (props) => {
  const { handleSubmit, isEdit } = props;
 

  return (
    <form onSubmit={handleSubmit}>
      <Row>
        {isEdit && 
        
        <>
           <Field
            name="id"
            component={HiiddenFiled}
            type="hidden"
          />
        </>
        }
          <Col size="12">
          <Field
            name="nama_karyawan"
            component={ReanderField}
            label="Nama Karyawan"
            placeholder="Please enter your Nama Karyawan"
           readOnly={isEdit}
          />
        </Col>


        <Col size="6">
          <Field
            name="tanggal_mulai"

            component={ReanderField}
            label="Tanggal Mulai"
            type="date"
            placeholder="Silahkan Masukan tanggal_mulai"
            readOnly={isEdit}
          />
        </Col>
        <Col size="6">
          <Field
            name="tanggal_akhir"
            component={ReanderField}
            label="Tanggal Akhir"
            type="date"
            placeholder="Silahkan Masukan tanggal_akhir"
            readOnly={isEdit}
          />
        </Col>
        
        <Col size="12">
          <TextArea
            name="alasan"
            component={ReanderField}
            label="Alasan"
            placeholder="Please enter your Alasan"
            readOnly={isEdit}
          />
        </Col>

        <Col size="12">
          <Field
            name="tanggal_permohonan"
            component={ReanderField}
            label="Tanggal_permohonan"
            type="date"
            placeholder="Silahkan Masukan tanggal_permohonan"
            readOnly={isEdit}
          />
        </Col>
       
  
          <Col size="6 mt-4">
            <Button title={isEdit ? "Edit" : "Save"} color="primary" block />
          </Col>
      </Row>
    </form>
  );
};


FormDataPengajuanCuti = reduxForm({
    form: "ModalFormDataPengajuanCuti",
    enableReinitialize: true,
    // validate,
})(FormDataPengajuanCuti);
  
export default connect((state) => {
    if (state?.utility?.modalShow?.isEdit === true) {
        return {
          isEdit: state?.utility?.modalShow?.isEdit,
          initialValues: {
           
           
            tanggal_mulai: converDate(state?.utility?.modalShow?.data?.tanggal_mulai),
            tanggal_akhir: converDate(state?.utility?.modalShow?.data?.tanggal_akhir),
            alasan: {
              value: state?.utility?.modalShow?.data?.alasan,
              label: state?.utility?.modalShow?.data?.alasan,
            },
            tanggal_permohonan: converDate(state?.utility?.modalShow?.data?.tanggal_permohonan),
            status: {
              value: state?.utility?.modalShow?.data?.status,
              label: state?.utility?.modalShow?.data?.status,
            },
            id: state?.utility?.modalShow?.data?._id,
          },
        };
      } else {
        return {
          isEdit: false,
        };
      }      
})(FormDataPengajuanCuti);
