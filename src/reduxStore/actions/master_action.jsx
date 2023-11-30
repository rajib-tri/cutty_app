import { deletData, getData, postData } from 'components';
import { ToastNotification } from 'components/helper';

export const DATA_USER = 'DATA_USER';
export const DATA_PENGAJUANCUTI = 'DATA_PENGAJUANCUTI';

const getDataPengajuanCuti = () => {
  return async (dispatch) => {
    try {
      const result = await getData('leave-permissions');
      dispatch({
        type: DATA_PENGAJUANCUTI,
        payload: {
          data: result,
        },
      });
    } catch (error) {
      console.error('Error fetching pengajuan cuti data:', error);
      dispatch({
        type: DATA_PENGAJUANCUTI,
        payload: {
          data: [],
        },
      });

      ToastNotification('error', 'Error fetching pengajuan cuti data');
    }
  };
};

const getDataUser = () => {
  return async (dispatch) => {
    try {
      const result = await getData('users');
      dispatch({
        type: DATA_USER,
        payload: {
          data: result,
        },
      });
    } catch (error) {
      console.error('Error fetching user data:', error);
      dispatch({
        type: DATA_USER,
        payload: {
          data: [],
        },
      });

      ToastNotification('error', 'Error fetching user data');
    }
  };
};

const updatePengajuanCuti = (id, data) => {
    return async (dispatch) => {
      try {
        await postData(`leave-permissions/${id}`, data);
        ToastNotification('success', 'Data pengajuan cuti berhasil diubah');
        dispatch(getDataPengajuanCuti());
      } catch (error) {
        console.error('Error updating pengajuan cuti data:', error);
        ToastNotification('error', 'Error updating pengajuan cuti data');
      }
    };
  };

const updateUser = (id, data) => {
  return async (dispatch) => {
    try {
      await postData(`users/${id}`, data);
      ToastNotification('success', 'Data berhasil diubah');
      dispatch(getDataUser());
    } catch (error) {
      console.error('Error updating user data:', error);
      ToastNotification('error', 'Error updating user data');
    }
  };
};

const deleteUser = (id) => {
  return async (dispatch) => {
    try {
      await deletData(`users/${id}`);
      ToastNotification('success', 'Data berhasil dihapus');
      dispatch(getDataUser());
    } catch (error) {
      ToastNotification('error', 'Error fetching user data');
    }
  };
};

const deletepengajuancuti = (id) => {
  return async (dispatch) => {
    try {
      await deletData(`leave-permissions/${id}`);
      ToastNotification('success', 'Data berhasil dihapus');
      dispatch(getDataPengajuanCuti());
    } catch (error) {
      ToastNotification('error', 'Error fetching user data');
    }
  };
};

const actionMaster = {
  getDataUser,
  deletepengajuancuti,
  deleteUser,
  getDataPengajuanCuti,
  updateUser,
  updatePengajuanCuti,
};

export { actionMaster };
