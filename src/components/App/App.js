import React from 'react';
// import { ProfileView } from '../../views/ProfileView/ProfileView';
// import { FormsView } from '../../views/FormsView/FormsView';
import { Navigation } from '../Navigation/Navigation';
import { TestForm } from '../testForm/TestForm';

export const App = () => {
  return (
      <div>
      <Navigation />
      {/* <FormsView/> */}
      {/* <ProfileView /> */}
      <TestForm/>
    </div>
  );
};
