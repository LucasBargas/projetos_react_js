import styled from 'styled-components';

export const RepoContainer = styled.section`
  color: #c9d1d9;
`;

export const SearchArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  border-bottom: 1px solid #21262d;
  padding-bottom: 1rem;

  input {
    width: 100%;
    padding: 5px 12px;
    color: #c9d1d9;

    &::placeholder {
      color: #c9d1d9;
      font-size: .8125rem;
      opacity: .5;
    }
  }
`;

export const FilterButtons = styled.div`
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
`;

export const ButtonSubmenu = styled.nav`
  background: #161b22;
  margin-top: 7px;
  box-shadow: 0px 0px transparent, 0px 0px transparent;
  border: 1px solid rgba(240,246,252,0.1);
  border-radius: 6px;
  font-size: .75rem;

  li {
    padding: 7px 7px 7px 16px;
    cursor: pointer;

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

    &:hover {
      color: #c9d1d9;
    }
  }
`;