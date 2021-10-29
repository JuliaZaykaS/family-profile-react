import s from './ProfileView.module.css';
import { Section } from '../../components/Section/Section';
import { Title } from '../../components/Title/Title';
import { ChildrenList } from '../../components/ChildrenList/ChildrenList';
import { ChildrenItem } from '../../components/ChildrenItem/ChildrenItem';
import { PersonInfo } from '../../components/PersonInfo/PersonInfo';

export const ProfileView = ({ parent, childrens }) => {
  return (
    <Section>
      <Title title={'Персональные данные'} />
      {parent.nameOfParent && (
        <PersonInfo name={parent.nameOfParent} age={parent.ageOfParent} />
      )}
      <Title title={'Дети'} />
      {childrens && (
        <ChildrenList>
          {childrens.map((el, index) => {
            return (
              <ChildrenItem key={index}>
                <PersonInfo
                  className={s.childInfo}
                  name={el.valueName}
                  age={el.valueAge}
                />
              </ChildrenItem>
            );
          })}
        </ChildrenList>
      )}
    </Section>
  );
};
