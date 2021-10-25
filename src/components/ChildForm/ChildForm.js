import React from 'react';
import { Title } from '../Title/Title';
// import { Input } from '../Input/Input'
import { ChildrenList } from '../ChildrenList/ChildrenList';
// import { Button } from '../Button/Button'
import { ChildrenItem } from '../ChildrenItem/ChildrenItem';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

export const ChildForm = () => {
  return (
    <div>
      <Title title={'Дети (макс. 5)'} />
      <ChildrenList>
        <ChildrenItem>
          <Input label={'Имя'} />
          <Input label={'Возраст'} />
          <Button type={'button'} text={'Удалить'} />
        </ChildrenItem>
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
