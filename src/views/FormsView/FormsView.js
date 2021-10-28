import React, { useState,useEffect} from 'react';
import { ParentForm } from '../../components/ParentForm/ParentForm';
// import { Title } from '../../components/Title/Title';
// import { Button } from '../../components/Button/Button';
// import { Input } from '../../components/Input/Input';
// import { ChildrenList } from '../../components/ChildrenList/ChildrenList'
// import { ChildrenItem } from '../../components/ChildrenItem/ChildrenItem';

// export const FormsView = ({ onSubmit }) => {
// export const FormsView = ({ onSubmit }) => {
//   const inputNames = [
//     { name: 'nameOfChild1', age: 'ageOfChild1', valueName: '', valueAge: '' },
//     { name: 'nameOfChild2', age: 'ageOfChild2', valueName: '', valueAge: '' },
//     { name: 'nameOfChild3', age: 'ageOfChild3', valueName: '', valueAge: '' },
//     { name: 'nameOfChild4', age: 'ageOfChild4', valueName: '', valueAge: '' },
//     { name: 'nameOfChild5', age: 'ageOfChild5', valueName: '', valueAge: '' },
//   ];
//   const [parent, setParent] = useState({ nameOfParent: '', ageOfParent: '' });
//   const [childrens, setChildrens] = useState([]);
//   const [childForm, setChildForm] = useState(false);
//   const [count, setCount] = useState(0);
//   const [disabled, setDisabled] = useState(false);

//   const onSubmitForm = e => {
//     e.preventDefault();
//     onSubmit(parent, childrens);
//     setParent({ nameOfParent: '', ageOfParent: '' });
//     setChildrens([]);
//   };

//   const onChangeInput = e => {
//     const { name, value } = e.currentTarget;

//     if (name === 'nameOfParent' || name === 'ageOfParent') {
//       return setParent({ ...parent, [name]: value });
//     }

//     switch (name) {
//       case 'nameOfChild1':
//         return setChildrens(prev => [{ ...prev[0], valueName: value }]);
//       case 'ageOfChild1':
//         return setChildrens(prev => [{ ...prev[0], valueAge: value }]);

//       case 'nameOfChild2':
//         return setChildrens(prev => {
//           prev[1] = { ...prev[1], valueName: value };
//           return [...prev, ...prev[1]];
//         });
//       case 'ageOfChild2':
//         return setChildrens(prev => {
//           prev[1] = { ...prev[1], valueAge: value };
//           return [...prev, ...prev[1]];
//         });

//       case 'nameOfChild3':
//         return setChildrens(prev => {
//           prev[2] = { ...prev[2], valueName: value };
//           return [...prev, ...prev[2]];
//         });
//       case 'ageOfChild3':
//         return setChildrens(prev => {
//           prev[2] = { ...prev[2], valueAge: value };
//           return [...prev, ...prev[2]];
//         });

//       case 'nameOfChild4':
//         return setChildrens(prev => {
//           prev[3] = { ...prev[3], valueName: value };
//           return [...prev, ...prev[3]];
//         });
//       case 'ageOfChild4':
//         return setChildrens(prev => {
//           prev[3] = { ...prev[3], valueAge: value };
//           return [...prev, ...prev[3]];
//         });

//       case 'nameOfChild5':
//         return setChildrens(prev => {
//           prev[4] = { ...prev[4], valueName: value };
//           return [...prev, ...prev[4]];
//         });
//       case 'ageOfChild5':
//         return setChildrens(prev => {
//           prev[4] = { ...prev[4], valueAge: value };
//           return [...prev, ...prev[4]];
//         });

//       default:
//         break;
//     }
//   };

//   const onBtnAddClick = e => {
//     setChildForm(true);
//     if (childrens.length > 4) {
//       setDisabled(true);
//       return;
//     }
//     setChildrens(prev => {
//       return [...prev, inputNames[count]];
//     });
//     setCount(count + 1);
//   };

