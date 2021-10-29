// import s from './Button.module.css'
import './Button.module.css';

export const Button = ({ text, type, onClickBtn, className }) => {
//   let classNameBtn = s.button;
//   classNameBtn += ` ${className}`;
  return (
    // <button className={classNameBtn} type={type} onClick={onClickBtn}>
    <button className={className} type={type} onClick={onClickBtn}>
      {text}
    </button>
  );
};
