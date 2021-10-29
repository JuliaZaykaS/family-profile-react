import { useState } from 'react';
import { ProfileView } from '../../views/ProfileView/ProfileView';
import { FormsView } from '../../views/FormsView/FormsView';
import { Navigation } from '../Navigation/Navigation';
import { Footer } from '../Footer/Footer';

export const App = () => {
  const [parent, setParent] = useState({ nameOfParent: '', ageOfParent: '' });
  const [childrens, setChildrens] = useState([]);
  const [viewForm, setViewForm] = useState(true);
  const [viewPreview, setViewPreview] = useState(false);

  const getFamilyInfo = (parent, childrens) => {
    setParent(parent);
    setChildrens(childrens);
  };

  const onBtnFormClick = e => {
    setViewForm(true);
    setViewPreview(false);
  };

  const onBtnPreviewClick = e => {
    setViewForm(false);
    setViewPreview(true);
  };

  return (
    <>
      <Navigation
        onBtnFormClick={onBtnFormClick}
        onBtnPreviewClick={onBtnPreviewClick}
      />
      {viewForm && <FormsView onSubmit={getFamilyInfo} />}

      {viewPreview && <ProfileView parent={parent} childrens={childrens} />}
      <Footer />
    </>
  );
};
