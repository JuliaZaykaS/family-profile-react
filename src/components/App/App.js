import React from 'react';
import { useState } from 'react';
import { ProfileView } from '../../views/ProfileView/ProfileView';
// import { FormsView } from '../../views/FormsView/FormsView';
import { Navigation } from '../Navigation/Navigation';
import { TestForm } from '../testForm/TestForm';

export const App = () => {
  const [parent, setParent] = useState({ nameOfParent: '', ageOfParent: '' })
  const [childrens, setChildrens] = useState([])

  const getFamilyInfo = (parent, childrens) => {
    setParent(parent)
    setChildrens(childrens)


  }


  return (
      <div>
      <Navigation />
      {/* <FormsView/> */}
      <TestForm onSubmit={getFamilyInfo} />
      {parent.nameOfParent && childrens && <ProfileView parent={parent} childrens={ childrens}/>
      }
    </div>
  );
};
