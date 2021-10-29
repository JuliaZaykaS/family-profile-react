import React, { useState } from 'react';
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

  //

  // const [child1, setChild1] = useState({ id: 1, name: 'nameOfChild1', age: 'ageOfChild1', valueName: '', valueAge: '' });
  // const [child2, setChild2] = useState({ id: 2, name: 'nameOfChild2', age: 'ageOfChild2', valueName: '', valueAge: '' });
  // const [child3, setChild3] = useState({ id: 3, name: 'nameOfChild3', age: 'ageOfChild3', valueName: '', valueAge: '' });
  // const [child4, setChild4] = useState({ id: 4, name: 'nameOfChild4', age: 'ageOfChild4', valueName: '', valueAge: '' });
  // const [child5, setChild5] = useState({ id: 5, name: 'nameOfChild5', age: 'ageOfChild5', valueName: '', valueAge: '' });
  // console.log('child1',child1);
  // const childs = [child1, child2, child3, child4, child5]
  // console.log('childs' ,childs);

  const updateOneChildName = (childrens, value, id) => {
    let foundChild = childrens.find(el => el.id === id);
    foundChild = { ...foundChild, valueName: value };
    const findChildInx = childrens.findIndex(el => el.id === id);
    console.log('findChild', foundChild);
    const a = childrens.splice(findChildInx, 1, foundChild);
    console.log(a);
    return a
    // return childrens.splice(findChildInx, 1, foundChild);
  };
  const updateOneChildAge = (childrens, value, id) => {
    let foundChild = childrens.find(el => el.id === id);
    foundChild = { ...foundChild, valueAge: value };
    const findChildInx = childrens.findIndex(el => el.id === id);
    console.log('findChild', foundChild);
    // return childrens.splice(findChildInx, 1, foundChild);
    const a = childrens.splice(findChildInx, 1, foundChild);
    //нужен слайс!!!

    console.log(a);
    return a
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
    console.log('childrens', childrens);

    if (name === 'nameOfParent' || name === 'ageOfParent') {
      return setParent({ ...parent, [name]: value });
    }

    switch (name) {
      case 'nameOfChild1':
        // setChild1({ ...child1, valueName: value, })
        return setChildrens(prev => updateOneChildName(prev, value, 1));
      // return setChildrens(prev => {
      //   let foundChild = prev.find(el => el.id === 1)
      //   foundChild = {...foundChild, valueName: value }
      //   const findChildInx = prev.findIndex(el => el.id === 1)
      //   console.log('findChild', foundChild);
      //   return prev.splice(findChildInx, 1, foundChild)
      // })
      // return setChildrens(prev => {
      //   const findChild = prev.find(el => el.id === 1)
      //   const findChildInx = prev.findIndex(el => el.id === 1)
      //   console.log('findChild', findChild);
      //   const newArr = prev.splice(findChildInx, 1, child1)
      //   return newArr
      // })

      // console.log('child1', child1);
      // return setChild1({ ...child1, valueName: value})
      // return setChildrens(childrens=> [...child1])
      // return setChildrens(prev => {
      //   // console.log(prev[0]);
      //   // let child1 = prev[0]
      //   let child1 = prev.find(el => el.id === 1)
      //   console.log(child1);
      //   // prev[0] = { ...prev[0], valueName: value }
      //   // const child1 = { ...prev[0], valueName: value }
      //   // child1 = { ...prev[0], valueName: value }
      //   child1 = { ...child1, valueName: value }
      //   // return [...prev, ...prev[0]]
      //   return [...prev, ...child1]
      //   // return [...prev[0]]
      // })
      case 'ageOfChild1':
        // return setChild1({ ...child1, valueAge: value });
        return setChildrens(prev => updateOneChildAge(prev, value, 1));
      //  return setChildrens(prev => {
      //   let foundChild = prev.find(el => el.id === 1)
      //   foundChild = {...foundChild, valueAge: value }
      //   const findChildInx = prev.findIndex(el => el.id === 1)
      //   console.log('findChild', foundChild);
      //   return prev.splice(findChildInx, 1, foundChild)
      // })
      // return setChildrens(prev => {
      //   prev[0]={ ...prev[0], valueAge: value }
      //   return [...prev, ...prev[0]]
      // }
      // );

      case 'nameOfChild2':
        return setChildrens(prev => updateOneChildName(prev, value, 2));
      // return setChildrens(prev => {
      //   prev[1] = { ...prev[1], valueName: value };
      //   return [...prev, ...prev[1]];
      // });
      // return setChild2({...child2, valueName: value})
      case 'ageOfChild2':
        // return setChildrens(prev => {
        //   prev[1] = { ...prev[1], valueAge: value };
        //   return [...prev, ...prev[1]];
        // });
        // return setChild2({ ...child2, valueAge: value });
        return setChildrens(prev => updateOneChildAge(prev, value, 2));

      case 'nameOfChild3':
        return setChildrens(prev => updateOneChildName(prev, value, 3));
      // return setChildrens(prev => {
      //   prev[2] = { ...prev[2], valueName: value };
      //   return [...prev, ...prev[2]];
      // });
      // return setChild3({ ...child3, valueAge: value });
      case 'ageOfChild3':
        // return setChildrens(prev => {
        //   prev[2] = { ...prev[2], valueAge: value };
        //   return [...prev, ...prev[2]];
        // });
        // return setChild3({ ...child3, valueAge: value });
        return setChildrens(prev => updateOneChildAge(prev, value, 3));

      case 'nameOfChild4':
        return setChildrens(prev => updateOneChildName(prev, value, 4));
      // return setChildrens(prev => {
      //   prev[3] = { ...prev[3], valueName: value };
      //   return [...prev, ...prev[3]];
      // });
      // return setChild4({ ...child4, valueAge: value });
      case 'ageOfChild4':
        // return setChildrens(prev => {
        //   prev[3] = { ...prev[3], valueAge: value };
        //   return [...prev, ...prev[3]];
        // });
        // return setChild4({ ...child4, valueAge: value });
        return setChildrens(prev => updateOneChildAge(prev, value, 4));

      case 'nameOfChild5':
        return setChildrens(prev => updateOneChildName(prev, value, 5));
      // return setChildrens(prev => {
      //   prev[4] = { ...prev[4], valueName: value };
      //   return [...prev, ...prev[4]];
      // });
      // return setChild5({ ...child5, valueAge: value });
      case 'ageOfChild5':
        // return setChildrens(prev => {
        //   prev[4] = { ...prev[4], valueAge: value };
        //   return [...prev, ...prev[4]];
        // });
        // return setChild5({ ...child5, valueAge: value });
        return setChildrens(prev => updateOneChildAge(prev, value, 5));

      default:
        break;
    }
  };

  const onBtnAddClick = e => {
    setChildForm(true);
    setChildrens(prev => {
      return [...prev, inputNames[count]];
      // return [...prev, childs[count]];
    });
    setCount(count + 1);
  };

  const onBtnRemoveClick = id => {
    const filteredChildrens = childrens.filter(el => el.id !== id);
    if (filteredChildrens.length === 0) {
      setChildForm(false);
    }
    setChildrens(filteredChildrens);
  };

  return (
    <Section>
      <Form
        onSubmitForm={onSubmitForm}
        childrens={childrens}
        // childrens={childs}
        parent={parent}
        onChangeInput={onChangeInput}
        onBtnAddClick={onBtnAddClick}
        childForm={childForm}
        onBtnRemoveClick={onBtnRemoveClick}
      />
    </Section>
  );
};
