import styled from 'styled-components'

export const RepoContainer = styled.section`
  color: ${({ theme }) => theme.colors.MainFontColor};
`;

export const SearchArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.DarkBtnColor};
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
      color: ${({ theme }) => theme.colors.MainFontColor};
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

  button {
    display: inline-block;
    cursor: pointer;
    font-size: .875rem;
    font-weight: 400;
    padding: 5px 16px;
    color: ${({ theme }) => theme.colors.MainFontColor};
    box-shadow: 0px 0px transparent, 0px 0px transparent;
    border: 1px solid rgba(240,246,252,0.1);
    background: ${({ theme }) => theme.colors.DarkBtnColor};
    border-radius: 6px;
    display: flex;
    align-items: center;

    &:hover, &:focus {
      background: ${({ theme }) => theme.colors.BorderColor};
      border-color: rgba(240,246,252,0.4);
    }

    &::after {
      content: '';
      margin-left: .5rem;
      display: block;
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-bottom: 4px solid ${({ theme }) => theme.colors.MainFontColor};
      transform: rotate(180deg);
      cursor: pointer;
      position: relative;
      top: 2px;
    }
  }

  nav {
    li {
      padding: 10px 7px 10px 2.25rem;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.MainFontColor};
      display: flex;
      align-items: center;

      @media (max-width: 480px) {
        padding: 1rem 7px 1rem 2.25rem;
      }

      &:not(:last-of-type) {
        border-bottom: 1px solid ${({ theme }) => theme.colors.DarkBtnColor};
      }

      &:hover {
        background: #1c2026;
      }

      &.active::before {
        content: '✓';
        left: 0;
        position: absolute;
        font-size: .75rem;
        padding: 0 15px;
        font-weight: 700;
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
    color: ${({ theme }) => theme.colors.LightColor};
    background: ${({ theme }) => theme.colors.GreenColor};
    border: 1px solid rgba(240,246,252,0.1);
    border-radius: 6px;
    transition: .2s;

    &:hover {
      background: ${({ theme }) => theme.colors.GreenColorHover};
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
  padding: 10px 7px 10px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.DarkBtnColor};

  button {
    background: transparent;
    color: ${({ theme }) => theme.colors.GrayColor};
    font-size: 1rem;
    border: none;
    padding: .25rem 0 0 .25rem;

    &::after {
      display: none;
    }

    @media (max-width: 480px) {
      font-size: 1.25rem;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.MainFontColor};
    }
  }
`;