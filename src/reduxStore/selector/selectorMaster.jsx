const getDataUser = (state) => state.dataMaster.getDataUser
const getDataPengajuanCuti = (state) => state.dataMaster.getDataPengajuanCuti


const selectorMaster = {
    getDataUser,
    getDataPengajuanCuti,
}

export {
    selectorMaster
}