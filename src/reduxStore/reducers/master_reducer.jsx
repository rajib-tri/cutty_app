import {
    DATA_USER,
    DATA_PENGAJUANCUTI,
  } from "reduxStore/actions";
  
  const initialState = {
    getDataUser: [],
    getDataPengajuanCuti: [],

  };
  
  const dataMaster = (state = initialState, action) => {
    switch (action.type) {
      case DATA_USER:
        return {
          ...state,
          getDataUser: action.payload.data
        };
        case DATA_PENGAJUANCUTI:
          return {
            ...state,
            getDataPengajuanCuti:action.payload.data,
          };
        default:
          return state;
      }
    };
  
  
  export default dataMaster;
