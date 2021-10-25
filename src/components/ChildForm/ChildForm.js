import React from 'react';
import { useState, useEffect } from 'react';
import { Title } from '../Title/Title';
// import { Input } from '../Input/Input'
import { ChildrenList } from '../ChildrenList/ChildrenList';
// import { Button } from '../Button/Button'
import { ChildrenItem } from '../ChildrenItem/ChildrenItem';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

export const ChildForm = () => {
  const [childItem, setChildItem] = useState(false);
  // const [childCount, setChildCount] = useState(1)
  const [childrens, setChildrens] = useState([{}]);

  useEffect(() => {
    if (childrens.length > 5) return;
  }, [childrens]);

  const onBtnAddClick = e => {
    setChildItem(true);
    // setChildCount((childCount => childCount + 1 ))
    setChildrens(childrens => childrens.push({}));
  };

  return (
    <div>
      <Title title={'Дети (макс. 5)'} />
      <Button
        type={'button'}
        text={'+ Добавить ребенка'}
        onClickBtn={onBtnAddClick}
      ></Button>
      {/* <Button type={'button'} text={'+ Добавить ребенка'}></Button> */}
      <ChildrenList>
        {/* {childrens.map(child => { */}
          <ChildrenItem>
              <Input label={'Имя'}/>
            <Input label={'Возраст'} />
            <Button type={'button'} text={'Удалить'} />
          </ChildrenItem>;
        {/* })} */}

        {/* <ChildrenItem>
          <Input label={'Имя'} />
          <Input label={'Возраст'} />
          <Button type={'button'} text={'Удалить'} />
        </ChildrenItem> */}
        {/* {setChildItem && } */}
      </ChildrenList>
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

      {/* <Title title={'Дети (макс. 5)'} /> */}
      {/* <form> */}

      {/* </form> */}
    </div>
  );
};
