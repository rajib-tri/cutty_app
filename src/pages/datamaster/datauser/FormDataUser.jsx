import { Button, Col, HiiddenFiled, ReanderField, ReanderSelect, Row } from "components";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

let FormDataUser = (props) => {
  const { handleSubmit, isEdit } = props;
  // const dispatch = useDispatch();

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
            name="email"
            component={ReanderField}
            label="Email"
            type="email"
            placeholder="Please enter your email address"
          />
        </Col>
        <Col size="6">
          <Field
            name="no_telepon"
            component={ReanderField}
            label="Phone Number"
            type="number"
            placeholder="Please enter your phone number"
            
            />
            </Col>
            <Col size="6">
              <Field
                name="kuota"
                component={ReanderField}
                label="Kuota"
                type="kuota"
                placeholder="Please enter your kuota"
               
              />
        </Col>
        {!isEdit && (
          <Col size="6">
            <Field
              name="password"
              component={ReanderField}
              label="Password"
              type="password"
              placeholder="Please enter your password"
             
            />
          </Col>
        )}
        <Col size="6">
          <Field
            name="nama_lengkap"
            component={ReanderField}
            label="Nama Lengkap"
            placeholder="Please enter your full name"
           
          />
        </Col>
        <Col size="6">
          <Field
            name="jabatan_id"
            component={ReanderField}
            label="Jabatan_id"
            placeholder="Please enter your full jabatan"
           
          />
        </Col>
        <Col size="6">
          <Field
            name="level"
            component={ReanderSelect}
            label="Level"
            type="level"
            options={[
              {
                value: "admin",
                label: "Admin",
              },
              {
                value: "user",
                label: "User",
              },
            ]}
            placeholder="Please select your level"
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

FormDataUser = reduxForm({
  form: "ModalFormDataUser",
  enableReinitialize: true,
//   validate,
})(FormDataUser);

export default connect((state) => {
  if (state?.utility?.modalShow?.isEdit === true) {
    return {
      isEdit: state?.utility?.modalShow?.isEdit,
      initialValues: {
        email: state?.utility?.modalShow?.data?.email,
        // Omit password from initialValues if editing
        nama_lengkap: state?.utility?.modalShow?.data?.nama_lengkap,
        no_telepon: state?.utility?.modalShow?.data?.no_telepon,
        role_id: state?.utility?.modalShow?.data?.role_id,
        level: {
          value : state?.utility?.modalShow?.data?.level,
          label : state?.utility?.modalShow?.data?.level
        },
        id: state?.utility?.modalShow?.data?._id,
      },
    };
  } else {
    return {
      isEdit: false,
    };
  }
})(FormDataUser);
