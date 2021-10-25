import React from 'react'
import { Footer } from '../../components/Footer/Footer'
// import { ParentForm } from '../../components/ParentForm/ParentForm'
// import { Button } from '../../components/Button/Button'
import { Title } from '../../components/Title/Title'
import { ChildrenList } from '../../components/ChildrenList/ChildrenList'
import { ChildrenItem } from '../../components/ChildrenItem/ChildrenItem'
import { PersonInfo } from '../../components/PersonInfo/PersonInfo'

export const ProfileView = () => {
    return (
        <div>

            <Title title={'Персональные данные'} />
            <PersonInfo name={'Василий'} age={'30 лет' }/>
            <Title title={'Дети (макс. 5)'} />
            <ChildrenList>
                <ChildrenItem>
                    <PersonInfo name={'Василий'} age={'14 лет' }/>
                </ChildrenItem>
            </ChildrenList>


            {/* <ParentForm /> */}

          <Footer />
        </div>
    )
}
