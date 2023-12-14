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
            name="user_id"
            readOnly={
              isEdit ? true : false
            }
            component={ReanderField}
            label="User Id"
            placeholder="Please enter your user id"
           
          />
        </Col>
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
            name="email"
            component={ReanderField}
            label="email"
            placeholder="Please enter your email"
          
          />
        </Col>

        {!isEdit &&
        <Col size="6">
          <Field
            name="password"
            component={ReanderField}
            label="password"
            type="password"
            placeholder="Please enter your password"
            
            /> 
        </Col>
          }
     
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
            name="jabatan"
            component={ReanderSelect  }
            label="Jabatan"
            options={[
              {
                value: "PROGRAMMER",
                label: "PROGRAMMER",
              },
              {
                value: "HRD",
                label: "HRD",
              },
              {
                value: "MANAGER PROGRAMMER",
                label: "MANAGER PROGRAMMER",
              },
              {
                value: "QC",
                label: "QC",
              },
              {
                value: "MANAGER QC",
                label: "MANAGER QC",
              },
            ]}
            placeholder="Please enter your  jabatan"
           
          />
        </Col>
        {/* <Col size="6">
          <Field
            name="Kuota"
            component={ReanderField}
            label="Kuota"
            placeholder="Please enter your Kuota"
           
          />
        </Col> */}
        <Col size="6">
          <Field
            name="level"
            component={ReanderSelect}
            label="Level"
            type="level"
            options={[
              {
                value: "ADMIN",
                label: "ADMIN",
              },
              {
                value: "USER",
                label: "USER",
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
    console.log(state?.utility?.modalShow)
    return {
      isEdit: state?.utility?.modalShow?.isEdit,
      initialValues: {
        email: state?.utility?.modalShow?.data?.email,
        password: state?.utility?.modalShow?.data?.password,
        // Omit password from initialValues if editing
        nama_lengkap: state?.utility?.modalShow?.data?.nama_lengkap,
        user_id: state?.utility?.modalShow?.data?.user_id,
        no_telepon: state?.utility?.modalShow?.data?.no_telepon,
        jabatan: {
          value : state?.utility?.modalShow?.data?.jabatan,
          label : state?.utility?.modalShow?.data?.jabatan,
        },
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
