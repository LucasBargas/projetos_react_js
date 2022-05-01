import styled, { keyframes } from 'styled-components';

const animateProjectsList = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ProjectsListClear = styled.div`
  display: inline-block;
  margin: .25rem 0 1.25rem 0;
  font-size: .875rem;

  div {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.GrayColor};

    &:hover {
      color: ${({ theme }) => theme.colors.LinkColor};

      button {
        background: ${({ theme }) => theme.colors.LinkColor};
      }
    }

    button {
      background: ${({ theme }) => theme.colors.GrayColor};
      color: ${({ theme }) => theme.colors.LightColor};
      width: 18px;
      height: 18px;
      padding: 1px;
      font-size: 1rem;
      border-radius: 4px;
      margin-right: .5rem;
    }
  }
`;

export const ProjectsList = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.BorderColor};
  border-radius: 6px;
  animation: ${animateProjectsList} .4s forwards;
`;

export const ProjectsListHeader = styled.header`
  border: 1px solid ${({ theme }) => theme.colors.BorderColor};
  background: ${({ theme }) => theme.colors.SecondaryBgColor};
  padding: 1rem;
  font-size: .875rem;

  nav {
    display: flex;
    justify-content: space-between;

    ul {
      display: flex;
      gap: 1rem;

      li {
        a {
          display: flex;
          align-items: center;

          svg {
            margin-right: .25rem;
            font-size: 1.25rem;
          }
        }

        &:first-of-type {
          a {
            color: ${({ open }) => (open ? ({ theme }) => theme.colors.LightColor : ({ theme }) => theme.colors.GrayColor)};
          }
        }

        &:last-of-type {
          a {
            color: ${({ closed }) => (closed ? ({ theme }) => theme.colors.LightColor : ({ theme }) => theme.colors.GrayColor)};
          }
        }
      }
    }

    span {
      color: ${({ theme }) => theme.colors.GrayColor};
      display: flex;
      align-items: center;
      position: relative;
      cursor: pointer;

      &::after {
        content: '';    
        margin-left: 5px;
        display: block;
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 4px solid ${({ theme }) => theme.colors.GrayColor};
        transform: rotate(180deg);
        cursor: pointer;
      }

      &:hover {
        color: ${({ theme }) => theme.colors.LightColor};

        &::after {
          border-bottom: 4px solid ${({ theme }) => theme.colors.LightColor};
        }
      }
    }
  }
`;

export const ProjectsListContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.MainFontColor};

  h2 {
    font-weight: 500;
  }

  a:first-of-type {
    display: inline-block;
    background: ${({ theme }) => theme.colors.GreenColor};
    color: ${({ theme }) => theme.colors.LightColor};
    margin: 1.5rem 0 1rem 0;
    font-size: .875rem;
    font-weight: 500;
    border-radius: 6px;
    padding: 7px 1rem;
    transition: .2s;

    &:hover {
      background: ${({ theme }) => theme.colors.GreenColorHover};
    }
  }

  a:last-of-type {
    color: ${({ theme }) => theme.colors.LinkColor};
    font-size: .875rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;