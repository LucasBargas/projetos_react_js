import React from 'react';
import { Route, Routes } from 'react-router-dom';
import * as S from './ProfilePages.styles';
import Overview from '../../Overview/Overview';
import Repositories from '../../Repositories/Repositories';
import Projects from '../../Projects/Projects';
import Packages from '../../Packages/Packages';
import Stars from '../../Stars/Stars';

const ProfilePages = () => {
  return (
    <S.ProfilePagesArea>
      <Routes>
        <Route path='' element={<Overview />} />
        <Route path='repositories' element={<Repositories />} />
        <Route path='projects' element={<Projects />} />
        <Route path='packages' element={<Packages />} />
        <Route path='stars' element={<Stars />} />
      </Routes>
    </S.ProfilePagesArea>
  )
}

export default ProfilePages;
