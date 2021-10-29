import s from './ChildrenItem.module.css';

export const ChildrenItem = ({ children }) => {
  return <li className={s.ChildrenItem}>{children}</li>;
};
