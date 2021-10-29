import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Title } from '../Title/Title';
import { ChildrenList } from '../ChildrenList/ChildrenList';
import { ChildrenItem } from '../ChildrenItem/ChildrenItem';
import s from './Form.module.css';

export const Form = ({
  onSubmitForm,
  childrens,
  parent,
  onChangeInput,
  childForm,
  onBtnAddClick,
  onBtnRemoveClick,
}) => {
  return (
    <form onSubmit={onSubmitForm} className={s.form}>
      <Title title={'Персональные данные'} />
      <div className={s.ParentInfo}>
        <Input
          className={s.parentInput}
          label={'Имя'}
          name={'nameOfParent'}
          value={parent.nameOfParent}
          onChangeInput={onChangeInput}
        />
        <Input
          className={s.parentInput}
          label={'Возраст'}
          name={'ageOfParent'}
          value={parent.ageOfParent}
          onChangeInput={onChangeInput}
        />
      </div>
      <div>

      {childrens.length !== 5 && (
        <Button
          className={s.Button}
          type={'button'}
          text={'+Добавить ребенка'}
          onClickBtn={onBtnAddClick}
        ></Button>
      )}
      {childForm && (
        <>
          <Title title={'Дети (макс. 5)'} />
          <ChildrenList>
            {childrens.map(el => {
              return (
                <ChildrenItem key={el.id}>
                  {/* <div className={s.childFormInput}> */}
                  <Input
                    label={'Имя'}
                    name={el.name}
                    value={el.valueName}
                    onChangeInput={onChangeInput}
                    className={s.childInput}
                    />

                  {/* </div> */}
                  {/* <div className={s.childFormInput}> */}

                  <Input
                    className={s.childInput}
                    label={'Возраст'}
                    name={el.age}
                    value={el.valueAge}
                    onChangeInput={onChangeInput}
                  />
                  {/* </div> */}
                  <Button
                    className={s.removeBtn}
                    type={'button'}
                    text={'Удалить'}
                    onClickBtn={() => onBtnRemoveClick(el.id)}
                  ></Button>
                </ChildrenItem>
              );
            })}
          </ChildrenList>
          <Button className={s.saveBtn} type={'submit'} text={'Сохранить'}></Button>
        </>
      )}
      </div>

    </form>
  );
};
