import { useState } from 'react';
import { Form } from '../../components/Form/Form';
import { Section } from '../../components/Section/Section';

export const FormsView = ({ onSubmit }) => {
  const inputNames = [
    {
      id: 1,
      name: 'nameOfChild1',
      age: 'ageOfChild1',
      valueName: '',
      valueAge: '',
    },
    {
      id: 2,
      name: 'nameOfChild2',
      age: 'ageOfChild2',
      valueName: '',
      valueAge: '',
    },
    {
      id: 3,
      name: 'nameOfChild3',
      age: 'ageOfChild3',
      valueName: '',
      valueAge: '',
    },
    {
      id: 4,
      name: 'nameOfChild4',
      age: 'ageOfChild4',
      valueName: '',
      valueAge: '',
    },
    {
      id: 5,
      name: 'nameOfChild5',
      age: 'ageOfChild5',
      valueName: '',
      valueAge: '',
    },
  ];
  const [parent, setParent] = useState({ nameOfParent: '', ageOfParent: '' });
  const [childrens, setChildrens] = useState([]);
  const [childForm, setChildForm] = useState(false);
  const [count, setCount] = useState(0);

  const updateOneChildName = (childrens, value, id) => {
    let foundChild = childrens.find(el => el.id === id);
    foundChild = { ...foundChild, valueName: value };
    const findChildInx = childrens.findIndex(el => el.id === id);
    childrens.splice(findChildInx, 1, foundChild);
    return [...childrens];
  };

  const updateOneChildAge = (childrens, value, id) => {
    let foundChild = childrens.find(el => el.id === id);
    foundChild = { ...foundChild, valueAge: value };
    const findChildInx = childrens.findIndex(el => el.id === id);
    childrens.splice(findChildInx, 1, foundChild);
    return [...childrens];
  };

  const onSubmitForm = e => {
    e.preventDefault();
    onSubmit(parent, childrens);
    setParent({ nameOfParent: '', ageOfParent: '' });
    setChildrens([]);
    setChildForm(false);
  };

  const onChangeInput = e => {
    const { name, value } = e.currentTarget;

    if (name === 'nameOfParent' || name === 'ageOfParent') {
      return setParent({ ...parent, [name]: value });
    }

    switch (name) {
      case 'nameOfChild1':
        return setChildrens(prev => updateOneChildName(prev, value, 1));

      case 'ageOfChild1':
        return setChildrens(prev => updateOneChildAge(prev, value, 1));

      case 'nameOfChild2':
        return setChildrens(prev => updateOneChildName(prev, value, 2));

      case 'ageOfChild2':
        return setChildrens(prev => updateOneChildAge(prev, value, 2));

      case 'nameOfChild3':
        return setChildrens(prev => updateOneChildName(prev, value, 3));

      case 'ageOfChild3':
        return setChildrens(prev => updateOneChildAge(prev, value, 3));

      case 'nameOfChild4':
        return setChildrens(prev => updateOneChildName(prev, value, 4));

      case 'ageOfChild4':
        return setChildrens(prev => updateOneChildAge(prev, value, 4));

      case 'nameOfChild5':
        return setChildrens(prev => updateOneChildName(prev, value, 5));

      case 'ageOfChild5':
        return setChildrens(prev => updateOneChildAge(prev, value, 5));

      default:
        break;
    }
  };

  const onBtnAddClick = e => {
    setChildForm(true);
    if (count > 4) return;

    setChildrens(prev => {
      const sortedArray = prev.sort((el1, el2) => el1.id - el2.id);

      if (sortedArray.length === 0 || sortedArray[0].id !== 1) {
        return [...prev, inputNames[0]];
      }

      for (let i = 0; i < sortedArray.length; i += 1) {
        if (sortedArray[i].id + 1 !== sortedArray[i + 1]?.id)
          return [...prev, inputNames[i + 1]];
      }

      setCount(count + 1);
    });
  };

  const onBtnRemoveClick = id => {
    const filteredChildrens = childrens.filter(el => el.id !== id);
    if (filteredChildrens.length === 0) {
      setChildForm(false);
    }
    setChildrens(filteredChildrens);
    setCount(count - 1);
  };

  return (
    <Section>
      <Form
        onSubmitForm={onSubmitForm}
        childrens={childrens}
        parent={parent}
        onChangeInput={onChangeInput}
        onBtnAddClick={onBtnAddClick}
        childForm={childForm}
        onBtnRemoveClick={onBtnRemoveClick}
      />
    </Section>
  );
};
