import { Card, ModalGlobal, PanelContent, postData,  putData,  useDispatch } from 'components'
import React from 'react'
import TabelUser from './tabeluser'
import FormDataUser from './FormDataUser'
import { actionMaster, utilityAction } from 'reduxStore'
import { ToastNotification } from 'components/helper'

function Datauser() {
    const dispatch = useDispatch()

    const simpanData = async (data) => {
        try {
            if(data.id !== undefined){
                const _id = data.id
                await putData(`user/${_id}`, {
                    email: data.email,
                    nama_lengkap:data.nama_lengkap,
                    password: data.password,
                    no_telepon: data.no_telepon,
                    jabatan: data.jabatan.value,
                    level: data.level.value,
                    kuota: 12,
                })
            }else{
                await postData('user', {
                    user_id: data.user_id,
                    email: data.email,
                    nama_lengkap:data.nama_lengkap,
                    password: data.password,
                    no_telepon: data.no_telepon,
                    jabatan: data.jabatan.value,
                    level: data.level.value,
                    kuota: 12,
                    // kuota: data.kuota,
                });
            }

            dispatch(utilityAction.modalHide());
            dispatch(actionMaster.getDataUser());
        } catch (error) {
            console.log(error);
            ToastNotification('info', 'Password Atau Username Salah');
        }

    };

    return (
        <PanelContent title="Data User" headerContent>
            <Card title="Form Submit">
                <TabelUser  />
            </Card>

            <ModalGlobal title="Form Data User">
                <FormDataUser onSubmit={(data) => simpanData(data)} />
            </ModalGlobal>
        </PanelContent>
    );
}

export default Datauser;
