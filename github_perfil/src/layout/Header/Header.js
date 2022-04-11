import { Link } from 'react-router-dom';
import * as S from './Header.styles';
import githubLogo from '../../assets/images/github-logo.png';
import { RiMenuLine } from 'react-icons/ri';
import NavHeader from './NavHeader/NavHeader';
import HeaderIcons from './HeaderIcons/HeaderIcons';
import { useState } from 'react';

const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <S.HeaderContainer>
      <div>
        <S.HeaderBtnOpen onClick={() => setNav(!nav)}>
          <RiMenuLine />
        </S.HeaderBtnOpen>
      </div>

      <Link to='/'>
        <img id='initialLogo' src={githubLogo} alt="Github Logo" />
      </Link>

      <NavHeader nav={nav} />

      <HeaderIcons />
    </S.HeaderContainer>
  )
}

export default Header;
