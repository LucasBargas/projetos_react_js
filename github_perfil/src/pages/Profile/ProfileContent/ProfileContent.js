import React from 'react';
import * as S from './ProfileContent.styles';
import Container from '../../../styles/Container';
import ProfileDatas from  './ProfileDatas/ProfileDatas';
import ProfilePages from  './ProfilePages/ProfilePages';

const ProfileContent = () => {
  return (
    <S.ProfileContentContainer>
      <Container>
        <S.ProfileContentArea>
         <ProfileDatas />
         <ProfilePages />
        </S.ProfileContentArea>
      </Container>
    </S.ProfileContentContainer>
  )
}

export default ProfileContent;
