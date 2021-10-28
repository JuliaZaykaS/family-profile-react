import React from 'react';
// import { useState } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Title } from '../Title/Title'
// import { ChildForm } from '../ChildForm/ChildForm'
import { ChildrenList } from '../ChildrenList/ChildrenList'
// import { ChildForm } from '../ChildForm/ChildForm';
import { ChildrenItem } from '../ChildrenItem/ChildrenItem';

export const ParentForm = ({onSubmitForm, childrens, parent, onChangeInput, childForm, disabled, onBtnAddClick, onBtnRemoveClick}) => {
    // const [childForm, setChildForm] = useState(false);
  //   const [closedBtn, setClosedBtn] = useState(false)

  // const onBtnAddClick = e => {
  //     setChildForm(true);
  //     setClosedBtn(true)
  //   };

  //   const onBtnSaveClick = e => {
  //       setChildForm(false)
  //       setClosedBtn(false)
  //   }

  return (
    // <form onSubmit={onSubmitForm}>
    <form onSubmit={onSubmitForm}>
      <Title title={'Персональные данные'} />
      {/* <Input label={'Имя'} name={'nameOfParent' } value={parent.nameOfParent} onChange={onChangeInput} /> */}
      <Input label={'Имя'} name={'nameOfParent' } value={parent.nameOfParent} onChangeInput={onChangeInput} />
      {/* <Input label={'Имя'} name={'nameOfParent' } value={parent.nameOfParent} onChange={()=>onChangeInput()} /> */}
      {/* <Input label={'Возраст'} name={'ageOfParent' } value={parent.ageOfParent} onChange={onChangeInput} /> */}
      <Input label={'Возраст'} name={'ageOfParent' } value={parent.ageOfParent} onChangeInput={onChangeInput} />
      {/* <Input label={'Возраст'} name={'ageOfParent' } value={parent.ageOfParent} onChange={()=>onChangeInput()} /> */}
      {childrens.length !== 5 &&
        <Button type={'button'} text={'+Добавить ребенка'} onClickBtn={onBtnAddClick}></Button>

      }

      {childForm && (
        <React.Fragment>
          <Title title={'Дети'} />
          <ChildrenList>
            {/* {childrens.map((el, index) => { */}
            {childrens.map((el) => {
              return (
                <ChildrenItem key={el.id}>
                  {/* <Input label={'Имя'} name={el.name} value={el.valueName} onChange={onChangeInput} /> */}
                  <Input label={'Имя'} name={el.name} value={el.valueName} onChangeInput={onChangeInput} />
                  {/* <Input label={'Возраст'} name={el.age} value={el.valueAge} onChange={onChangeInput} /> */}
                  <Input label={'Возраст'} name={el.age} value={el.valueAge} onChangeInput={onChangeInput} />
                  {/* <Button type={'button'} text={'Удалить'} onClickBtn={onBtnRemoveClick(index)}></Button> */}
                  <Button type={'button'} text={'Удалить'} onClickBtn={()=>onBtnRemoveClick(el.id)}></Button>


                </ChildrenItem>
              )
            })}
          </ChildrenList>


          <Button type={'submit'} text={'Сохранить'}></Button>
        </React.Fragment>
      )}
      {/* ) */}
      {/* // } */}
      </form>

  );
};
// export const ParentForm = ({onSubmitForm, childrens, parent, onChangeInput, childForm, disabled, onBtnAddClick}) => {
//     // const [childForm, setChildForm] = useState(false);
//   //   const [closedBtn, setClosedBtn] = useState(false)

//   // const onBtnAddClick = e => {
//   //     setChildForm(true);
//   //     setClosedBtn(true)
//   //   };

//   //   const onBtnSaveClick = e => {
//   //       setChildForm(false)
//   //       setClosedBtn(false)
//   //   }

//   return (
//     // <form onSubmit={onSubmitForm}>
//     <form onSubmit={onSubmitForm}>
//       <Title title={'Персональные данные'} />
//       {/* <Input label={'Имя'} name={'nameOfParent' } value={parent.nameOfParent} onChange={onChangeInput} /> */}
//       <Input label={'Имя'} name={'nameOfParent' } value={parent.nameOfParent} onChange={()=>onChangeInput()} />
//       {/* <Input label={'Возраст'} name={'ageOfParent' } value={parent.ageOfParent} onChange={onChangeInput} /> */}
//       <Input label={'Возраст'} name={'ageOfParent' } value={parent.ageOfParent} onChange={()=>onChangeInput()} />

//         <Button type={'button'} text={'+Добавить ребенка'} onClickBtn={onBtnAddClick} disabled={disabled}></Button>
//       {childForm && (
//         <React.Fragment>
//           <Title title={'Дети'} />
//           <ChildrenList>
//             {childrens.map((el, index) => {
//               return (
//                 <ChildrenItem key={index}>
//                   <Input label={'Имя'} name={el.name} value={el.valueName} onChange={onChangeInput} />
//                   <Input label={'Возраст'} name={el.age} value={el.valueAge} onChange={onChangeInput} />

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
// };
// export const ParentForm = () => {
//     const [childForm, setChildForm] = useState(false);
//     const [closedBtn, setClosedBtn] = useState(false)

//   const onBtnAddClick = e => {
//       setChildForm(true);
//       setClosedBtn(true)
//     };

//     const onBtnSaveClick = e => {
//         setChildForm(false)
//         setClosedBtn(false)
//     }

//   return (
//     <form>
//       <Input label={'Имя'}></Input>
//           <Input label={'Возраст'}></Input>
//           {!closedBtn &&
//           <Button type={'button'} text={'+'} onClickBtn={onBtnAddClick}></Button>

//           }
//           {/* <Button type={'button'} text={'+ Добавить ребенка'} onClickBtn={onBtnAddClick}></Button> */}
//           {childForm && <ChildForm />}
//           <ChildrenItem>

//           </ChildrenItem>
//       <Button type={'submit'} text={'Сохранить'} onClickBtn={onBtnSaveClick}></Button>
//     </form>
//   );
// };
