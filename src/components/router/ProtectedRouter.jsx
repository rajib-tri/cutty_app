import { getItem } from "components/helper";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {Redirect} from "react-router-dom"
import { actionTheme } from "reduxStore";
export const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (getItem("datauser").length !== 0) {
      dispatch(actionTheme.handleSetPageHeader(true));
      dispatch(actionTheme.handleSetPageSidebar(true));
      dispatch(actionTheme.handleSetFooter(true));
      dispatch(actionTheme.handleSetContent(true));
    }
  }, [dispatch]);
  if (getItem("datauser").length === 0) {
    return <Redirect to="/" />;
  }
  return children;
};