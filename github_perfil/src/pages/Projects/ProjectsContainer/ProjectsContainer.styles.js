import styled, { keyframes } from 'styled-components';
import * as Variables from '../../../styles/Variables';

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
    color: ${Variables.GrayColor};

    &:hover {
      color: ${Variables.LinkColor};

      button {
        background: ${Variables.LinkColor};
      }
    }

    button {
      background: ${Variables.GrayColor};
      color: ${Variables.LightColor};
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
  border: 1px solid ${Variables.BorderColor};
  border-radius: 6px;
  animation: ${animateProjectsList} .4s forwards;
`;

export const ProjectsListHeader = styled.header`
  border: 1px solid ${Variables.BorderColor};
  background: ${Variables.SecondaryBgColor};
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
            color: ${({ open }) => (open ? Variables.LightColor : Variables.GrayColor)};
          }
        }

        &:last-of-type {
          a {
            color: ${({ closed }) => (closed ? Variables.LightColor : Variables.GrayColor)};
          }
        }
      }
    }

    span {
      color: ${Variables.GrayColor};
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
        border-bottom: 4px solid ${Variables.GrayColor};
        transform: rotate(180deg);
        cursor: pointer;
      }

      &:hover {
        color: ${Variables.LightColor};

        &::after {
          border-bottom: 4px solid ${Variables.LightColor};
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
  color: ${Variables.MainFontColor};

  h2 {
    font-weight: 500;
  }

  a:first-of-type {
    display: inline-block;
    background: ${Variables.GreenColor};
    color: ${Variables.LightColor};
    margin: 1.5rem 0 1rem 0;
    font-size: .875rem;
    font-weight: 500;
    border-radius: 6px;
    padding: 7px 1rem;
  }

  a:last-of-type {
    color: ${Variables.LinkColor};
    font-size: .875rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;