import { Card, ModalGlobal, PanelContent, postData, putData, useDispatch } from 'components'
import React from 'react'
import TabelPengajuanCuti from './tabelpengajuancuti'
import FormDataPengajuanCuti from './FormDataPengajuanCuti'
import { actionMaster, utilityAction } from 'reduxStore'
import { ToastNotification, } from 'components/helper'


function Datapengajuancuti() {
    const dispatch = useDispatch()
    const simpanData = async (data) => {
        try {
            if(data.id !== undefined){
                await putData(`leave-permissions/${data.id}`, {
                    status: data.status.value
                });
            } else {
                await postData('leave-permissions', {
                    nama_karyawan: data.nama_karyawan,
                    tanggal_mulai: data.tanggal_mulai,
                    tanggal_akhir: data.tanggal_akhir,
                    alasan: data.alasan,
                    tanggal_permohonan: data.tanggal_permohonan,
                    status: data.status.value,
                });
            }

            dispatch(utilityAction.modalHide());
            dispatch(actionMaster.getDataPengajuanCuti());
        } catch (error) {
            console.log(error);
            ToastNotification('info', 'Terdapat Kesalahan Server');
        }

    };

    return (
        <PanelContent title=" Data Pengajuan Cuti" headerContent>
            <Card title="Form Submit">
                <TabelPengajuanCuti  />
            </Card>

            <ModalGlobal title="Form Data Pengajuan Cuti">
                <FormDataPengajuanCuti onSubmit={(data) => simpanData(data)} />
            </ModalGlobal>
        </PanelContent>
    );
}

export default Datapengajuancuti;
