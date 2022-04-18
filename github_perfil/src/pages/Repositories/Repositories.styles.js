import styled from 'styled-components'
import * as Variables from '../../styles/Variables';

export const RepoContainer = styled.section`
  color: ${Variables.MainFontColor};
`;

export const SearchArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  border-bottom: 1px solid ${Variables.DarkBtnColor};
  padding-bottom: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: .5rem;
  }

  input {
    @media (max-width: 480px) {
      order: 2;
      margin-top: 1rem;
    }

    &::placeholder {
      color: ${Variables.MainFontColor};
      font-size: .8125rem;
      opacity: .5;
    }
  }
`;

export const FilterButtons = styled.div`
  @media (max-width: 480px) {
    order: 3;
  }

  display: flex;
  gap: .25rem;
`;

export const Button = styled.div`
  position: relative;

  span {
    display: inline-block;
    cursor: pointer;
    font-size: .875rem;
    font-weight: 400;
    padding: 5px 16px;
    box-shadow: 0px 0px transparent, 0px 0px transparent;
    border: 1px solid rgba(240,246,252,0.1);
    background: ${Variables.DarkBtnColor};
    border-radius: 6px;
    display: flex;
    align-items: center;

    &::after {
      content: '';
      margin-left: .5rem;
      display: block;
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-bottom: 4px solid ${Variables.MainFontColor};
      transform: rotate(180deg);
      cursor: pointer;
      position: relative;
      top: 2px;
    }
  }

  nav {
    li {
      padding: 7px 7px 7px 1rem;
      cursor: pointer;

      @media (max-width: 480px) {
        padding: 1rem 7px 1rem 1rem;
      }

      &:not(:last-of-type) {
        border-bottom: 1px solid ${Variables.DarkBtnColor};
      }
    }
  }
`;

export const ButtonNewRepo = styled.div`
  @media (max-width: 480px) {
    order: 1;
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    padding: 5px 16px;
    font-size: .875rem;
    font-weight: 500;
    line-height: 20px;
    color: ${Variables.LightColor};
    background: ${Variables.GreenColor};
    border: 1px solid rgba(240,246,252,0.1);
    border-radius: 6px;
    transition: .2s;

    &:hover {
      background: ${Variables.GreenColorHover};
    }

    @media (max-width: 480px) {
      width: 100%;
      justify-content: center;
    }

    svg {
      margin-right: 5px;
    }
  }
`;

export const CloseButtonSubmenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 7px 7px 16px;
  border-bottom: 1px solid ${Variables.DarkBtnColor};

  button {
    background: transparent;
    color: ${Variables.GrayColor};
    font-size: 1rem;

    @media (max-width: 480px) {
      font-size: 1.25rem;
    }

    &:hover {
      color: ${Variables.MainFontColor};
    }
  }
`;