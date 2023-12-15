import { Card, ModalGlobal, PanelContent, postData, useDispatch } from 'components'
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
                
            } else {
                
                await postData('leave-permissions', {
                    nama_karyawan: data.nama_karyawan,
                    tanggal_mulai: data.tanggal_mulai,
                    tanggal_akhir: data.tanggal_akhir,
                    alasan: data.alasan,
                    tanggal_permohonan: data.tanggal_permohonan,
                });
            
            }

            dispatch(utilityAction.modalHide());
            dispatch(actionMaster.getDataPengajuanCuti());
        } catch (error) {
            console.log(error);
            ToastNotification('info', 'Password Atau Username Salah');
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
