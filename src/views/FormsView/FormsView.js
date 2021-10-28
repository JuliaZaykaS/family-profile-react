import React, { useState } from 'react';
import { ParentForm } from '../../components/ParentForm/ParentForm';
import { Title } from '../../components/Title/Title';

// export const FormsView = ({ onSubmit }) => {
export const FormsView = ({ onSubmit }) => {
  const inputNames = [
    { name: 'nameOfChild1', age: 'ageOfChild1', valueName: '', valueAge: '' },
    { name: 'nameOfChild2', age: 'ageOfChild2', valueName: '', valueAge: '' },
    { name: 'nameOfChild3', age: 'ageOfChild3', valueName: '', valueAge: '' },
    { name: 'nameOfChild4', age: 'ageOfChild4', valueName: '', valueAge: '' },
    { name: 'nameOfChild5', age: 'ageOfChild5', valueName: '', valueAge: '' },
  ];
  const [parent, setParent] = useState({ nameOfParent: '', ageOfParent: '' });
  const [childrens, setChildrens] = useState([]);
  const [childForm, setChildForm] = useState(false);
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const onSubmitForm = e => {
    e.preventDefault();
    onSubmit(parent, childrens);
    setParent({ nameOfParent: '', ageOfParent: '' });
    setChildrens([]);
  };

  const onChangeInput = e => {
    const { name, value } = e.currentTarget;

    if (name === 'nameOfParent' || name === 'ageOfParent') {
      return setParent({ ...parent, [name]: value });
    }

    switch (name) {
      case 'nameOfChild1':
        return setChildrens(prev => [{ ...prev[0], valueName: value }]);
      case 'ageOfChild1':
        return setChildrens(prev => [{ ...prev[0], valueAge: value }]);

      case 'nameOfChild2':
        return setChildrens(prev => {
          prev[1] = { ...prev[1], valueName: value };
          return [...prev, ...prev[1]];
        });
      case 'ageOfChild2':
        return setChildrens(prev => {
          prev[1] = { ...prev[1], valueAge: value };
          return [...prev, ...prev[1]];
        });

      case 'nameOfChild3':
        return setChildrens(prev => {
          prev[2] = { ...prev[2], valueName: value };
          return [...prev, ...prev[2]];
        });
      case 'ageOfChild3':
        return setChildrens(prev => {
          prev[2] = { ...prev[2], valueAge: value };
          return [...prev, ...prev[2]];
        });

      case 'nameOfChild4':
        return setChildrens(prev => {
          prev[3] = { ...prev[3], valueName: value };
          return [...prev, ...prev[3]];
        });
      case 'ageOfChild4':
        return setChildrens(prev => {
          prev[3] = { ...prev[3], valueAge: value };
          return [...prev, ...prev[3]];
        });

      case 'nameOfChild5':
        return setChildrens(prev => {
          prev[4] = { ...prev[4], valueName: value };
          return [...prev, ...prev[4]];
        });
      case 'ageOfChild5':
        return setChildrens(prev => {
          prev[4] = { ...prev[4], valueAge: value };
          return [...prev, ...prev[4]];
        });

      default:
        break;
    }
  };

  const onBtnAddClick = e => {
    setChildForm(true);
    if (childrens.length > 4) {
      setDisabled(true);
      return;
    }
    setChildrens(prev => {
      return [...prev, inputNames[count]];
    });
    setCount(count + 1);
  };

  return (
    <div>
      {/* <Title title={'Персональные данные'} /> */}
      <ParentForm
        // onSubmit={onSubmitForm}
        // onSubmitForm={onSubmitForm}
        // onSubmitForm={()=>onSubmitForm()}
        childrens={childrens}
        parent={parent}
        // onChangeInput={onChangeInput}
        // onChangeInput={()=>onChangeInput()}
        onBtnAddClick={onBtnAddClick}
        childForm={childForm}
        disabled={disabled}
      />
    </div>
  );
  //   };
};
