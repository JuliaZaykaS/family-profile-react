import React from 'react'
import { ParentForm } from '../../components/ParentForm/ParentForm'
import { Title } from '../../components/Title/Title'


export const FormsView = () => {
    return (
        <div>
            <Title title={'Персональные данные'}/>
            <ParentForm />

        </div>
    )
}
