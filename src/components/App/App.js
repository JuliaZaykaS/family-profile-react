import React from 'react';
import { ProfileView } from '../../views/ProfileView/ProfileView';
import { FormsView } from '../../views/FormsView/FormsView';
import { Navigation } from '../Navigation/Navigation';

export const App = () => {
  return (
      <div>
      <Navigation />
      <FormsView/>
      <ProfileView />
    </div>
  );
};
