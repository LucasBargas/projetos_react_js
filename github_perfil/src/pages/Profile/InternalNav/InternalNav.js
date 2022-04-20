import React, { useEffect, useRef, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './InternalNav.styles';
import Container from '../../../styles/Container';
import { FiBookOpen } from 'react-icons/fi';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { RiProjectorLine } from 'react-icons/ri';
import { BsBox, BsStar } from 'react-icons/bs';
import repoList from '../../Repositories/RepositoriesList/repoList';
import userPhoto from '../../../assets/images/user-photo.png';
import { UserContext } from '../../../utils/UserContext';

const InternalNav = ({ userPhotoRef }) => {
  const { username } = useContext(UserContext);
  const [internalNavFixed, setInternalNavFixed] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const internalNav = useRef();

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.pageYOffset >= internalNav.current.offsetTop) {
        setInternalNavFixed(true);

        if (userPhotoRef !== null) {
          const userPhotoHeight = userPhotoRef.getBoundingClientRect();
          if (window.pageYOffset >= userPhotoHeight.height) setShowUser(true);
          else if (window.pageYOffset < userPhotoHeight.height) setShowUser(false);
        }
      };
      if (window.pageYOffset < 96) setInternalNavFixed(false);
    }

    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, [userPhotoRef]);

  return (
    <S.InternalNavContainer ref={internalNav} fixed={internalNavFixed} showUser={showUser}>
      <Container>
        <nav>
          <S.InternalNavUser showUser={showUser}>
            <figure>
              <img src={userPhoto} alt="user" />
            </figure>
            {username ? username : 'LucasBargas'}
          </S.InternalNavUser>

          <ul>
            <li>
              <NavLink to=''>
                <span><FiBookOpen /></span>
                Overview
              </NavLink>
            </li>

            <li>
              <NavLink to='repositories'>
                <span><HiOutlineDesktopComputer /></span> 
                Repositories <S.FlagLength>{repoList.length}</S.FlagLength>
              </NavLink>
            </li>

            <li>
              <NavLink to='projects'>
                <span><RiProjectorLine /></span>
                Projects
              </NavLink>
            </li>

            <li>
              <NavLink to='packages'>
                <span><BsBox /></span>
                Packages
              </NavLink>
            </li>

            <li>
              <NavLink to='stars'>
                <span><BsStar /></span>
                Stars <S.FlagLength>1</S.FlagLength>
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </S.InternalNavContainer>
  )
}

export default InternalNav;