const getDataUser = (state) => state.dataMaster.getDataUser
const getDataPengajuanCuti = (state) => state.dataMaster.getDataPengajuanCuti
const getDataKaryawan = (state) => state.dataMaster.getDataKaryawan


const selectorMaster = {
    getDataKaryawan,
    getDataUser,
    getDataPengajuanCuti,
}

export {
    selectorMaster
}