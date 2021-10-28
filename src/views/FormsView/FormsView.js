import React, { useState} from 'react';
import { Form } from '../../components/Form/Form';

export const FormsView = ({ onSubmit }) => {
  const inputNames = [
    { id: 1, name: 'nameOfChild1', age: 'ageOfChild1', valueName: '', valueAge: '' },
    { id: 2, name: 'nameOfChild2', age: 'ageOfChild2', valueName: '', valueAge: '' },
    { id: 3, name: 'nameOfChild3', age: 'ageOfChild3', valueName: '', valueAge: '' },
    { id: 4, name: 'nameOfChild4', age: 'ageOfChild4', valueName: '', valueAge: '' },
    { id: 5, name: 'nameOfChild5', age: 'ageOfChild5', valueName: '', valueAge: '' },
  ];
  const [parent, setParent] = useState({ nameOfParent: '', ageOfParent: '' });
  const [childrens, setChildrens] = useState([]);
  const [childForm, setChildForm] = useState(false);
  const [count, setCount] = useState(0);

  const onSubmitForm = e => {
    e.preventDefault();
    onSubmit(parent, childrens);
    setParent({ nameOfParent: '', ageOfParent: '' });
    setChildrens([]);
    setChildForm(false)
  };

  const onChangeInput = e => {
    const { name, value } = e.currentTarget;

    if (name === 'nameOfParent' || name === 'ageOfParent') {
      return setParent({ ...parent, [name]: value });
    }

    switch (name) {
      case 'nameOfChild1':
        return setChildrens(prev => {
          prev[0] = { ...prev[0], valueName: value }
          return [...prev, ...prev[0]]
        })
      case 'ageOfChild1':
        return setChildrens(prev => {
          prev[0]={ ...prev[0], valueAge: value }
          return [...prev, ...prev[0]]
        }
        );

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
    setChildrens(prev => {
      return [...prev, inputNames[count]];
    });
    setCount(count + 1);
  };

  const onBtnRemoveClick = id => {
    const filteredChildrens = childrens.filter(el => el.id !== id)
    if (filteredChildrens.length === 0) {
      setChildForm(false)
    }
    setChildrens(filteredChildrens)
  }

  return (
    <div>
      <Form
        onSubmitForm={onSubmitForm}
        childrens={childrens}
        parent={parent}
        onChangeInput={onChangeInput}
        onBtnAddClick={onBtnAddClick}
        childForm={childForm}
        onBtnRemoveClick={onBtnRemoveClick}
      />
    </div>
  );
};
