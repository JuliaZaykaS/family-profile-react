import s from './Input.module.css'
export const Input = ({ label, name, value, onChangeInput, className }) => {
  // const { classNameLab, classNameInp } = className
  // console.log(className);
  let classNameInput = s.input
  // let classNameInput = s.label
  classNameInput += ` ${className}`
  // let classNameLabel = s.label
  // classNameLabel += ` ${className}`
  return (
    <label className={s.label}>
    {/* // <label className={classNameInput}> */}
    {/* <label className={classNameLabel}> */}
      <span className={s.labelText}>{label}</span>
      <input
        // className={s.input}
        className={classNameInput}
        type="text"
        name={name}
        value={value}
        onChange={onChangeInput}
      ></input>
    </label>
  );
};
