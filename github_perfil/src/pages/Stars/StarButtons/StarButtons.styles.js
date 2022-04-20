import styled from 'styled-components';
import * as Variables from '../../../styles/Variables';

export const StarHeaderButtons = styled.ul`
  display: flex;
  align-items: center;
  gap: .5rem;

  .btnOpenSubmenu {
    padding: 7px 1rem;
    color: ${Variables.MainFontColor};
    border: 1px solid rgba(240,246,252,0.1);
    border-radius: 6px;
    font-size: .875rem;
    font-weight: 600;
    box-shadow: 0px 0px transparent, 0px 0px transparent;
    transition: .2s;
  }
`;

export const CreateListButton = styled.li`
  button {
    background: ${Variables.GreenColor};

    &:hover {
      background: ${Variables.GreenColorHover};
    }
  }
`;

export const SortButton = styled.li`
  position: relative;

  .sortBtn {
    display: flex;
    align-items: center;
    background: ${Variables.DarkBtnColor};

    &:hover, &:focus {
      background: ${Variables.BorderColor};
      border-color: rgba(240,246,252,0.4);
    }

    &::after {
      content: '';  
      margin-left: 0.5rem;
      display: block;
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-bottom: 4px solid ${Variables.MainFontColor};
      transform: rotate(180deg);
    }
  }

  li:not(:last-of-type) {
    border-bottom: 1px solid ${Variables.DarkBtnColor};
  }

  li:not(:first-of-type) {
    padding: 10px 2.25rem;
    cursor: pointer;

    &:hover {
      background: #1c2026;
    }
  }

  li.check {
    &::before {
      content: '✓';
      left: 0;
      position: absolute;
      font-size: .75rem;
      padding: 0 15px;
      font-weight: 700;
    }
  }
`;

export const closeSubmenu = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 10px 1rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: ${Variables.MainFontColor};
    font-size: 1rem;
  }
`;