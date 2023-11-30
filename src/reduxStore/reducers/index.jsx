//Mendaftarkan reducer / Menggabungkan
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import themes from "./thme_reducer";
import utility from "./utility_reduce";
import dataMaster from "./master_reducer";
export default combineReducers({
  dataMaster : dataMaster,
  themes : themes,
  utility: utility,
  form: formReducer
});
