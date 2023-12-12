import { Card, ModalGlobal, PanelContent, postData, useDispatch } from 'components'
import React from 'react'
import TabelKaryawan from './tabelkaryawan'
import FormDataKaryawan from './FormDataKaryawan'
import { actionMaster, utilityAction } from 'reduxStore'
import { ToastNotification } from 'components/helper'


function DataKaryawan() {
    const dispatch = useDispatch()

    const simpanData = async (data) => {
      
            try {
                await postData('auth/register', {
                    _id: data._id,
                    email: data.email,
                    password: data.password,
                    no_telepon: data.no_telepon,
                    jabatan_id: data.jabatan_id.value,
                    kuota: data.kuota,  
                    level: data.level.value,
                });

                dispatch(utilityAction.modalHide());
                dispatch(actionMaster.getDataKaryawan());
            } catch (error) {
                console.log(error);
                ToastNotification('info', 'Password Atau Username Salah');
            }

    };

    return (
        <PanelContent title="Data Karyawan" headerContent>
            <Card title="Form Submit">
                <TabelKaryawan />
            </Card>

            <ModalGlobal title="Form Data Karyawan">
                <FormDataKaryawan onSubmit={(data) => simpanData(data)} />
            </ModalGlobal>
        </PanelContent>
    );
}

export default DataKaryawan;
