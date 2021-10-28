import React from 'react';
import { Button } from '../Button/Button';

export const Navigation = props => {
  const { onBtnPreviewClick, onBtnFormClick } = props;

  return (
    <nav>
      <ul>
        <li>
          <Button type={'button'} text={'Форма'} onClickBtn={onBtnFormClick} />
        </li>
        <li>
          <Button
            type={'button'}
            text={'Превью'}
            onClickBtn={onBtnPreviewClick}
          />
        </li>
      </ul>
    </nav>
  );
};
