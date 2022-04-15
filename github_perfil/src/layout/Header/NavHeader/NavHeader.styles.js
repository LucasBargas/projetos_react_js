import styled from 'styled-components';
import * as Variables from '../../../styles/Variables';

export const Nav = styled.nav`
  width: 100%;

  @media (max-width: 768px) {
    padding-top: 1rem;
    display: ${({ nav }) => (nav ? 'block' : 'none')};
    grid-column: 1 / 4;
    grid-row: 2 / 3;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-left: 1.25rem;

    @media (max-width: 768px) {
      display: block;
      padding-left: 0;
    }

    input {
      width: 100%;
      max-width: 270px;
      height: 28px;
      color: ${Variables.LightColor}; 
      transition: .4s;

      @media (max-width: 768px) {
        max-width: none;
        margin-bottom: 15px;
      }

      &:focus {
        max-width: 518px;
        border-color: ${Variables.LinkColor};

        @media (max-width: 768px) {
          max-width: 100%;
        }
      }

      &::placeholder {
        color: ${Variables.LightColor};
      }
    }

    li {
      &:first-of-type {
        @media (max-width: 768px) {
          border-top: 1px solid ${Variables.BorderColor};
        }
      }

      &:nth-of-type(1),
      &:nth-of-type(6),
      &:nth-of-type(7),
      &:nth-of-type(8),
      &:nth-of-type(9),
      &:nth-of-type(10) {
        display: none;

        @media (max-width: 768px) {
          display: block;
        }
      }

      a {
        padding: 4px 0;

        @media (max-width: 768px) {
          display: flex;
          align-items: center;
          text-align: left;
          padding: 10px 0;
          width: 100%;
        }

        &:hover {
          color: ${Variables.LightColor};
        }
      }

      &:not(:last-of-type) {
        @media (max-width: 768px) {
          border-bottom: 1px solid ${Variables.BorderColor};
        }
      }

      @media (max-width: 768px) {
        img {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          margin-right: 5px;
          object-fit: cover;
        }

        svg {
          margin-right: 5px;
        }
      }
    }
  }
`;