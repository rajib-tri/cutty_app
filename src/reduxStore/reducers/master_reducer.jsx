import {
  DATA_USER,
  DATA_PENGAJUANCUTI,
  DATA_KARYAWAN,
} from "reduxStore/actions";

const initialState = {
  getDataUser: [],
  getDataPengajuanCuti: [],
  getDataKaryawan: [], 
};

const dataMaster = (state = initialState, action) => {
  switch (action.type) {
    case DATA_USER:
      return {
        ...state,
        getDataUser: action.payload.data,
      };
    case DATA_PENGAJUANCUTI:
      return {
        ...state,
        getDataPengajuanCuti: action.payload.data,
      };
    case DATA_KARYAWAN:
      return {
        ...state,
        getDataKaryawan: action.payload.data,
      };
    default:
      return state;
  }
};

export default dataMaster;
