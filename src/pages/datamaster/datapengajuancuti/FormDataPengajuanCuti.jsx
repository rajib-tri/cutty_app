
import React from "react";
import { Button, Col, HiiddenFiled, ReanderField, ReanderSelect, Row, converDate } from "components";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

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

        <Col size="6">
          <Field
            name="tanggal_mulai"
            component={ReanderField}
            label="Tanggal_mulai"
            type="date"
            placeholder="Silahkan Masukan tanggal_mulai"
            readOnly={isEdit}
          />
        </Col>
        <Col size="6">
          <Field
            name="tanggal_akhir"
            component={ReanderField}
            label="Tanggal_akhir"
            type="date"
            placeholder="Silahkan Masukan tanggal_akhir"
            readOnly={isEdit}
          />
        </Col>
        <Col size="6">
          <Field
            name="alasan"
            component={ReanderSelect}
            label="Alasan"
            type="alasan"
            options={[
              {
                value: "CUTI LIBURAN",
                label: "CUTI LIBURAN",
              },
            ]}
            placeholder="Silahkan Masukan alasan"
            disabled={isEdit}
          />
        </Col>
        <Col size="6">
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
            <Button title={isEdit ? "Edit" : "Simpan"} color="primary" block />
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
           
            no_telpon: state?.utility?.modalShow?.data?.no_telpon,
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
