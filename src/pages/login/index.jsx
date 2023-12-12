import { React, postData, useDispatch, useEffect } from "components";
import { actionTheme, utilityAction } from "reduxStore";
import { withRouter } from "react-router-dom";
import FormLogin from "./form";
import { ToastNotification, getItem, setItem } from "components/helper";

const Login = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if(getItem("datauser")?.accessToken !== undefined){
      props.history.push("/dashboard");
    }
    dispatch(actionTheme.handleSetPageSidebar(false));
    dispatch(actionTheme.handleSetFooter(false));
    dispatch(actionTheme.handleSetPageHeader(false));
    return () => {
      dispatch(actionTheme.handleSetPageHeader(true));
      dispatch(actionTheme.handleSetPageSidebar(true));
      dispatch(actionTheme.handleSetFooter(true));
      dispatch(actionTheme.handleSetPageHeader(true));
    };
    // eslint-disable-next-line
  }, [dispatch]);

  const handleSubmit = async (data) => {
    // console.log(data);
    try {
      let response = await postData("auth/login", {
        email : data.email,
        password : data.password,
      })

      

      if (response) {
        setItem("datauser", response);


        dispatch(utilityAction.setProgres());
        dispatch(
          utilityAction.setLoading({
            content: true,
            button: true,
          })
        );
        setTimeout(() => {
          dispatch(utilityAction.stopLoading());
          props.history.push("/dashboard");
        }, 4000);
      } else {
        ToastNotification("info", "Password Atau Username Salah");
      }
    } catch (error) {
      console.log(error);
      ToastNotification("info", "Password Atau Username Salah");
    }
  };

  return (
    <div className="login-box container" style={{ marginTop: "10%" }}>
      <div className="card card-outline card-primary">
        <div className="card-header text-center">
          <div className="h1">
            <b>LOGIN</b>CUTI
          </div>
        </div>
        <div className="card-body">
          <p className="login-box-msg">Sign in to start your session</p>
          <FormLogin onSubmit={(data) => handleSubmit(data)} />
        </div>
      </div>
    </div>
  );
};


export default withRouter(Login);
