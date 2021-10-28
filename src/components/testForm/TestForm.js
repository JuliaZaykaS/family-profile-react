import React from 'react';
import { useState } from 'react';
import { Title } from '../Title/Title';
import { Button } from '../Button/Button';

export const TestForm = ({onSubmit}) => {
  const inputNames = [
    { name: 'nameOfChild1', age: 'ageOfChild1', valueName: '', valueAge: '' },
    { name: 'nameOfChild2', age: 'ageOfChild2', valueName: '', valueAge: '' },
    { name: 'nameOfChild3', age: 'ageOfChild3', valueName: '', valueAge: '' },
    { name: 'nameOfChild4', age: 'ageOfChild4', valueName: '', valueAge: '' },
    { name: 'nameOfChild5', age: 'ageOfChild5', valueName: '', valueAge: '' },
  ];
  // const inputNames = [
  //   { name: 'nameOfChild1', age: 'ageOfChild1' },
  //   { name: 'nameOfChild2', age: 'ageOfChild2' },
  //   { name: 'nameOfChild3', age: 'ageOfChild3' },
  //   { name: 'nameOfChild4', age: 'ageOfChild4' },
  //   { name: 'nameOfChild5', age: 'ageOfChild5' },
  // ];
  // const inputNames = [
  //   { nameOfChild1: 'nameOfChild1', ageOfChild1: 'ageOfChild1' },
  //   { nameOfChild2: 'nameOfChild2', ageOfChild2: 'ageOfChild2' },
  //   { nameOfChild3: 'nameOfChild3', ageOfChild3: 'ageOfChild3' },
  //   { nameOfChild4: 'nameOfChild4', ageOfChild4: 'ageOfChild4' },
  //   { nameOfChild5: 'nameOfChild5', ageOfChild5: 'ageOfChild5' },
  // ];
  // const [family, setFamily] = useState(
  //     [
  //         {nameOfParent:'', ageOfParent:''},
  //         {nameOfChild1:'', ageOfChild1: ''},
  //         {nameOfChild2:'', ageOfChild2: ''},
  //         {nameOfChild3:'', ageOfChild3: ''},
  //         {nameOfChild4:'', ageOfChild4: ''},
  //         {nameOfChild5:'', ageOfChild5: ''},
  //     ]
  // )
  // const [family, setFamily] = useState([])
  const [parent, setParent] = useState({ nameOfParent: '', ageOfParent: '' });
  // const [child1, setChild1] = useState(inputNames[0]);
  // console.log(child1);
  // // console.log(parent);
  // const [child2, setChild2] = useState(inputNames[1]);
  // const [child3, setChild3] = useState(inputNames[2]);
  // const [child4, setChild4] = useState(inputNames[3]);
  // const [child5, setChild5] = useState(inputNames[4]);
  const [childrens, setChildrens] = useState([])
  // const [childrens, setChildrens] = useState([inputNames[0]])
  // console.log(childrens);
  // const [parent, setParent] = useState({ nameOfParent: '', ageOfParent: '' });
  // const [child1, setChild1] = useState({ nameOfChild1: '', ageOfChild1: '' });
  // // console.log(parent);
  // const [child2, setChild2] = useState({ nameOfChild2: '', ageOfChild2: '' });
  // const [child3, setChild3] = useState({ nameOfChild3: '', ageOfChild3: '' });
  // const [child4, setChild4] = useState({ nameOfChild4: '', ageOfChild4: '' });
  // const [child5, setChild5] = useState({ nameOfChild5: '', ageOfChild5: '' });
  // const [family, setFamily] = useState([parent])
  // const [family, setFamily] = useState([]);
  // useEffect(() => {

  // // }, [inputNames])
  // }, [childrens])
  // const [childrens, setChildrens] = useState([]);
  // console.log(family);
  // const names = [name1, name2, name3]
  //   const peoples = [
  //     { name1: '', age1: '' },
  //     { name2: '', age2: '' },
  //     { name3: '', age3: '' },
  //   ];
  //   const [name, setName] = useState([]);
  //   const [name, setName] = useState('')
  //   const [age, setAge] = useState('')
  //   const [age, setAge] = useState([]);
  // const [person, setPerson] = useState({})

  const onSubmitForm = e => {
    e.preventDefault();
    onSubmit(parent, childrens)
    setParent({ nameOfParent: '', ageOfParent: '' })
    setChildrens([])
    // console.log(parent);
    // console.log(child1);
    // console.log(person)
    // console.log(name);
    // console.log(age);
    //   setFamily(family.push(parent, child1, child2, child3, child4, child5))
    //   setFamily([...parent,...child1, ...child2, ...child3, ...child4, ...child5])
    // console.log(family);
    // setFamily(family.push(childrens))
    // setFamily([parent, child1]);
    //   setFamily(prevfam=>[...prevfam, parent, child1, child2, child3, child4, child5])
    // console.log(family);
  };
  // const onBtnSaveClick = (e) => {
  //     setName(name=> name.push(name))

  // }
  const onChangeInput = e => {
    const { name, value } = e.currentTarget;
    // console.log(value);
    // console.log(e.currentTarget.form);
    // console.log(e.currentTarget.form[0].value);
    // console.dir(e.currentTarget.form);
    // console.dir(e.currentTarget);
    // console.dir(e.target);
    // switch (name) {
    //   case 'name':
    //     // return setName(name => name.push(value));
    //     return setName(name => name.push(value));
    //     // return setName(value);
    //   case 'age':
    //     // return setAge(age => age.push(value));
    //     // return setAge(value);
    //   default:
    //     return;
    // }
    if (name === 'nameOfParent' || name === 'ageOfParent') {
      //   setParent({ ...parent, [name]: value })

      //   return setFamily([{ ...parent, [name]: value }])
      return setParent({ ...parent, [name]: value });
    }

    switch (name) {
      case 'nameOfChild1':
        // console.log(childrens[0]);
        // const obj = {...childrens[0], valueName: value}
        // return setChild1({ ...child1, valueName: value,});
        // setChild1({ ...child1, valueName: value, });
        // console.log(child1);
        // console.log(childrens);
        // console.log(childrens[0].valueName);
        return setChildrens(prev => [{...prev[0], valueName: value }])
        // return setChildrens(prev => [...prev, ...{...child1 }])
        // return setChildrens(childrens[0]={...childrens[0],valueName: value});
        // return setChildrens([...childrens, ...obj]);
      case 'ageOfChild1':
         return setChildrens(prev => [{...prev[0], valueAge: value }] )
        // return setChild1({ ...child1, valueAge: value });

      case 'nameOfChild2':
        // return setChild2({ ...child2, valueName: value });
        return setChildrens(prev => {
          // console.log(prev);
          // console.log(prev[1]);
          prev[1] = {...prev[1], valueName: value }
          return [...prev, ...prev[1]]
          // return [...prev, ...{...prev[1], valueName: value }]
        })
      case 'ageOfChild2':
        // return setChild2({ ...child2, valueAge: value });
        // return setChildrens(prev => [{...prev[1], valueAge: value }] )
        // return setChildrens(prev => { return [...prev, ...{ ...prev[1], valueAge: value }] })

        return setChildrens(prev => {
          prev[1] = { ...prev[1], valueAge: value }
          return [...prev, ...prev[1]]
        })

      case 'nameOfChild3':
        // return setChild3({ ...child3, valueName: value });
        // return setChildrens(prev => [{...prev[2], valueName: value }] )
        // return setChildrens(prev => [...prev, ...{...prev[2], valueName: value }] )
        return setChildrens(prev => {
          prev[2]={ ...prev[2], valueName: value }
          return [...prev, ...prev[2]]
        })
      case 'ageOfChild3':
        // return setChild3({ ...child3, valueAge: value });
        // return setChildrens(prev => [{...prev[2], valueAge: value }] )
        // return setChildrens(prev => [...prev, ...{...prev[2], valueAge: value }] )
        return setChildrens(prev =>
        {
          prev[2] = { ...prev[2], valueAge: value }
          return [...prev, ...prev[2]]
          })

      case 'nameOfChild4':
        // return setChild4({ ...child4, valueName: value });
        // return setChildrens(prev => [{...prev[3], valueName: value }] )
        // return setChildrens(prev => [...prev, ...{...prev[3], valueName: value }] )
        return setChildrens(prev =>
        {
          prev[3]={ ...prev[3], valueName: value }
          return [...prev, ...prev[3]]
          }
        )
      case 'ageOfChild4':
        // return setChild4({ ...child4, valueAge: value });
        // return setChildrens(prev => [{...prev[3], valueAge: value }] )
        // return setChildrens(prev => [...prev, ...{...prev[3], valueAge: value }] )
        return setChildrens(prev =>
        {
          prev[3] = { ...prev[3], valueAge: value }
          return [...prev, ...prev[3]]
          }
        )

      case 'nameOfChild5':
        // return setChild5({ ...child5, valueName: value });
        // return setChildrens(prev => [{...prev[4], valueName: value }] )
        // return setChildrens(prev => [...prev, ...{...prev[4], valueName: value }] )
        return setChildrens(prev =>
        {
          prev[4]={ ...prev[4], valueName: value }
        return  [...prev, ...prev[4]]
          }
        )
      case 'ageOfChild5':
        // return setChild5({ ...child5, valueAge: value });
        // return setChildrens(prev => [{...prev[4], valueAge: value }] )
        // return setChildrens(prev => [...prev, ...{...prev[4], valueAge: value }] )
        return setChildrens(prev => {
          prev[4] = { ...prev[4], valueAge: value }
          return [...prev, ...prev[4]]
        })

      default: break
    }


    // if (name === 'nameOfChild1' || name === 'ageOfChild1') {
    //   // return setChild1({ ...child1, [name]: value });
    //   return setChild1({ ...child1, valueName: value, valueAge: value });
    // }
    // if (name === 'nameOfChild2' || name === 'ageOfChild2') {
    //   return setChild2({ ...child2, [name]: value });
    // }
    // if (name === 'nameOfChild3' || name === 'ageOfChild3') {
    //   return setChild3({ ...child3, [name]: value });
    // }
    // if (name === 'nameOfChild4' || name === 'ageOfChild4') {
    //   return setChild4({ ...child4, [name]: value });
    // }
    // if (name === 'nameOfChild5' || name === 'ageOfChild5') {
    //   return setChild5({ ...child5, [name]: value });
    // }

    //   switch (name) {
    //       //   case 'name':
    // //       case 'nameOfParent':
    // //           // return setName(name => name.push(value));
    // //           return setParent({...parent, [name]: value} );
    // //         //   return setParent({...parent, nameOfParent: value} );
    // //     // return setParent({ nameOfParent: value });
    // //   // return setName(value);
    // //   case 'ageOfParent':
    // //     // return setParent({ [name]: value });
    // //     // return setParent({ ageOfParent: value });
    // //     return setParent({ ...parent, [name]: value });
    //     // return setParent({ ...parent, ageOfParent: value });
    //   case 'nameOfChild1':
    //     // return setName(name => name.push(value));
    //     return setChild1({ ...child1, [name]: value });
    //   // return setName(value);
    //   case 'ageOfChild1':
    //           return setChild1({ ...child1, [name]: value });

    //   case 'nameOfChild2':
    //     // return setName(name => name.push(value));
    //     return setChild2({ ...child2, [name]: value });
    //   // return setName(value);
    //   case 'ageOfChild2':
    //           return setChild2({ ...child2, [name]: value });

    //   case 'nameOfChild3':
    //     // return setName(name => name.push(value));
    //     return setChild3({ ...child3, [name]: value });
    //   // return setName(value);
    //   case 'ageOfChild3':
    //           return setChild3({ ...child3, [name]: value });

    //   case 'nameOfChild4':
    //     // return setName(name => name.push(value));
    //     return setChild4({ ...child4, [name]: value });
    //   // return setName(value);
    //   case 'ageOfChild4':
    //           return setChild4({ ...child4, [name]: value });

    //   case 'nameOfChild5':
    //     // return setName(name => name.push(value));
    //     return setChild5({ ...child5, [name]: value });
    //   // return setName(value);
    //   case 'ageOfChild5':
    //     return setChild5({...child5, [name]: value });
    //     // return setChild1({ [name]: value });

    //   // return setAge(age => age.push(value));
    //   //   return setAge({ [name]: value });
    //   // return setAge(value);
    //   default:
    //     return;
    // }
  };
  const [childForm, setChildForm] = useState(false);
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false)
  // const [closedBtn, setClosedBtn] = useState(false)

  const onBtnAddClick = e => {
    setChildForm(true);
    // console.log(childrens);
    if (childrens.length > 4) {
      setDisabled(true)
      return
    }
    // setFamily(family.push(child1))
    setChildrens(prev => {
      // console.log(prev);
      return [...prev, inputNames[count]]
    })

    // setFamily(family.push(parent, child1))
    setCount(count + 1)
    // setFamily([...family,child1])
    // setChildrens(childrens.push(child1));

    // console.log(family);
    //   setClosedBtn(true)
  };

  return (
    <div>
      <Title title={'Персональные данные'} />
      <form onSubmit={onSubmitForm}>
        <label>
          Имя
          <input
            type="text"
            // name="nameOfParent"
            name="nameOfParent"
            value={parent.nameOfParent}
            onChange={onChangeInput}
          ></input>
        </label>
        <label>
          Возраст
          <input
            type="text"
            // name="ageOfParent"
            name="ageOfParent"
            value={parent.ageOfParent}
            onChange={onChangeInput}
          ></input>
        </label>
        <Button type={'button'} text={'+'} onClickBtn={onBtnAddClick} disabled={disabled}></Button>
        {childForm && (
          <React.Fragment>
            <Title title={'Дети'} />

            <ol>
              {/* {childrens.map(el => { */}
              {/* {inputNames.map((el,index) => { */}
              {childrens.map((el,index) => {
                return (

                <li key={index} >
                  <label>
                    Имя
                    <input
                      type="text"
                      // name="name"
                      // name="nameOfChild1"
                      // name={el.nameOfChild1}
                      name={el.name}
                      // value={child1.nameOfChild1}
                      value={el.valueName}
                      // value={`child${index+1}.nameOfChild${index+1}`}
                      onChange={onChangeInput}
                    ></input>
                  </label>
                  <label>
                    Возраст
                    <input
                      type="text"
                      // name="age"
                      // name="ageOfChild1"
                      name={el.age}
                      // value={child1.ageOfChild1}
                      value={el.valueAge}
                      onChange={onChangeInput}
                    ></input>
                  </label>
                </li>
                )
              })}

              {/* <label>
          Имя
          <input
            type="text"
            // name="name"
            name="nameOfChild1"
            value={child1.nameOfChild1}
            onChange={onChangeInput}
          ></input>
        </label>
        <label>
          Возраст
          <input
            type="text"
            // name="age"
            name="ageOfChild1"
            value={child1.ageOfChild1}
            onChange={onChangeInput}
          ></input>
        </label>
        <label>
          Имя
          <input
            type="text"
            // name="name"
            name="nameOfChild2"
            value={child2.nameOfChild2}
            onChange={onChangeInput}
          ></input>
        </label>
        <label>
          Возраст
          <input
            type="text"
            // name="age"
            name="ageOfChild2"
            value={child2.ageOfChild2}
            onChange={onChangeInput}
          ></input>
        </label>
        <label>
          Имя
          <input
            type="text"
            // name="name"
            name="nameOfChild3"
            value={child3.nameOfChild3}
            onChange={onChangeInput}
          ></input>
        </label>
        <label>
          Возраст
          <input
            type="text"
            // name="age"
            name="ageOfChild3"
            value={child3.ageOfChild3}
            onChange={onChangeInput}
          ></input>
        </label>
        <label>
          Имя
          <input
            type="text"
            // name="name"
            name="nameOfChild4"
            value={child4.nameOfChild4}
            onChange={onChangeInput}
          ></input>
        </label>
        <label>
          Возраст
          <input
            type="text"
            // name="age"
            name="ageOfChild4"
            value={child4.ageOfChild4}
            onChange={onChangeInput}
          ></input>
        </label>
        <label>
          Имя
          <input
            type="text"
            // name="name"
            name="nameOfChild5"
            value={child5.nameOfChild5}
            onChange={onChangeInput}
          ></input>
        </label>
        <label>
          Возраст
          <input
            type="text"
            // name="age"
            name="ageOfChild5"
            value={child5.ageOfChild5}
            onChange={onChangeInput}
          ></input>
        </label> */}
            </ol>
          </React.Fragment>
        )}
        {/* <Button type={'button'} text={'+'} onClickBtn={onBtnAddClick}></Button> */}
        {/* <React.Fragment>
            <label>
              Имя
              <input
                type="text"
                name="name1"
                value={el.name1}
                onChange={onChangeInput}
              ></input>
            </label>
            <label>
              Возраст
              <input
                type="text"
                name="age1"
                value={el.age1}
                onChange={onChangeInput}
              ></input>
            </label>
            <label>
              Имя
              <input
                type="text"
                name="name2"
                value={el.name2}
                onChange={onChangeInput}
              ></input>
            </label>
            <label>
              Возраст
              <input
                type="text"
                name="age2"
                value={el.age2}
                onChange={onChangeInput}
              ></input>
            </label>
            <label>
              Имя
              <input
                type="text"
                name="name3"
                value={el.name3}
                onChange={onChangeInput}
              ></input>
            </label>
            <label>
              Возраст
              <input
                type="text"
                name="age3"
                value={el.age3}
                onChange={onChangeInput}
              ></input>
            </label>
          </React.Fragment> */}
        {/* {peoples.map(el => {
                  return (

          <React.Fragment>
            <label>
              Имя
              <input
                type="text"
                name="name1"
                value={el.name1}
                onChange={onChangeInput}
              ></input>
            </label>
            <label>
              Возраст
              <input
                type="text"
                name="age1"
                value={el.age1}
                onChange={onChangeInput}
              ></input>
            </label>
            <label>
              Имя
              <input
                type="text"
                name="name2"
                value={el.name2}
                onChange={onChangeInput}
              ></input>
            </label>
            <label>
              Возраст
              <input
                type="text"
                name="age2"
                value={el.age2}
                onChange={onChangeInput}
              ></input>
            </label>
            <label>
              Имя
              <input
                type="text"
                name="name3"
                value={el.name3}
                onChange={onChangeInput}
              ></input>
            </label>
            <label>
              Возраст
              <input
                type="text"
                name="age3"
                value={el.age3}
                onChange={onChangeInput}
              ></input>
            </label>
          </React.Fragment>
                  )
        })} */}
        {/* <Button type={'submit'} text={'Сохранить'} onClickBtn={onBtnSaveClick}></Button> */}
        <Button type={'submit'} text={'Сохранить'}></Button>
      </form>
    </div>
  );
};
