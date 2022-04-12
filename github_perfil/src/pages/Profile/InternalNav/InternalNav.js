import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import * as S from './InternalNav.styles';
import { FiBookOpen } from 'react-icons/fi';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { RiProjectorLine } from 'react-icons/ri';
import { BsBox, BsStar } from 'react-icons/bs';

const InternalNav = () => {
  return (
    <S.InternalNavContainer>
      <nav>
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
              Repositories
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
              Stars
            </NavLink>
          </li>
        </ul>
      </nav>
    </S.InternalNavContainer>
  )
}

export default InternalNav;