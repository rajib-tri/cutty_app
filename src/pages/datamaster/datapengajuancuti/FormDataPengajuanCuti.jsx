
import React from "react";
import { Button, Col, HiiddenFiled, ReanderField, Row, converDate } from "components";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { ReanderTextArea } from "components/helper";


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
        <Field
            name="alsan"
            component={ReanderTextArea}
            label="Alasan"
            type="date"
            placeholder="Silahkan Masukan Alasan"
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
       
  
        {isEdit ? (
          <Col size="6">
            <Button title="Edit" color="primary"block className="mt-4" />
          </Col>
        ) : (
          <Col size="6">
            <Button title="Save" color="primary" block />
          </Col>
        )}
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
