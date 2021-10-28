import { Button } from '../Button/Button';
import s from './Navigation.module.css';

export const Navigation = props => {
  const { onBtnPreviewClick, onBtnFormClick } = props;

  return (
    <nav className={s.Navigation}>
      <ul className={s.NavigationList}>
        <li className={s.NavigationItem}>
          <Button
            className={s.NavigationBtn}
            type={'button'}
            text={'Форма'}
            onClickBtn={onBtnFormClick}
          />
        </li>
        <li className={s.NavigationItem}>
          <Button
            className={s.NavigationBtn}
            type={'button'}
            text={'Превью'}
            onClickBtn={onBtnPreviewClick}
          />
        </li>
      </ul>
    </nav>
  );
};
