import React from 'react';
import { useState } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
// import { Title } from '../Title/Title'
// import { ChildForm } from '../ChildForm/ChildForm'
// import { ChildrenList } from '../ChildrenList/ChildrenList'
import { ChildForm } from '../ChildForm/ChildForm';
import { ChildrenItem } from '../ChildrenItem/ChildrenItem';

export const ParentForm = () => {
    const [childForm, setChildForm] = useState(false);
    const [closedBtn, setClosedBtn] = useState(false)

  const onBtnAddClick = e => {
      setChildForm(true);
      setClosedBtn(true)
    };

    const onBtnSaveClick = e => {
        setChildForm(false)
        setClosedBtn(false)
    }

  return (
    <form>
      <Input label={'Имя'}></Input>
          <Input label={'Возраст'}></Input>
          {!closedBtn &&
          <Button type={'button'} text={'+'} onClickBtn={onBtnAddClick}></Button>

          }
          {/* <Button type={'button'} text={'+ Добавить ребенка'} onClickBtn={onBtnAddClick}></Button> */}
          {childForm && <ChildForm />}
          <ChildrenItem>

          </ChildrenItem>
      <Button type={'submit'} text={'Сохранить'} onClickBtn={onBtnSaveClick}></Button>
    </form>
  );
};
