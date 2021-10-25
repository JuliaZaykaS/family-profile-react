import React from 'react'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
// import { Title } from '../Title/Title'
// import { ChildForm } from '../ChildForm/ChildForm'
// import { ChildrenList } from '../ChildrenList/ChildrenList'
import { ChildForm } from '../ChildForm/ChildForm'

export const ParentForm = () => {
    return (
        <div>
            {/* <Title title={'Персональные данные'}/> */}
        <form>
            {/* <label>
                Имя
                <input>
                </input>
            </label>
            <label>
                Возраст
                <input>
                </input>
            </label> */}
                <Input label={ 'Имя'}/>
                <Input label={ 'Возраст'}/>
                <Button type={'button'} text={'+'}></Button>
                <ChildForm/>
                {/* <Title title={'Дети (макс. 5)'} />
                <ChildrenList/> */}
                {/* <ChildForm/> */}
                <Button type={'submit'} text={'Сохранить'}></Button>
            </form>
            </div>
    )
}
