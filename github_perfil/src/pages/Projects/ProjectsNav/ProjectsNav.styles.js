import styled, { css } from "styled-components";

export const ProjectsNavContainer = styled.nav`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: .5rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.MainFontColor};
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  ul {
    display: flex;

    li {
      &:first-of-type {
        a {
          border-top-left-radius: 6px;
          border-bottom-left-radius: 6px;

          ${({ projectsBeta }) => projectsBeta && css`
            background: #1f6feb;
            border-color: #1f6feb;
            color: ${({ theme }) => theme.colors.LightColor};

            div {
              color: ${({ theme }) => theme.colors.LightColor};
              border-color: ${({ theme }) => theme.colors.LightColor};
            }
          `}
        }
      }

      &:last-of-type {
        a {
          border-top-right-radius: 6px;
          border-bottom-right-radius: 6px;

          ${({ projects }) => projects && css`
            background: #1f6feb;
            border-color: #1f6feb;
            color: ${({ theme }) => theme.colors.LightColor};
          `}
        }
      }

      a {
        display: flex;
        align-items: center;
        gap: .5rem;
        color: ${({ theme }) => theme.colors.MainFontColor};
        border: 1px solid ${({ theme }) => theme.colors.BorderColor};
        padding: 5px 1rem;
        font-size: .875rem;
        font-weight: 500;

        svg {
          font-size: 1.35rem;
        }
      }
    }
  }
`;

export const InputProjects = styled.div`
  position: relative;
  grid-column: 2 / 6;

  @media (max-width: 1024px) {
    grid-column: 2 / 4;
  }

  @media (max-width: 820px) {
    width: 100%;
  }

  input {
    display: inline-block;
    width: 96%;
    height: 33.59px;
    background: #010409;
    color: ${({ theme }) => theme.colors.GrayColor};
    padding: 5px 10px;
    padding-left: 2.25rem;
    font-size: .8125rem;
    transition: .2s;

    @media (max-width: 820px) {
      width: 100%;
    }

    &:focus {
      border: 2px solid ${({ theme }) => theme.colors.LinkColor};
      background: ${({ theme }) => theme.colors.PrimaryBgColor};
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 9px;
    position: absolute;
    top: 0;
    left: 0;
    height: 33.59px;
    background: transparent;
    color: ${({ theme }) => theme.colors.GrayColor};
    font-size: 1.25rem;
  }
`;

export const ButtonNewProject = styled.div`
  grid-column: 6 / 7;
  position: relative;

  @media (max-width: 1024px) {
    grid-column: 4 / 5;
  }

  @media (max-width: 820px) {
    display: none;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.GreenColor};
    color: ${({ theme }) => theme.colors.LightColor};
    font-weight: 500;
    height: 33.59px;
    width: 100%;
    padding: 0;
    border-radius: 6px;
    transition: .2s;

    &:hover {
      background: ${({ theme }) => theme.colors.GreenColorHover};
    }

    &::after {
      content: '';    
      margin-left: 5px;
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

  ul {
    flex-direction: column;
  }
`;

export const SubmenuList = styled.li`
  padding: 1rem;
  width: 100%;
  font-size: .875rem;
  cursor: pointer;

  &:first-of-type {
    border-bottom: 1px solid ${({ theme }) => theme.colors.BorderColor};
  }

  &:hover {
    background: #1c2026;
  }

  p {
    margin-top: 2px;
    color: ${({ theme }) => theme.colors.GrayColor};
    line-height: 1.5;
  }
`;

export const SubmenuListArea = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.GrayColor};
  }
`;

export const SubmenuListContent = styled.div`
  padding-left: 2rem;
`;

export const SubmenuListHeader = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
`;