import React from 'react'
import * as S from './Submenu.styles';

const Submenu = ({ children, ...props }) => {
  return (
    <S.ButtonSubmenuContainer {...props}>
      <S.ButtonSubmenu>
        {children}  
      </S.ButtonSubmenu>
    </S.ButtonSubmenuContainer>
  )
}

export default Submenu;