import s from './Title.module.css';

export const Title = ({ title }) => {
  return <h2 className={s.title}>{title}</h2>;
};
