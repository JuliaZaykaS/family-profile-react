import React from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Title } from '../Title/Title'
import { ChildrenList } from '../ChildrenList/ChildrenList'
import { ChildrenItem } from '../ChildrenItem/ChildrenItem';

export const Form = ({onSubmitForm, childrens, parent, onChangeInput, childForm, onBtnAddClick, onBtnRemoveClick}) => {
  return (
    <form onSubmit={onSubmitForm}>
      <Title title={'Персональные данные'} />
      <Input label={'Имя'} name={'nameOfParent' } value={parent.nameOfParent} onChangeInput={onChangeInput} />
      <Input label={'Возраст'} name={'ageOfParent' } value={parent.ageOfParent} onChangeInput={onChangeInput} />

      {childrens.length !== 5 &&
        <Button type={'button'} text={'+Добавить ребенка'} onClickBtn={onBtnAddClick}></Button>
      }
      {childForm && (
        <React.Fragment>
          <Title title={'Дети'} />
          <ChildrenList>
            {childrens.map((el) => {
              return (
                <ChildrenItem key={el.id}>
                  <Input label={'Имя'} name={el.name} value={el.valueName} onChangeInput={onChangeInput} />
                  <Input label={'Возраст'} name={el.age} value={el.valueAge} onChangeInput={onChangeInput} />
                  <Button type={'button'} text={'Удалить'} onClickBtn={()=>onBtnRemoveClick(el.id)}></Button>
                </ChildrenItem>
              )
            })}
          </ChildrenList>
          <Button type={'submit'} text={'Сохранить'}></Button>
        </React.Fragment>
      )}
      </form>

  );
};
