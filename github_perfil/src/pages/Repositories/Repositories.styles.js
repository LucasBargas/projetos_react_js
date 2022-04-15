import styled from 'styled-components'
import { animationModal } from './NewRepository/NewRepository.styles';

export const RepoContainer = styled.section`
  color: #c9d1d9;
`;

export const SearchArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  border-bottom: 1px solid #21262d;
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
      color: #c9d1d9;
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
    background: #21262d;
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
      border-bottom: 4px solid #c9d1d9;
      transform: rotate(180deg);
      cursor: pointer;
      position: relative;
      top: 2px;
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
    color: #ffffff;
    background: #238636;
    border: 1px solid rgba(240,246,252,0.1);
    border-radius: 6px;

    @media (max-width: 480px) {
      width: 100%;
      justify-content: center;
    }

    svg {
      margin-right: 5px;
    }
  }
`;

export const ButtonSubmenuContainer = styled.div`
  position: absolute;
  right: 0;
  width: 20vw;
  display: ${({ show }) => show ? 'block' : 'none'};

  @media (max-width: 480px) {
    background: rgba(13,16,23,.9);
    display: ${({ show }) => show ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 500;
    width: 100%;
    height: 100vh;
    padding: 1.5rem;
  }
`;

export const ButtonSubmenu = styled.nav`
  background: #161b22;
  margin-top: 7px;
  box-shadow: 0 8px 24px #010409;
  border: 1px solid rgba(240,246,252,0.1);
  border-radius: 6px;
  font-size: .75rem;

  @media (max-width: 480px) {
    width: 100%;
    animation: ${animationModal} .4s forwards;
  }

  li {
    padding: 7px 7px 7px 1rem;
    cursor: pointer;

    @media (max-width: 480px) {
      padding: 1rem 7px 1rem 1rem;
    }

    &:not(:last-of-type) {
      border-bottom: 1px solid #21262d;
    }
  }
`;

export const CloseButtonSubmenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 7px 7px 16px;
  border-bottom: 1px solid #21262d;

  button {
    background: transparent;
    color: #8b949e;
    font-size: 1rem;

    @media (max-width: 480px) {
      font-size: 1.25rem;
    }

    &:hover {
      color: #c9d1d9;
    }
  }
`;