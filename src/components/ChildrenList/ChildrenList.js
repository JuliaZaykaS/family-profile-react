import s from './ChildrenList.module.css'

export const ChildrenList = ({ children }) => {
  return <ol className={s.ChildrenList}>{children}</ol>;
};
