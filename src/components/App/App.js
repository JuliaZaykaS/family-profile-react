import React from 'react';
import { useState } from 'react';
import { ProfileView } from '../../views/ProfileView/ProfileView';
import { FormsView } from '../../views/FormsView/FormsView';
import { Navigation } from '../Navigation/Navigation';
// import { TestForm } from '../testForm/TestForm';

export const App = () => {
  const [parent, setParent] = useState({ nameOfParent: '', ageOfParent: '' })
  const [childrens, setChildrens] = useState([])
  const [viewForm, setViewForm] = useState(true)
  const [viewPreview, setViewPreview] = useState(false)

  const getFamilyInfo = (parent, childrens) => {
    setParent(parent)
    setChildrens(childrens)
  }

  const onBtnFormClick = e => {
setViewForm(true)
    setViewPreview(false)
    }

  const onBtnPreviewClick = e => {
    setViewForm(false)
    setViewPreview(true)

  }

  const toggleView = () => {
    setViewForm(prev=> !prev)
    setViewPreview(prev=> !prev)
  }


  return (
      <div>
      {/* <Navigation onBtnPreviewClick={ onBtnPreviewClick} onBtnFormClick={onBtnFormClick} /> */}
      {/* <Navigation onBtnPreviewClick={ toggleView} onBtnFormClick={toggleView} /> */}
      <Navigation onBtnClick={ toggleView} />
      { viewForm &&
      <FormsView onSubmit={getFamilyInfo} />

      }
      {/* <TestForm onSubmit={getFamilyInfo} /> */}
      {viewPreview &&
      <ProfileView parent={parent} childrens={ childrens}/>


      // ({parent.nameOfParent && childrens && <ProfileView parent={parent} childrens={ childrens}/>

      // })
      }
    </div>
  );
};
