import { Card, ModalGlobal, PanelContent, postData, putData, useDispatch } from 'components'
import React from 'react'
import TabelPengajuanCuti from './tabelpengajuancuti'
import FormDataPengajuanCuti from './FormDataPengajuanCuti'
import { actionMaster, utilityAction } from 'reduxStore'
import { ToastNotification, getItem } from 'components/helper'


function Datapengajuancuti() {
    const dispatch = useDispatch()


    const simpanData = async (data) => {
        try {

            if (data.id !== undefined) {
                await putData("leave-permissions/" + data.id, {
                    status: data.status?.value,
                    approved_by: getItem("datauser")?.user?.nama_lengkap
                })
            } else {
                await postData('leave-permissions', {
                    nama_lengkap: data.nama_karyawan,
                    tanggal_mulai: data.tanggal_mulai,
                    tanggal_akhir: data.tanggal_akhir,
                    alasan: data.alasan.value,
                    tanggal_permohonan: data.tanggal_permohonan,

                });
            }

            dispatch(utilityAction.modalHide());

            dispatch(actionMaster.getDataPengajuanCuti());
        } catch (error) {
            console.log(error?.response);
            ToastNotification('info', error?.response?.data?.message || "Terjadi Kesalahan Saat Mengirim Data");
        }
        // }

    };

    return (
        <PanelContent title="Data Pengajuan Cuti" headerContent>
            <Card title="Form Submit">
                <TabelPengajuanCuti />
            </Card>

            <ModalGlobal title="Form Data Pengajuan Cuti">
                <FormDataPengajuanCuti onSubmit={(data) => simpanData(data)} />
            </ModalGlobal>
        </PanelContent>
    )
}

export default Datapengajuancuti;
