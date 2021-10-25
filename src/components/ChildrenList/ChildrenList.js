import React from 'react'
// import { ChildrenItem } from '../ChildrenItem/ChildrenItem'
// import { Input } from "../Input/Input"
// import { Button } from "../Button/Button"

export const ChildrenList = ({children}) => {
    return (
        <ul>
            {children}
          {/* <ChildrenItem>
            <Input label={ 'Имя'}/>
            <Input label={'Возраст'} />
            <Button type={'button'} text={ 'Удалить'}/>
          </ChildrenItem> */}
        </ul>
    )
}