//   return (
//     <form onSubmit={onSubmitForm}>
//       <Title title={'Персональные данные'} />
//       {/* <Input label={'Имя'} name={'nameOfParent' } value={parent.nameOfParent} onChange={onChangeInput} /> */}
//       <Input label={'Имя'} name={'nameOfParent' } value={parent.nameOfParent} onChangeInput={onChangeInput} />
//       {/* <Input label={'Имя'} name={'nameOfParent' } value={parent.nameOfParent} onChange={()=>onChangeInput()} /> */}
//       {/* <Input label={'Возраст'} name={'ageOfParent' } value={parent.ageOfParent} onChange={onChangeInput} /> */}
//       <Input label={'Возраст'} name={'ageOfParent' } value={parent.ageOfParent} onChangeInput={onChangeInput} />
//       {/* <Input label={'Возраст'} name={'ageOfParent' } value={parent.ageOfParent} onChange={()=>onChangeInput()} /> */}

//         <Button type={'button'} text={'+Добавить ребенка'} onClickBtn={onBtnAddClick} disabled={disabled}></Button>
//       {childForm && (
//         <React.Fragment>
//           <Title title={'Дети'} />
//           <ChildrenList>
//             {childrens.map((el, index) => {
//               return (
//                 <ChildrenItem key={index}>
//                   {/* <Input label={'Имя'} name={el.name} value={el.valueName} onChange={onChangeInput} /> */}
//                   <Input label={'Имя'} name={el.name} value={el.valueName} onChangeInput={onChangeInput} />
//                   <Input label={'Возраст'} name={el.age} value={el.valueAge} onChangeInput={onChangeInput} />
//                   {/* <Input label={'Возраст'} name={el.age} value={el.valueAge} onChange={onChangeInput} /> */}
//                 </ChildrenItem>
//               )
//             })}
//           </ChildrenList>


//           <Button type={'submit'} text={'Сохранить'}></Button>
//         </React.Fragment>
//       )}
//       {/* ) */}
//       {/* // } */}
//       </form>
//   );
//   //   };
// };
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
  // const [childrens, setChildrens] = useState(null);
  const [childForm, setChildForm] = useState(false);
  const [count, setCount] = useState(0);
  // const [disabled, setDisabled] = useState(false);
  // console.log(childrens);

  // useEffect(() => {
  //   if (childrens.length === 0) {
  //     setChildForm(false)
  //   }

  // }, [childForm])

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
        // return setChildrens(prev => [{ ...prev[0], valueName: value }]);
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
    // if (childrens.length > 4) {
    //   setDisabled(true);
    //   return;
    // }
    setChildrens(prev => {
      return [...prev, inputNames[count]];
      // return [inputNames[count]];
    });
    setCount(count + 1);
    // if (childrens.length === 5) {
    //   setDisabled(true);
    //   return;
    // }
    // if (count > 5) {
    //    setDisabled(true);
    // }
  };

  const onBtnRemoveClick = id => {
    const filteredChildrens = childrens.filter(el => el.id !== id)
    if (filteredChildrens.length === 0) {
      setChildForm(false)
    }

    // setChildrens(childrens.filter(el => el.id !== id))
    setChildrens(filteredChildrens)
    // console.log(childForm);
    // if (childrens.length < 1) {
    //   setChildForm(false)
    // }



  }

  return (
    <div>
      {/* <Title title={'Персональные данные'} /> */}
      <ParentForm
        // onSubmit={onSubmitForm}
        onSubmitForm={onSubmitForm}
        // onSubmitForm={()=>onSubmitForm()}
        childrens={childrens}
        parent={parent}
        onChangeInput={onChangeInput}
        // onChangeInput={()=>onChangeInput()}
        onBtnAddClick={onBtnAddClick}
        childForm={childForm}
        onBtnRemoveClick={onBtnRemoveClick}
        // onBtnRemoveClick={}
        // disabled={disabled}
      />
    </div>
  );
  //   };
};
