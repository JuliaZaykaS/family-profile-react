import React from 'react'
import { Footer } from '../../components/Footer/Footer'
// import { ParentForm } from '../../components/ParentForm/ParentForm'
// import { Button } from '../../components/Button/Button'
import { Title } from '../../components/Title/Title'
import { ChildrenList } from '../../components/ChildrenList/ChildrenList'
import { ChildrenItem } from '../../components/ChildrenItem/ChildrenItem'
import { PersonInfo } from '../../components/PersonInfo/PersonInfo'

export const ProfileView = ({parent, childrens}) => {
    return (
        <div>

            <Title title={'Персональные данные'} />
            <PersonInfo name={parent.nameOfParent} age={parent.ageOfParent}/>
            <Title title={'Дети (макс. 5)'} />
            <ChildrenList>
                {
                    childrens.map((el, index) => {
                        return (

                <ChildrenItem key={index}>
                    <PersonInfo name={el.valueName} age={el.valueAge }/>
                </ChildrenItem>
                        )

                    })

                }
            </ChildrenList>


            {/* <ParentForm /> */}

          <Footer />
        </div>
    )
}
