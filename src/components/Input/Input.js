import s from './Input.module.css';
export const Input = ({ label, name, value, onChangeInput, className }) => {
  let classNameInput = s.input;
  classNameInput += ` ${className}`;

  return (
    <label className={s.label}>
      <span className={s.labelText}>{label}</span>
      <input
        className={classNameInput}
        type="text"
        name={name}
        value={value}
        onChange={onChangeInput}
      ></input>
    </label>
  );
};
