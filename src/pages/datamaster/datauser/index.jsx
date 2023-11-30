import { Card, ModalGlobal, PanelContent, postData,  useDispatch } from 'components'
import React from 'react'
import TabelUser from './tabeluser'
import FormDataUser from './FormDataUser'
import { actionMaster, utilityAction } from 'reduxStore'
import { ToastNotification } from 'components/helper'

function Datauser() {
    const dispatch = useDispatch()

    const simpanData = async (data) => {
      
            try {
                await postData('auth/register', {
                    email: data.email,
                    password: data.password,
                    
                    no_telepon: data.no_telepon,
                    jabatan_id: data.jabatan_id,
                    kuota: data.kuota,
                    level: data.level.value,
                });

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
